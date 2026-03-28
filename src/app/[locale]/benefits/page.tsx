'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonBanner from '@/components/CommonBanner';
import { Target, Activity, CheckCircle2, ShieldCheck, Database, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BenefitsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Benefits');
  const home = useTranslations('Home');

  const benefits = [
    { title: t('benefit1'), icon: Target, group: t('group_financial') },
    { title: t('benefit2'), icon: Activity, group: t('group_clinical') },
    { title: t('benefit3'), icon: CheckCircle2, group: t('group_operational') },
    { title: t('benefit4'), icon: ShieldCheck, group: t('group_strategic') },
    { title: t('benefit5'), icon: Database, group: t('group_data') },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CommonBanner title={t('title')} subtitle={t('headline')} />

        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(5,121,189,0.07),transparent_32%)]" />
          <div className="section-shell relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
            >
              <div className="max-w-3xl">
                <h2 className="text-secondary font-black text-xs uppercase tracking-[0.2em] mb-4">{t('eyebrow')}</h2>
                <h3 className="text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight">
                  {t('headline')}
                </h3>
                <p className="text-neutral-600 text-lg mt-4">{t('subhead')}</p>
              </div>
              <div className="rounded-[28px] bg-primary text-white px-6 py-5 shadow-[0_30px_90px_-55px_rgba(14,82,123,0.65)] max-w-xl">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/55 font-bold mb-2">
                  {t('highlight_title')}
                </div>
                <p className="text-neutral-200 leading-relaxed">{t('highlight_desc')}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className={`rounded-[30px] border border-neutral-200 bg-neutral-50 p-8 shadow-[0_24px_70px_-55px_rgba(14,82,123,0.35)] hover:bg-white hover:border-secondary/40 transition-all ${
                      idx === 0 ? 'lg:col-span-2' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-neutral-200 flex items-center justify-center text-secondary">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-neutral-400 bg-white px-3 py-1 rounded-full border border-neutral-200 shadow-sm">
                        {benefit.group}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-primary leading-snug">{benefit.title}</h4>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16 rounded-[34px] bg-primary text-white p-8 lg:p-10 shadow-[0_40px_100px_-55px_rgba(14,82,123,0.7)]"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/55 font-bold mb-3">
                    {t('highlight_title')}
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-black leading-tight">{t('headline')}</h4>
                  <p className="text-neutral-200 mt-4 leading-relaxed">{t('highlight_desc')}</p>
                </div>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-3 rounded-full bg-white text-primary px-6 py-4 font-bold shadow-lg hover:-translate-y-1 transition-all"
                >
                  {home('cta_partnership')}
                  {locale === 'en' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
