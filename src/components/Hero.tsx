'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  Network,
  Activity,
  BarChart3,
  BadgeCheck,
  Workflow,
  Files,
  Scan,
  Layers3,
  Database,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('Home');

  const chips = [
    { label: t('hero_chip_1'), icon: Scan },
    { label: t('hero_chip_2'), icon: Files },
    { label: t('hero_chip_3'), icon: Network },
    { label: t('hero_chip_4'), icon: BarChart3 },
  ];

  const flowSteps = [
    { label: t('hero_flow_1'), icon: Scan },
    { label: t('hero_flow_2'), icon: BadgeCheck },
    { label: t('hero_flow_3'), icon: Activity },
  ];

  const telemetryBars = [62, 88, 48, 76, 58];

  return (
    <section className="relative overflow-hidden pt-24 pb-24 lg:pt-28 lg:pb-28 border-b border-neutral-100 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#EAF4FA,transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(5,121,189,0.10),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,82,123,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-45" />

      <div className="section-shell relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.94fr_1.06fr] gap-10 xl:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative z-10 max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-extrabold mb-7 uppercase tracking-[0.22em]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              {t('hero_kicker')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-primary leading-[0.98] mb-6 tracking-tight max-w-[11ch]">
              {t('hero_headline')}
            </h1>

            <p className="text-lg lg:text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl font-medium">
              {t('hero_subheadline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/contact`}
                className="group relative overflow-hidden bg-primary text-white border border-primary px-8 py-4 text-base rounded-full font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3"
              >
                <span className="relative z-10">{t('cta_partnership')}</span>
                {locale === 'en' ? (
                  <ChevronRight className="relative z-10 duration-300 group-hover:translate-x-1" size={20} />
                ) : (
                  <ArrowLeft className="relative z-10 duration-300 group-hover:-translate-x-1" size={20} />
                )}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="bg-white text-primary border border-neutral-200 px-8 py-4 text-base rounded-full font-bold hover:border-primary hover:bg-neutral-50 hover:text-primary transition-all flex items-center justify-center shadow-sm"
              >
                {t('cta_learn_more')}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {[
                { title: t('hero_stat_1_label'), value: t('hero_stat_1_value') },
                { title: t('hero_stat_2_label'), value: t('hero_stat_2_value') },
                { title: t('hero_stat_3_label'), value: t('hero_stat_3_value') },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-neutral-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,251,253,0.94))] p-5 shadow-[0_18px_50px_-34px_rgba(14,82,123,0.35)]"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-bold">
                    {item.title}
                  </div>
                  <div className="text-sm font-extrabold text-primary mt-2 leading-snug">{item.value}</div>
                  <div className="mt-4 h-1 rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-secondary via-primary to-secondary" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {chips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={chip.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-primary shadow-sm"
                  >
                    <Icon size={14} className="text-secondary" />
                    {chip.label}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="relative min-h-[760px] lg:min-h-[820px] transform-gpu">
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-[44px] bg-[linear-gradient(145deg,rgba(14,82,123,0.05),rgba(255,255,255,0.88))] border border-neutral-200 shadow-[0_50px_120px_-74px_rgba(14,82,123,0.55)]"
            />

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute inset-5 rounded-[40px] bg-[linear-gradient(145deg,rgba(255,255,255,0.58),rgba(255,255,255,0.16))] border border-white/60 backdrop-blur-2xl shadow-[0_24px_80px_-50px_rgba(14,82,123,0.38)]"
            />

            <div className="absolute inset-10 rounded-[34px] bg-gradient-to-br from-[#0C4C73] via-[#0E527B] to-[#062F45] overflow-hidden border border-white/10 shadow-[0_48px_120px_-60px_rgba(5,25,39,0.75)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,220,255,0.24),transparent_34%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.1),transparent_38%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-25" />

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="medixHeroRing" x1="0" x2="1">
                    <stop offset="0%" stopColor="#7ED6FF" stopOpacity="0.05" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#7ED6FF" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="medixHeroDash" x1="0" x2="1">
                    <stop offset="0%" stopColor="#BDEBFF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#BDEBFF" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#BDEBFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle cx="500" cy="500" r="362" stroke="url(#medixHeroRing)" strokeWidth="2" strokeDasharray="6 14" />
                <circle cx="500" cy="500" r="258" stroke="url(#medixHeroRing)" strokeWidth="2" strokeDasharray="2 10" />
                <path d="M180 380 C310 220, 690 220, 820 380" stroke="url(#medixHeroDash)" strokeWidth="2" strokeDasharray="8 12" />
                <path d="M180 620 C320 780, 680 780, 820 620" stroke="#BDEBFF" strokeOpacity="0.18" strokeWidth="2" strokeDasharray="8 12" />
              </svg>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-20 rounded-full border border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-32 rounded-full border border-secondary/20 border-dashed"
              />

              <div className="absolute inset-0">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-10 top-20 h-4 w-4 rounded-full bg-secondary shadow-[0_0_0_8px_rgba(126,214,255,0.14)]"
                />
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="absolute right-16 top-32 h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.08)]"
                />
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  className="absolute left-24 bottom-40 h-3.5 w-3.5 rounded-full bg-[#8EDFFF] shadow-[0_0_0_8px_rgba(126,214,255,0.12)]"
                />
                <motion.div
                  animate={{ scale: [1, 1.12, 1], opacity: [0.65, 1, 0.65] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  className="absolute right-24 bottom-24 h-4 w-4 rounded-full bg-secondary shadow-[0_0_0_10px_rgba(126,214,255,0.12)]"
                />
              </div>

              <div className="absolute top-6 left-6 right-6 flex items-start justify-between gap-4">
                <div className="glass-panel px-4 py-3.5 rounded-2xl bg-white/14 border-white/20 text-white shadow-none max-w-[220px]">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/55 font-bold">
                    {t('hero_panel_title')}
                  </div>
                  <div className="text-sm font-bold mt-1">{t('hero_panel_subtitle')}</div>
                </div>
                <div className="glass-panel px-4 py-3.5 rounded-2xl bg-white/14 border-white/20 text-white shadow-none text-right">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/55 font-bold">
                    {t('hero_panel_metric_label')}
                  </div>
                  <div className="text-sm font-bold mt-1">{t('hero_panel_metric_value')}</div>
                </div>
              </div>

              <div className="absolute left-6 top-28 w-52 hidden xl:block">
                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass-panel p-4 rounded-3xl bg-white/12 border-white/15 text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-secondary-light">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
                        {t('hero_satellite_one_kicker')}
                      </div>
                      <div className="text-sm font-bold mt-1">{t('hero_satellite_one_title')}</div>
                    </div>
                  </div>
                  <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full w-2/3 rounded-full bg-gradient-to-r from-secondary-light via-white to-secondary-light"
                      animate={{ x: ['-18%', '18%', '-18%'] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="absolute right-6 top-28 w-52 hidden xl:block">
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass-panel p-4 rounded-3xl bg-white/12 border-white/15 text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-secondary-light">
                      <Database size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
                        {t('hero_satellite_two_kicker')}
                      </div>
                      <div className="text-sm font-bold mt-1">{t('hero_satellite_two_title')}</div>
                    </div>
                  </div>
                  <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full w-1/2 rounded-full bg-gradient-to-r from-secondary-light via-white to-secondary-light"
                      animate={{ x: ['-18%', '18%', '-18%'] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 w-[92%] max-w-[460px] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="glass-panel p-7 rounded-[34px] bg-white/14 border-white/20 text-white shadow-[0_25px_60px_-40px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-white/55 font-bold">
                        {t('hero_engine_label')}
                      </div>
                      <div className="text-2xl font-black mt-2 leading-tight">{t('hero_engine_title')}</div>
                    </div>
                    <div className="w-16 h-16 rounded-[24px] bg-white/10 border border-white/15 flex items-center justify-center">
                      <Workflow className="text-white" size={28} />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {chips.slice(0, 3).map((chip, idx) => {
                      const Icon = chip.icon;
                      return (
                        <div key={chip.label} className="rounded-2xl bg-white/10 border border-white/10 p-3 text-center">
                          <Icon size={18} className="mx-auto text-secondary-light" />
                          <div className="text-[10px] uppercase tracking-[0.2em] text-white/55 font-bold mt-2">
                            0{idx + 1}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="rounded-[24px] bg-white/8 border border-white/10 p-4">
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-white/68">{t('hero_loop_label')}</span>
                      <span className="font-bold">{t('hero_loop_value')}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {flowSteps.map((step) => {
                        const Icon = step.icon;
                        return (
                          <div key={step.label} className="rounded-xl bg-white/10 p-3 text-center">
                            <Icon size={16} className="mx-auto text-secondary-light" />
                            <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/55 font-bold">
                              {step.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 rounded-[24px] bg-white/8 border border-white/10 p-4">
                    <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.24em] text-white/55 font-bold">
                      <span className="flex items-center gap-2">
                        <ShieldCheck size={12} className="text-secondary-light" />
                        {t('hero_chip_sla')}
                      </span>
                      <span className="flex items-center gap-2">
                        <Database size={12} className="text-secondary-light" />
                        {t('hero_chip_network')}
                      </span>
                      <span className="flex items-center gap-2">
                        <Layers3 size={12} className="text-secondary-light" />
                        {t('hero_chip_insight')}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-5 gap-2 items-end h-20">
                      {telemetryBars.map((height, idx) => (
                        <div key={`${height}-${idx}`} className="flex flex-col items-center gap-2">
                          <div className="w-full rounded-full bg-white/10 overflow-hidden h-20 flex items-end">
                            <motion.div
                              className="w-full rounded-full bg-gradient-to-t from-secondary-light via-white to-secondary-light"
                              style={{ height: `${height}%` }}
                              animate={{ opacity: [0.72, 1, 0.72] }}
                              transition={{ duration: 3.5 + idx * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                          </div>
                          <span className="text-[10px] uppercase tracking-[0.18em] text-white/45 font-bold">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute left-6 right-6 bottom-6">
                <div className="rounded-[26px] bg-white/12 border border-white/15 backdrop-blur-xl p-4 text-white">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-white/55 font-bold">
                      {t('hero_chip_sla')}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-white/55 font-bold">
                      {t('hero_chip_network')}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-white/55 font-bold">
                      {t('hero_chip_insight')}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full w-1/2 rounded-full bg-gradient-to-r from-secondary-light via-white to-secondary-light"
                      animate={{ x: ['-10%', '20%', '-10%'] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-[28%] -translate-x-1/2 w-[74%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
