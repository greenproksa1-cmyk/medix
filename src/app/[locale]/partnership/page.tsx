import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonBanner from '@/components/CommonBanner';
import { ArrowRight, ArrowLeft, BadgeCheck, Layers3, Coins } from 'lucide-react';

export default function PartnershipPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Partnership');

  const models = [
    { title: t('model1'), desc: t('model1_desc'), icon: Coins },
    { title: t('model2'), desc: t('model2_desc'), icon: BadgeCheck },
    { title: t('model3'), desc: t('model3_desc'), icon: Layers3 },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow">
        <CommonBanner title={t('title')} subtitle={t('model1_desc')} />

        <section className="py-24 bg-white">
          <div className="section-shell">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {models.map((model, idx) => {
                const Icon = model.icon;
                return (
                  <div
                    key={model.title}
                    className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-8 shadow-[0_24px_70px_-55px_rgba(14,82,123,0.35)] hover:bg-white hover:border-secondary/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-secondary">
                        <Icon size={24} />
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-black">
                        0{idx + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-5 leading-snug">{model.title}</h3>
                    <p className="text-neutral-600 leading-relaxed mb-8">{model.desc}</p>
                    <button className="text-secondary font-bold hover:text-primary transition-colors inline-flex items-center gap-2">
                      {t('cta_label')}
                      {locale === 'en' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
