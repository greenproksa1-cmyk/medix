import Link from "next/link";
import { 
    PhoneCall, ArrowRight, ArrowLeft, Files, ShieldCheck, Microscope, 
    Stethoscope, BarChart3, BadgeCheck, FileCheck2, Network,
    Activity
} from "lucide-react";
import styles from "./SafeHomepageV2.module.css";
import HeroV3 from "./HeroV3";
import Header from "./Header";
import Footer from "./Footer";

type Locale = "ar" | "en";

type Props = {
    locale: Locale;
};

export default function SafeHomepageV2({ locale }: Props) {
    const isArabic = locale === "ar";
    const arrow = isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />;

    const t = {
        ar: {
            trustFeatures: [
                {
                    title: "جاهزية مؤسسية كاملة",
                    text: "إخراج مهني وتقارير دقيقة تدعم متخذ القرار داخل جهة التأمين بصيغة قابلة للتنفيذ المباشر.",
                    icon: FileCheck2
                },
                {
                    title: "تغطية وعمق سريري",
                    text: "شبكة واسعة من الخبراء لفحص الحالات المعقدة والحساسة وضمان دقة المطابقة للبروتوكول.",
                    icon: Network
                },
                {
                    title: "تحليلات ضبط الهدر",
                    text: "نظام يقرأ البيانات لاستخراج أنماط الاستخدام المفرط وتقديم رؤى مالية توفر التكاليف.",
                    icon: BarChart3
                }
            ],
            servicesHeading: "الخدمات الاستراتيجية",
            servicesText: "محفظة خدمات متخصصة موجهة لدعم حوكمة القرار الطبي، تجويد الرعاية، وخلق استدامة للصناديق التأمينية.",
            servicesKicker: "قدرات المراجعة",
            services: [
                { title: "المراجعة قبل التنفيذ", text: "التحقق من الضرورة الطبية ومطابقة التوصيات للحالة قبل الإقرار لتفادي الهدر.", icon: Files },
                { title: "الجراحات عالية التكلفة", text: "تقييم متخصص ودقيق يقوّي موقف الجهة أو المؤمن في العمليات الكبرى.", icon: ShieldCheck },
                { title: "التشخيص المتقدم", text: "تأكيد واستيثاق مدى ملاءمة فحوصات الرنين والصور المتقدمة للاحتياج المرضي الحقيقي.", icon: Microscope },
                { title: "برامج الرأي الثاني", text: "دعم الحالات شديدة التعقيد عبر خبراء كبار لتقليل الأخطاء وتجويد خطة العلاج.", icon: Stethoscope },
                { title: "تحليل التكاليف الصحية", text: "قراءة معقمة لبيانات المطالبات للكشف عن الأنماط العالية وترشيد مسارها.", icon: BarChart3 }
            ],
            processHeading: "منهجية محكمة للأدلة",
            processText: "دورة عمل قياسية منضبطة بوقت لضمان مخرجات ذات موثوقية عالية جداً قابلة للاعتماد المؤسسي.",
            processKicker: "كيف تعمل ميديكس",
            process: [
                { title: "الاستلام والتسجيل", text: "استقبال الحالة السريرية والمعطيات كاملة بمسار تدفق آمن." },
                { title: "التقييم الأصلي", text: "تحليل الملف الطبي وتدقيق التشخيص السريري الأولي للمريض." },
                { title: "المطابقة للمعيار", text: "وزن الطلب مقابل البروتوكولات والسياسات العالمية المعترف بها." },
                { title: "إصدار التوصية", text: "قرار نهائي قاطع بصيغة جاهزة للقرار التنفيذي النهائي من شركة التأمين." }
            ],
            whyKicker: "قيمة ميديكس",
            whyHeading: "الاستقلالية والموثوقية",
            whyText: "تمثل ميديكس طبقة احترافية ضرورية لضمان جودة القرارات بين مزودي الخدمة وجهات التأمين، عبر نموذج عمليات محايد وغير متحيز مصمم حصرياً لرفع كفاءة الخدمات الصحية وضبط الانفاق غير التبريري.",
            pillars: [
                { title: "بروتوكولات حيادية", text: "لا نخضع لأي انحياز، مما يكفل التوازن واتخاذ قرار عادل للجميع.", icon: BadgeCheck },
                { title: "تقييم الأثر المالي", text: "انعكاس نقدي مباشر نتيجة كبح الاستخدام العبثي للموارد الطبية.", icon: Activity },
            ],
            ctaKicker: "أدوات مراجعة معتمدة",
            ctaTitle: "ارتقِ بجودة وكفاءة قرارات محفظتك التأمينية الموحدة",
            ctaText: "ابدأ بعرض تعريفي شامل حول قدرات المراجعة الطبية المؤسسية لدينا، وكيف يمكن تشغيلها بمرونة فائقة كجزء من دورتك الاستراتيجية.",
            btnPartner: "طلب الانضمام كشريك",
            phoneValue: "+966 59 040 1777"
        },
        en: {
            trustFeatures: [
                {
                    title: "Institutional Readiness",
                    text: "Professional output and reports that support payer decision-makers with actionable certainty.",
                    icon: FileCheck2
                },
                {
                    title: "Clinical Depth",
                    text: "A broad network of experts to evaluate complex cases and ensure perfect protocol alignment.",
                    icon: Network
                },
                {
                    title: "Waste Control Analytics",
                    text: "Data-driven systems that extract overutilization patterns to provide immense cost savings.",
                    icon: BarChart3
                }
            ],
            servicesHeading: "Strategic Core Services",
            servicesText: "A specialized service portfolio dedicated to supporting medical decision governance and fund sustainability.",
            servicesKicker: "Review Capabilities",
            services: [
                { title: "Pre-execution Review", text: "Validation of medical necessity and case matching before approval to prevent waste.", icon: Files },
                { title: "High-cost Surgeries", text: "A specialized, accurate assessment that strengthens the insurer's position in major operations.", icon: ShieldCheck },
                { title: "Advanced Diagnostics", text: "Validating the true necessity of advanced MRI and CT imaging protocols.", icon: Microscope },
                { title: "Second Opinion Programs", text: "Supporting highly complex cases via experts to reduce errors and improve treatment plans.", icon: Stethoscope },
                { title: "Health Cost Analysis", text: "Sanitized reading of claims data to detect and rationalize high-cost utilization patterns.", icon: BarChart3 }
            ],
            processHeading: "Rigorous Evidence Pathway",
            processText: "A standardized, time-disciplined workflow ensuring highly reliable outputs ready for institutional adoption.",
            processKicker: "The Medix Way",
            process: [
                { title: "Intake & Registration", text: "Securely receiving the clinical case and all associated data points." },
                { title: "Source Evaluation", text: "Complete analysis of the medical file and auditing the initial clinical diagnosis." },
                { title: "Standard Matching", text: "Weighing the request against universally recognized protocols and policies." },
                { title: "Recommendation Issue", text: "A conclusive final decision formatted for immediate executive action by the insurer." }
            ],
            whyKicker: "Medix Value",
            whyHeading: "Independence & Reliability",
            whyText: "Medix acts as an essential professional layer guaranteeing decision quality between providers and insurers, through an unbiased operational model exclusively designed to raise health service efficiency and control unjustifiable spending.",
            pillars: [
                { title: "Neutral Protocols", text: "Operating without bias, ensuring balance and fair evidence-based outcomes for all.", icon: BadgeCheck },
                { title: "Financial Impact", text: "Direct monetary reflection as a result of curbing frivolous medical resource use.", icon: Activity },
            ],
            ctaKicker: "Certified Review Layer",
            ctaTitle: "Elevate the Quality and Efficiency of Your Portfolio",
            ctaText: "Start with a comprehensive introduction to our institutional medical review capabilities and flexibly integrate them into your strategic cycle.",
            btnPartner: "Request Partnership",
            phoneValue: "+966 59 040 1777"
        }
    }[locale];

    return (
        <main className={styles.page}>
            <Header />
            <HeroV3 locale={locale} />

            <div className={styles.container}>
                <div className={styles.trustStripWrapper}>
                    <div className={styles.trustStrip}>
                        {t.trustFeatures.map((feature, idx) => (
                            <div key={idx} className={styles.trustItem}>
                                <div className={styles.trustIcon}>
                                    <feature.icon size={24} strokeWidth={2.5} />
                                </div>
                                <h3 className={styles.trustTitle}>{feature.title}</h3>
                                <p className={styles.trustText}>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className={styles.sectionLight} id="services">
                <div className={styles.container}>
                    <div className={styles.sectionKicker}>{t.servicesKicker}</div>
                    <h2 className={styles.sectionTitle}>{t.servicesHeading}</h2>
                    <p className={styles.sectionText}>{t.servicesText}</p>

                    <div className={styles.servicesGrid}>
                        {t.services.map((service, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <div className={styles.serviceIconWrapper}>
                                    <service.icon size={28} />
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceText}>{service.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionKicker}>{t.processKicker}</div>
                    <h2 className={styles.sectionTitle}>{t.processHeading}</h2>
                    <p className={styles.sectionText}>{t.processText}</p>

                    <div className={`${styles.processTimeline} ${isArabic ? styles.rtl : ""}`}>
                        {t.process.map((step, index) => (
                            <div key={index} className={styles.processStep}>
                                <div className={styles.stepNumber}>0{index + 1}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepText}>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.sectionLight}>
                <div className={styles.container}>
                    <div className={styles.whySplit}>
                        <div>
                            <div className={styles.sectionKicker}>{t.whyKicker}</div>
                            <h2 className={styles.sectionTitle}>{t.whyHeading}</h2>
                            <p className={styles.sectionText}>{t.whyText}</p>
                        </div>

                        <div className={styles.whyDarkPanel}>
                            <div className={styles.whyPillars}>
                                {t.pillars.map((pillar, idx) => (
                                    <div key={idx} className={styles.pillar}>
                                        <div className={styles.pillarIcon}>
                                            <pillar.icon size={28} />
                                        </div>
                                        <div className={styles.pillarContent}>
                                            <h4>{pillar.title}</h4>
                                            <p>{pillar.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection} id="cta">
                <div className={styles.ctaDecor} />
                <div className={styles.container} style={{ position: "relative", zIndex: 2 }}>
                    <div className={styles.ctaKicker}>{t.ctaKicker}</div>
                    <h2 className={styles.ctaTitle}>{t.ctaTitle}</h2>
                    <p className={styles.ctaText}>{t.ctaText}</p>

                    <div className={styles.ctaActions}>
                        <a href="tel:+966590401777" className={styles.phoneBtn}>
                            <PhoneCall size={22} />
                            <span dir="ltr" className="ml-1 tracking-wider">{t.phoneValue}</span>
                        </a>
                        <Link href={`/${locale}/contact`} className={styles.primaryInverseBtn}>
                            <span className="font-extrabold uppercase tracking-wide">{t.btnPartner}</span>
                            {arrow}
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}