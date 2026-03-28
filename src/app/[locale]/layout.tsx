import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Home' });
  return {
    title: t('title'),
    description: t('hero_subheadline'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
