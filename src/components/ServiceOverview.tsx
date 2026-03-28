'use client';

import { useTranslations, useLocale } from 'next-intl';
import {
  ClipboardCheck,
  ShieldCheck,
  Microscope,
  Stethoscope,
  TrendingDown,
  ArrowRight,
  ArrowLeft,
  FileCheck2,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const icons = {
  review_before: ClipboardCheck,
  surgeries: ShieldCheck,
  diagnostics: Microscope,
  second_opinion: Stethoscope,
  cost_analysis: TrendingDown,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ServiceOverview() {
  const t = useTranslations('Services');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const services = [
    { key: 'review_before', Icon: icons.review_before, idx: '01' },
    { key: 'surgeries', Icon: icons.surgeries, idx: '02' },
    { key: 'diagnostics', Icon: icons.diagnostics, idx: '03' },
    { key: 'second_opinion', Icon: icons.second_opinion, idx: '04' },
    { key: 'cost_analysis', Icon: icons.cost_analysis, idx: '05' },
  ];

  return (
    <section id="services" className="py-24 lg:py-28 bg-neutral-50 relative overflow-hidden border-b border-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(5,121,189,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,82,123,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-50" />
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-secondary" />
              <h2 className="text-secondary font-black text-xs uppercase tracking-[0.2em]">
                {t('eyebrow')}
              </h2>
            </div>
            <h3 className="text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight">
              {t('title')}
            </h3>
            <p className="text-neutral-600 text-lg mt-4 max-w-2xl">{t('subtitle')}</p>
          </div>
          <Link
            href={`/${locale}/services`}
            className="group inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-3 font-bold text-primary shadow-sm hover:border-secondary/40 hover:text-secondary hover:shadow-[0_18px_40px_-28px_rgba(14,82,123,0.35)] transition-all"
          >
            <span className="border-b border-transparent group-hover:border-secondary transition-colors pb-0.5">
              {t('view_all')}
            </span>
            <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
              {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6"
        >
          {services.map((service) => {
            const Icon = service.Icon;
            const isWide = service.key === 'review_before';

            return (
              <motion.article
                variants={itemVariants}
                key={service.key}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-[32px] border border-neutral-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,251,253,0.92))] p-7 min-h-[370px] shadow-[0_28px_80px_-55px_rgba(14,82,123,0.42)] transition-all duration-500 hover:border-secondary/35 hover:shadow-[0_36px_90px_-58px_rgba(14,82,123,0.5)] ${
                  isWide ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(14,82,123,0.03),transparent_34%)]" />
                <div className="absolute right-4 top-0 text-[92px] font-black tracking-tighter text-neutral-50 group-hover:text-primary/5 transition-colors z-0 pointer-events-none select-none">
                  {service.idx}
                </div>
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary/70 via-primary to-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-16 h-16 rounded-[24px] bg-[linear-gradient(180deg,rgba(14,82,123,0.08),rgba(255,255,255,0.95))] border border-primary/10 shadow-[0_16px_40px_-28px_rgba(14,82,123,0.45)] flex items-center justify-center text-primary group-hover:-translate-y-1 group-hover:bg-[linear-gradient(180deg,rgba(14,82,123,0.12),rgba(255,255,255,0.98))] group-hover:text-secondary group-hover:border-secondary/25 transition-all duration-500">
                      <Icon size={28} strokeWidth={1.7} />
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-neutral-400 font-bold">
                        {t('card_tag')}
                      </div>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-neutral-50 border border-neutral-200 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-secondary font-black">
                        <FileCheck2 size={12} />
                        {service.idx}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-primary leading-snug tracking-tight max-w-[18ch]">
                    {t(`${service.key}.title`)}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed font-medium mt-4">
                    {t(`${service.key}.desc`)}
                  </p>

                  <div className="mt-8 rounded-[24px] bg-white/80 border border-neutral-200 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-bold">
                        {t('card_tag')}
                      </span>
                      <div className="flex items-center gap-2 text-secondary">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.18em] font-black">Audit-ready</span>
                      </div>
                    </div>
                    <div className="mt-4 h-1.5 rounded-full bg-neutral-100 overflow-hidden">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-secondary via-primary to-secondary" />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-bold">
                      <span>Protocol</span>
                      <span>Review</span>
                      <span>Outcome</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
