import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonBanner from '@/components/CommonBanner';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Contact');
  const home = useTranslations('Home');

  return (
    <>
      <Header />
      <main className="flex-grow">
        <CommonBanner title={t('title')} subtitle={t('headline')} />

        <section className="py-24 bg-white">
          <div className="section-shell">
            <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 xl:gap-14">
              <div className="space-y-6">
                <div className="rounded-[32px] bg-primary text-white p-8 shadow-[0_30px_90px_-55px_rgba(14,82,123,0.65)]">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-bold mb-4">
                    {home('about_eyebrow')}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black leading-tight">
                    {t('headline')}
                  </h2>
                  <p className="text-neutral-200 mt-5 leading-relaxed">
                    {t('subhead')}
                  </p>
                </div>

                <div className="space-y-4">
                  <InfoRow icon={Mail} label={t('label_email')} value="info@medix.ly" href="mailto:info@medix.ly" />
                  <InfoRow icon={Phone} label={t('label_phone')} value="+966 59 040 1777" href="tel:+966590401777" />
                  <InfoRow icon={MapPin} label={t('label_address')} value={t('address_text')} />
                </div>

                <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-7">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-secondary font-black mb-3">
                    {t('type')}
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{t('type_option1')} · {t('type_option2')} · {t('type_option3')}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-5 py-3 font-bold">
                      {home('cta_partnership')}
                      <ArrowRight size={16} />
                    </Link>
                    <a href="tel:+966590401777" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 font-bold text-primary">
                      +966 59 040 1777
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[34px] bg-neutral-50 border border-neutral-200 p-8 lg:p-10 shadow-[0_30px_90px_-60px_rgba(14,82,123,0.45)]">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-secondary font-black mb-2">
                      Medix
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-primary">{t('headline')}</h3>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-secondary">
                    <Phone size={22} />
                  </div>
                </div>

                <form className="space-y-6">
                  <Field label={t('name')} id="name" type="text" />
                  <Field label={t('email')} id="email" type="email" />
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-bold text-primary mb-2">
                      {t('type')}
                    </label>
                    <select
                      id="inquiryType"
                      className="w-full px-4 py-4 rounded-2xl border border-neutral-300 focus:ring-2 focus:ring-secondary/20 outline-none bg-white"
                    >
                      <option>{t('type_option1')}</option>
                      <option>{t('type_option2')}</option>
                      <option>{t('type_option3')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-4 rounded-2xl border border-neutral-300 focus:ring-2 focus:ring-secondary/20 outline-none bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary text-white px-6 py-4 font-bold shadow-[0_20px_60px_-30px_rgba(14,82,123,0.65)]"
                  >
                    {t('send')}
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-[28px] border border-neutral-200 bg-white p-5 shadow-[0_24px_70px_-55px_rgba(14,82,123,0.35)]">
      <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-secondary shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">{label}</div>
        <div className="text-sm lg:text-base text-primary font-semibold leading-relaxed mt-2">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:-translate-y-0.5 transition-transform">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  id,
  type,
}: {
  label: string;
  id: string;
  type: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-primary mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full px-4 py-4 rounded-2xl border border-neutral-300 focus:ring-2 focus:ring-secondary/20 outline-none bg-white"
      />
    </div>
  );
}
