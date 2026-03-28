using System;
using System.Drawing;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.Web.WebView2.Core;
using Windows.Foundation;

namespace MedixCapture
{
    internal static class Program
    {
        [STAThread]
        private static void Main(string[] args)
        {
            if (args.Length < 4)
            {
                Console.Error.WriteLine("Usage: webviewshot <url> <output> <width> <height>");
                Environment.Exit(1);
                return;
            }

            var url = args[0];
            var output = args[1];
            var width = int.Parse(args[2]);
            var height = int.Parse(args[3]);

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            var form = new Form
            {
                StartPosition = FormStartPosition.Manual,
                Location = new System.Drawing.Point(0, 0),
                Size = new System.Drawing.Size(width, height),
                ShowInTaskbar = false,
                FormBorderStyle = FormBorderStyle.None,
                TopMost = true,
            };

            form.Shown += async (sender, e) =>
            {
                try
                {
                    await CaptureAsync(form, url, output, width, height);
                }
                catch (Exception ex)
                {
                    Console.Error.WriteLine(ex.ToString());
                    Environment.ExitCode = 1;
                }
                finally
                {
                    form.BeginInvoke(new Action(() => form.Close()));
                }
            };

            Application.Run(form);
        }

        private static async Task CaptureAsync(Form form, string url, string output, int width, int height)
        {
            var env = WaitFor(CoreWebView2Environment.CreateAsync());
            var windowRef = CoreWebView2ControllerWindowReference.CreateFromWindowHandle(unchecked((ulong)form.Handle.ToInt64()));
            var controller = WaitFor(env.CreateCoreWebView2ControllerAsync(windowRef));
            controller.Bounds = new Rect(0, 0, width, height);
            controller.IsVisible = true;

            var webview = controller.CoreWebView2;
            var completed = new TaskCompletionSource<bool>();
            webview.NavigationCompleted += ((sender, args) =>
            {
                if (args.IsSuccess)
                {
                    completed.TrySetResult(true);
                }
                else
                {
                    completed.TrySetException(new InvalidOperationException("Navigation failed: " + args.WebErrorStatus.ToString()));
                }
            });

            webview.Navigate(url);
            await completed.Task;
            await Task.Delay(2500);

            using (var bmp = new Bitmap(width, height))
            using (var g = Graphics.FromImage(bmp))
            {
                var origin = form.PointToScreen(System.Drawing.Point.Empty);
                g.CopyFromScreen(origin, System.Drawing.Point.Empty, new System.Drawing.Size(width, height), CopyPixelOperation.SourceCopy);
                bmp.Save(output, System.Drawing.Imaging.ImageFormat.Png);
            }

            controller.Close();
        }

        private static T WaitFor<T>(IAsyncOperation<T> operation)
        {
            T result = default(T);
            Exception error = null;
            var done = new ManualResetEventSlim(false);

            operation.Completed = (info, status) =>
            {
                try
                {
                    if (status == AsyncStatus.Completed)
                    {
                        result = info.GetResults();
                    }
                    else if (status == AsyncStatus.Canceled)
                    {
                        error = new OperationCanceledException();
                    }
                    else
                    {
                        error = new InvalidOperationException("Async operation failed with status " + status.ToString());
                    }
                }
                catch (Exception ex)
                {
                    error = ex;
                }
                finally
                {
                    done.Set();
                }
            };

            done.Wait();
            if (error != null)
            {
                throw error;
            }

            return result;
        }
    }
}


