'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, FileSearch, Stethoscope, ShieldCheck, Clock3, Send } from 'lucide-react';

export default function OperatingTimeline({
  tone = 'light',
  showHeading = true,
}: {
  tone?: 'light' | 'slate';
  showHeading?: boolean;
}) {
  const t = useTranslations('OperatingModel');

  const steps = [
    { title: t('step1_title'), text: t('step1'), icon: FileSearch },
    { title: t('step2_title'), text: t('step2'), icon: Stethoscope },
    { title: t('step3_title'), text: t('step3'), icon: ShieldCheck },
    { title: t('step4_title'), text: t('step4'), icon: Clock3 },
    { title: t('step5_title'), text: t('step5'), icon: Send },
  ];

  return (
    <section className={`py-24 lg:py-28 relative overflow-hidden ${tone === 'slate' ? 'bg-neutral-50' : 'bg-white'}`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,82,123,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,82,123,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,121,189,0.08),transparent_40%)] pointer-events-none" />
      <div className="section-shell relative z-10">
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-white px-4 py-2 text-secondary font-black text-xs uppercase tracking-[0.22em] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              {t('title')}
            </div>
            <h3 className="mt-5 text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight mb-4">
              {t('headline')}
            </h3>
            <p className="text-neutral-600 text-lg">{t('subhead')}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[0.84fr_1.16fr] gap-8 xl:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75 }}
            className="rounded-[34px] bg-primary text-white p-8 lg:p-10 shadow-[0_40px_110px_-60px_rgba(14,82,123,0.68)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,220,255,0.2),transparent_35%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="relative z-10">
              <div className="text-[10px] uppercase tracking-[0.24em] text-white/55 font-bold mb-4">
                {t('title')}
              </div>
              <h4 className="text-2xl lg:text-3xl font-black leading-tight max-w-[12ch]">{t('headline')}</h4>
              <p className="text-neutral-200 mt-5 leading-relaxed max-w-xl">{t('subhead')}</p>

              <div className="mt-8 space-y-4">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex items-start gap-4 rounded-[24px] bg-white/8 border border-white/10 p-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-secondary-light">
                        <span className="sr-only">{step.title}</span>
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-bold">0{idx + 1}</span>
                          <span className="text-sm font-bold text-white">{step.title}</span>
                        </div>
                        <p className="text-sm text-neutral-200 leading-relaxed mt-2">{step.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-[28px] bg-white/8 border border-white/10 p-5">
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/55 font-bold mb-3">
                  {t('closeout_title')}
                </div>
                <p className="text-sm text-neutral-100 leading-relaxed">{t('closeout_desc')}</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75 }}
              className="rounded-[34px] border border-neutral-200 bg-white p-6 lg:p-8 shadow-[0_28px_90px_-65px_rgba(14,82,123,0.6)] overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-secondary font-black mb-2">
                    {t('title')}
                  </div>
                  <h4 className="text-xl lg:text-2xl font-black text-primary">{t('headline')}</h4>
                </div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Evidence flow
                </div>
              </div>

              <div className="relative">
                <div className="hidden xl:block absolute left-6 right-6 top-10 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                <motion.div
                  animate={{ x: ['-10%', '10%', '-10%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="hidden xl:block absolute left-6 right-6 top-10 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        whileHover={{ y: -8 }}
                        className={`group rounded-[28px] border border-neutral-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,252,255,0.96))] p-5 min-h-[280px] shadow-[0_22px_70px_-48px_rgba(14,82,123,0.45)] hover:border-secondary/45 hover:shadow-[0_28px_80px_-52px_rgba(14,82,123,0.5)] transition-all duration-300 ${
                          idx === 4 ? 'md:col-span-2 xl:col-span-1' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4 mb-5">
                          <div className="w-11 h-11 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/10 transition-colors">
                            <Icon size={18} />
                          </div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-bold">
                            0{idx + 1}
                          </div>
                        </div>
                        <h5 className="text-base font-bold text-primary leading-snug">{step.title}</h5>
                        <p className="text-sm text-neutral-500 leading-relaxed mt-3">{step.text}</p>
                        <div className="mt-5 h-1 rounded-full bg-neutral-100 overflow-hidden">
                          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-secondary via-primary to-secondary opacity-80 group-hover:w-[78%] transition-all duration-500" />
                        </div>
                        <div className="hidden xl:flex items-center gap-2 mt-5 text-xs uppercase tracking-[0.18em] text-secondary font-bold">
                          <ArrowRight size={13} />
                          Next
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="rounded-[34px] bg-white border border-neutral-200 p-6 lg:p-8 shadow-[0_28px_90px_-65px_rgba(14,82,123,0.55)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-[24px] bg-primary text-white p-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,220,255,0.16),transparent_34%)]" />
                  <div className="relative z-10">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/55 font-bold mb-2">Audit</div>
                    <div className="text-sm font-bold leading-snug">{t('closeout_title')}</div>
                  </div>
                </div>
                <div className="rounded-[24px] bg-neutral-50 border border-neutral-200 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">Outcome</div>
                  <div className="text-sm font-bold text-primary leading-snug">{t('closeout_desc')}</div>
                </div>
                <div className="rounded-[24px] bg-neutral-50 border border-neutral-200 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">Flow</div>
                  <div className="text-sm font-bold text-primary leading-snug">Receive, review, decide, deliver.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
