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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-md" : "bg-white shadow-sm"}`}>
      {/* Top micro-bar */}
      <div className="bg-[#0F172A] text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 text-[11px] md:text-xs">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8FE4FF] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8FE4FF]" />
            </span>
            <span className="tracking-[0.15em] uppercase font-bold text-[#8FE4FF]">
              {labels.platformLabel}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+966590401777" className="flex items-center gap-2 font-bold hover:text-[#8FE4FF] transition" dir="ltr">
              <PhoneCall size={12} className="text-[#8FE4FF]" />
              +966 59 040 1777
            </a>
            <Link href={switchedPath} className="hidden md:flex items-center gap-1.5 hover:text-[#8FE4FF] font-bold transition border-l border-white/20 pl-5">
              <Globe size={13} />
              {labels.switchLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto max-w-[1400px] px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Zone */}
          <Link href={`/${locale}`} className="flex items-center group relative hover:opacity-95 transition-opacity py-1">
             <Image 
                src="/logo.png" 
                alt="Medix" 
                width={200} 
                height={75} 
                className="object-contain w-36 md:w-44 lg:w-52 h-auto" 
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
                      ? "text-[#0E527B] bg-[#F0F9FF]" 
                      : "text-slate-600 hover:text-[#0E527B] hover:bg-slate-50"
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
                <div className="text-[11px] text-slate-500 font-medium mb-0.5">{labels.phoneLabel}</div>
                <a href="tel:+966590401777" className="text-[17px] font-black text-[#0F172A] hover:text-[#0E527B] transition-colors flex items-center gap-2" dir="ltr">
                  <PhoneCall size={14} className="text-slate-400" />
                  +966 59 040 1777
                </a>
              </div>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="hidden md:inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#0E527B] text-white text-[15px] font-bold shadow-[0_10px_20px_-10px_rgba(14,82,123,0.5)] transition-all hover:bg-[#166A9C] hover:shadow-[0_15px_25px_-10px_rgba(14,82,123,0.6)] hover:-translate-y-0.5"
            >
              {labels.cta}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
              aria-label={labels.menu}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl p-6 px-6 pb-8 animate-in slide-in-from-top-4 fade-in duration-200 z-40">
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
                      active ? "bg-[#F0F9FF] text-[#0E527B]" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {isArabic ? item.ar : item.en}
                    <ChevronRight size={18} className={isArabic ? "rotate-180 opacity-40" : "opacity-40"} />
                  </Link>
                );
              })}
              
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-4">
                <Link
                  href={switchedPath}
                  className="flex items-center justify-center p-4 rounded-2xl bg-slate-50 text-slate-700 font-bold"
                >
                  <Globe size={18} className="mr-2" />
                  {labels.switchLabel}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsOpen(false)}
                  className="p-4 rounded-2xl bg-[#0E527B] text-white font-bold text-center shadow-lg"
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