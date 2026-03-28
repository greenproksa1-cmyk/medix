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
    <footer className="relative bg-[#0F172A] text-white pt-20 pb-8 mt-auto overflow-hidden">
      {/* Decorative premium gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,82,123,0.4),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(5,121,189,0.15),transparent_40%)]" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:pr-12">
            <Link href={`/${locale}`} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 w-fit hover:bg-white/10 transition-colors">
              <div className="bg-white rounded-xl p-2 h-14 w-14 flex items-center justify-center shrink-0">
                <Image src="/logo.png" alt="Medix" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <div className="text-[24px] font-black text-white leading-none mb-1 tracking-tight">Medix</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#8FE4FF] font-bold">
                  {isArabic ? "منصة مراجعة طبية" : "Strategic Review Platform"}
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
              {isArabic 
                ? "طبقة مراجعة مؤسسية مستقلة لقطاع التأمين، تقدم تحليلات مبنية على الأدلة لضمان جودة القرار وضبط التكاليف." 
                : "An independent institutional review layer for the insurance sector, providing evidence-based analytics to ensure decision quality and cost control."}
            </p>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white mb-2 flex items-center gap-3">
              <span className="w-4 h-[2px] bg-[#0E527B]" />
              {nav('contact')}
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+966590401777" className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8FE4FF] group-hover:bg-[#0E527B] group-hover:border-[#0E527B] transition-all">
                  <PhoneCall size={16} />
                </div>
                <div className="flex flex-col" dir="ltr">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">{isArabic ? "الهاتف المؤسسي" : "Institutional Phone"}</span>
                  <span className="text-[16px] font-bold">+966 59 040 1777</span>
                </div>
              </a>
              <div className="group flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8FE4FF]">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">{isArabic ? "البريد الإلكتروني" : "Email"}</span>
                  <span className="text-[15px] font-medium">info@medix.com.sa</span>
                </div>
              </div>
              <div className="group flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8FE4FF]">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">{isArabic ? "المقر" : "Headquarters"}</span>
                  <span className="text-[15px] font-medium">{isArabic ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white mb-2 flex items-center gap-3">
              <span className="w-4 h-[2px] bg-[#0E527B]" />
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-[15px] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white mb-2 flex items-center gap-3">
              <span className="w-4 h-[2px] bg-[#0E527B]" />
              {/* @ts-ignore */}
              {nav('services') || "Services"}
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceItems.map((item) => (
                <li key={item} className="text-slate-400 text-[14px] leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[13px] font-medium">
            &copy; {new Date().getFullYear()} Medix. {t('rights')}
          </p>
          <div className="flex items-center gap-6 text-[13px] text-slate-500 font-medium tracking-wide uppercase">
            <span>{isArabic ? "منصة رقمية معتمدة" : "Certified Digital Platform"}</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>{isArabic ? "قطاع التأمين" : "Insurance Sector"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
