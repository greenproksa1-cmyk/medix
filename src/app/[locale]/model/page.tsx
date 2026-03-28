'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonBanner from '@/components/CommonBanner';
import OperatingTimeline from '@/components/OperatingTimeline';

export default function ModelPage() {
  const t = useTranslations('OperatingModel');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CommonBanner title={t('title')} subtitle={t('headline')} />
        <OperatingTimeline tone="slate" showHeading={false} />
      </main>
      <Footer />
    </div>
  );
}
