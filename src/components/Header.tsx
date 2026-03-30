"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { Menu, PhoneCall, X, Globe, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";

type NavItem = {
  key: string;
  href: string;
  ar: string;
  en: string;
};

const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "", ar: "الرئيسية", en: "Home" },
  { key: "about", href: "about", ar: "من نحن", en: "About" },
  { key: "services", href: "services", ar: "الخدمات", en: "Services" },
  { key: "model", href: "model", ar: "نموذج العمل", en: "Operating Model" },
  { key: "benefits", href: "benefits", ar: "الفوائد", en: "Benefits" },
  { key: "contact", href: "contact", ar: "تواصل معنا", en: "Contact" },
];

function switchLocalePath(pathname: string, nextLocale: string) {
  if (!pathname) return `/${nextLocale}`;
  if (/^\/(ar|en)(\/|$)/.test(pathname)) {
    return pathname.replace(/^\/(ar|en)/, `/${nextLocale}`);
  }
  return `/${nextLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isArabic = locale === "ar";
  const nextLocale = isArabic ? "en" : "ar";
  const switchedPath = switchLocalePath(pathname || "/", nextLocale);

  const labels = useMemo(() => ({
    phoneLabel: isArabic ? "بوابة التواصل المؤسسي" : "Institutional Contact",
    platformLabel: isArabic ? "منصة المراجعة الطبية الاستراتيجية" : "Strategic Medical Review Platform",
    switchLabel: isArabic ? "English" : "عربي",
    cta: isArabic ? "طلب شراكة" : "Request Partnership",
    menu: isArabic ? "القائمة" : "Menu",
  }), [isArabic]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#081D33]/95 backdrop-blur-xl shadow-lg border-b border-white/10" : "bg-transparent"}`}>
      {/* Top micro-bar */}
      <div className="bg-white border-b border-slate-200 text-slate-600">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 text-[11px] md:text-xs">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B4D8] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B4D8]" />
            </span>
            <span className="tracking-[0.15em] uppercase font-bold text-[#0F47A1]">
              {labels.platformLabel}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+966590401777" className="flex items-center gap-2 font-bold hover:text-[#00B4D8] text-[#0A2540] transition" dir="ltr">
              <PhoneCall size={12} className="text-[#00B4D8]" />
              +966 59 040 1777
            </a>
            <Link href={switchedPath} className="hidden md:flex items-center gap-1.5 text-slate-600 hover:text-[#00B4D8] font-bold transition border-l border-slate-200 pl-5">
              <Globe size={13} />
              {labels.switchLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto max-w-[1400px] px-6 py-2 lg:py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo Zone */}
          <Link href={`/${locale}`} className="flex items-center group relative hover:opacity-95 transition-opacity">
             <Image 
                src="/logo.png" 
                alt="Medix" 
                width={160} 
                height={48} 
                className="object-contain w-28 md:w-36 lg:w-40 h-8 md:h-10 lg:h-11" 
                priority
             />
          </Link>

          {/* Center Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const href = `/${locale}${item.href ? `/${item.href}` : ""}`;
              const active = pathname === href || pathname === `${href}/`;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`relative px-5 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 ${
                    active 
                      ? "text-[#00B4D8] bg-white/10" 
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {isArabic ? item.ar : item.en}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4 mr-4">
              <div className={`${isArabic ? "text-left" : "text-right"}`}>
                <div className="text-[11px] text-slate-300 font-medium mb-0.5">{labels.phoneLabel}</div>
                <a href="tel:+966590401777" className="text-[17px] font-black text-white hover:text-[#00B4D8] transition-colors flex items-center gap-2" dir="ltr">
                  <PhoneCall size={14} className="text-[#00B4D8]" />
                  +966 59 040 1777
                </a>
              </div>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="hidden md:inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#00B4D8] text-white text-[15px] font-black shadow-[0_10px_20px_-10px_rgba(0,180,216,0.4)] transition-all hover:bg-[#0096C7] hover:shadow-[0_15px_25px_-10px_rgba(0,180,216,0.6)] hover:-translate-y-0.5"
            >
              {labels.cta}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden flex items-center justify-center h-12 w-12 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
              aria-label={labels.menu}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-[#081D33] border-b border-white/10 shadow-2xl p-6 px-6 pb-8 animate-in slide-in-from-top-4 fade-in duration-200 z-40">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const href = `/${locale}${item.href ? `/${item.href}` : ""}`;
                const active = pathname === href;
                return (
                  <Link
                    key={item.key}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-2xl text-[16px] font-bold transition-colors ${
                      active ? "bg-white/10 text-[#00B4D8]" : "bg-transparent text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    {isArabic ? item.ar : item.en}
                    <ChevronRight size={18} className={isArabic ? "rotate-180 opacity-40 text-white" : "opacity-40 text-white"} />
                  </Link>
                );
              })}
              
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
                <Link
                  href={switchedPath}
                  className="flex items-center justify-center p-4 rounded-2xl bg-white/5 text-white font-bold"
                >
                  <Globe size={18} className="mr-2" />
                  {labels.switchLabel}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsOpen(false)}
                  className="p-4 rounded-2xl bg-[#00B4D8] text-white font-black text-center shadow-[0_10px_20px_-10px_rgba(0,180,216,0.4)]"
                >
                  {labels.cta}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}