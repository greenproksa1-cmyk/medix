import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonBanner from '@/components/CommonBanner';
import ServiceOverview from '@/components/ServiceOverview';

export default function ServicesPage() {
  const t = useTranslations('Services');

  return (
    <>
      <Header />
      <main className="flex-grow">
        <CommonBanner title={t('title')} subtitle={t('eyebrow')} />
        <ServiceOverview />
      </main>
      <Footer />
    </>
  );
}
