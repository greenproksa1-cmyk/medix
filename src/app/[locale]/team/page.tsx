import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonBanner from '@/components/CommonBanner';
import { UserRound, BadgeCheck, ClipboardCheck, Database } from 'lucide-react';

export default function TeamPage() {
  const nav = useTranslations('Navigation');
  const t = useTranslations('Team');

  const categories = [
    { name: t('cat1_title'), area: t('cat1_desc'), icon: BadgeCheck },
    { name: t('cat2_title'), area: t('cat2_desc'), icon: ClipboardCheck },
    { name: t('cat3_title'), area: t('cat3_desc'), icon: UserRound },
    { name: t('cat4_title'), area: t('cat4_desc'), icon: Database },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow">
        <CommonBanner title={nav('team')} subtitle={t('headline')} />

        <section className="py-24 bg-white">
          <div className="section-shell">
            <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 xl:gap-14 items-start">
              <div className="rounded-[32px] bg-primary text-white p-8 lg:p-10 shadow-[0_30px_90px_-55px_rgba(14,82,123,0.65)]">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-bold mb-4">
                  {t('headline')}
                </div>
                <h2 className="text-3xl lg:text-4xl font-black leading-tight">
                  {t('headline')}
                </h2>
                <p className="text-neutral-200 mt-5 leading-relaxed">{t('subhead')}</p>
                <div className="mt-8 rounded-[28px] bg-white/10 border border-white/10 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/55 font-bold mb-3">
                    Institutional review model
                  </div>
                  <div className="text-sm text-white/90 leading-relaxed">
                    Consultant physicians, review specialists, operations leaders, and analysts working as one governance layer.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={cat.name}
                      className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-7 shadow-[0_24px_70px_-55px_rgba(14,82,123,0.35)] hover:bg-white hover:border-secondary/40 transition-all"
                    >
                      <div className="flex items-center justify-between gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-secondary">
                          <Icon size={24} />
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-black">
                          0{idx + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">{cat.name}</h3>
                      <p className="text-secondary font-medium text-sm">{cat.area}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
