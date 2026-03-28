import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonBanner from '@/components/CommonBanner';
import { ShieldCheck, Target, LineChart, BadgeCheck } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('About');
  const h = useTranslations('Home');

  const pillars = [
    { title: h('value_quality'), desc: h('value_quality_desc'), icon: ShieldCheck },
    { title: h('value_usage'), desc: h('value_usage_desc'), icon: LineChart },
    { title: h('value_sustainability'), desc: h('value_sustainability_desc'), icon: Target },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow">
        <CommonBanner title={t('title')} subtitle={h('about_heading')} />

        <section className="py-24 bg-white">
          <div className="section-shell">
            <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 xl:gap-14 items-start">
              <div className="lg:sticky lg:top-28">
                <div className="text-secondary font-black text-xs uppercase tracking-[0.2em] mb-4">
                  {h('about_eyebrow')}
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-primary leading-tight tracking-tight">
                  {h('intro_title')}
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mt-6 max-w-xl">
                  {h('intro_text')}
                </p>
                <div className="mt-8 rounded-[32px] bg-primary text-white p-8 shadow-[0_30px_90px_-55px_rgba(14,82,123,0.65)]">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-bold mb-4">
                    {t('vision_title')}
                  </div>
                  <p className="text-neutral-200 leading-relaxed">{t('vision_text')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 rounded-[32px] border border-neutral-200 bg-white p-8 shadow-[0_30px_90px_-55px_rgba(14,82,123,0.38)]">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-secondary font-black mb-2">
                          {t('mission_title')}
                        </div>
                        <h3 className="text-2xl font-black text-primary leading-tight">{t('title')}</h3>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-secondary">
                        <BadgeCheck size={24} />
                      </div>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{t('mission_text')}</p>
                  </div>

                  {pillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-7 shadow-[0_24px_70px_-55px_rgba(14,82,123,0.35)] hover:bg-white hover:border-secondary/40 transition-all"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-secondary mb-5">
                          <Icon size={24} />
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-secondary font-black mb-3">
                          0{idx + 1}
                        </div>
                        <h4 className="text-lg font-bold text-primary mb-3">{pillar.title}</h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">{pillar.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
