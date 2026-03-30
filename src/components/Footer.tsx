import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Navigation');
  const services = useTranslations('Services');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const navItems = [
    { name: nav('about'), href: `/${locale}/about` },
    { name: nav('services'), href: `/${locale}/services` },
    { name: nav('model'), href: `/${locale}/model` },
    { name: nav('benefits'), href: `/${locale}/benefits` },
    { name: nav('contact'), href: `/${locale}/contact` },
  ];

  const serviceItems = [
    services('review_before.title'),
    services('surgeries.title'),
    services('diagnostics.title'),
    services('second_opinion.title'),
    services('cost_analysis.title'),
  ];

  return (
    <footer className="relative bg-[#081D33] text-white pt-24 pb-12 mt-auto overflow-hidden border-t border-white/5">
      {/* Decorative premium gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,180,216,0.1),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,71,161,0.05),transparent_40%)]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 lg:gap-12 mb-20">

          {/* Brand Column */}
          <div className="flex flex-col gap-8 lg:pr-12">
            <Link href={`/${locale}`} className="inline-flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-5 w-fit hover:border-[#00B4D8]/30 hover:-translate-y-1 transition-all shadow-2xl">
              <Image
                src="/logo.png"
                alt="Medix Ecosystem"
                width={180}
                height={60}
                className="object-contain w-40 h-auto"
              />
            </Link>
            <p className="text-slate-400 text-[16px] leading-relaxed max-w-sm font-medium">
              {isArabic
                ? "طبقة مراجعة مؤسسية مستقلة لقطاع التأمين، تقدم تحليلات مبنية على الأدلة لضمان جودة القرار وضبط التكاليف."
                : "An independent institutional review layer for the insurance sector, providing evidence-based analytics to ensure decision quality and cost control."}
            </p>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[13px] font-black uppercase tracking-[0.2em] text-[#00B4D8] mb-2 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#00B4D8]" />
              {nav('contact')}
            </h4>
            <div className="flex flex-col gap-6">
              <a href="tel:+966590401777" className="group flex items-center gap-5 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00B4D8] group-hover:bg-[#00B4D8] group-hover:text-[#081D33] transition-all shadow-lg">
                  <PhoneCall size={18} />
                </div>
                <div className="flex flex-col" dir="ltr">
                  <span className="text-[11px] uppercase tracking-widest text-[#00B4D8] font-black mb-0.5">{isArabic ? "الهاتف المؤسسي" : "Institutional Phone"}</span>
                  <span className="text-[18px] font-black tracking-tight">+966 59 040 1777</span>
                </div>
              </a>
              <div className="group flex items-center gap-5 text-slate-300">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00B4D8]">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] uppercase tracking-widest text-slate-500 font-black mb-0.5">{isArabic ? "البريد الإلكتروني" : "Email"}</span>
                  <span className="text-[16px] font-bold">info@medix.com.sa</span>
                </div>
              </div>
              <div className="group flex items-center gap-5 text-slate-300">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#06B6D4]">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] uppercase tracking-widest text-slate-500 font-black mb-0.5">{isArabic ? "المقر" : "Headquarters"}</span>
                  <span className="text-[16px] font-bold">{isArabic ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[13px] font-black uppercase tracking-[0.2em] text-[#00E5FF] mb-2 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#00E5FF]" />
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#00B4D8] transition-colors text-[16px] font-bold flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#00B4D8] group-hover:scale-150 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[13px] font-black uppercase tracking-[0.2em] text-[#00E5FF] mb-2 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#00E5FF]" />
              {/* @ts-ignore */}
              {nav('services') || "Services"}
            </h4>
            <ul className="flex flex-col gap-4">
              {serviceItems.map((item) => (
                <li key={item} className="text-slate-400 text-[15px] leading-relaxed font-medium flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-[13px] font-black tracking-wide">
            &copy; {new Date().getFullYear()} Medix. {t('rights')}
          </p>
          <div className="flex items-center gap-8 text-[11px] text-slate-500 font-black tracking-[0.2em] uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-pulse" />
              {isArabic ? "منصة رقمية معتمدة" : "Certified Digital Platform"}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-800" />
            <span>{isArabic ? "قطاع التأمين" : "Insurance Sector"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}