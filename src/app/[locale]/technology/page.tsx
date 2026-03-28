import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonBanner from '@/components/CommonBanner';
import { Cpu, Database, PieChart, Activity, ShieldCheck } from 'lucide-react';

export default function TechnologyPage() {
  const t = useTranslations('Technology');

  const techItems = [
    { title: t('item1'), icon: Cpu },
    { title: t('item2'), icon: Database },
    { title: t('item3'), icon: PieChart },
    { title: t('item4'), icon: Activity },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow">
        <CommonBanner title={t('title')} subtitle={t('desc')} />

        <section className="py-24 bg-white">
          <div className="section-shell">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 xl:gap-14 items-start">
              <div className="rounded-[32px] bg-primary text-white p-8 lg:p-10 shadow-[0_30px_90px_-55px_rgba(14,82,123,0.65)]">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-bold mb-4">
                  {t('title')}
                </div>
                <h2 className="text-3xl lg:text-4xl font-black leading-tight">
                  {t('highlight_title')}
                </h2>
                <p className="text-neutral-200 mt-5 leading-relaxed">{t('highlight_desc')}</p>
                <div className="mt-8 rounded-[28px] bg-white/10 border border-white/10 p-5">
                  <div className="flex items-center gap-3 text-white/80">
                    <ShieldCheck size={18} />
                    <span className="text-sm font-semibold">Secure, auditable, and scalable</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
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
                      <h3 className="text-xl font-bold text-primary leading-snug">{item.title}</h3>
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
