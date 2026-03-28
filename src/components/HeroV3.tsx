import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, FileCheck2, Activity, ShieldQuestion, Stethoscope } from "lucide-react";
import styles from "./HeroV3.module.css";

type Locale = "ar" | "en";

type Props = {
    locale: Locale;
};

export default function HeroV3({ locale }: Props) {
    const isArabic = locale === "ar";

    const t = {
        ar: {
            kicker: "الدعم الاستراتيجي للقرار الطبي",
            titleLine1: "منصة مراجعة طبية مؤسسية",
            titleLine2: "تدعم القرار وتضبط التكاليف",
            lead: "نقدم طبقة مراجعة مستقلة ومنهجيات مبنية على الأدلة لتمكين شركات التأمين من اتخاذ قرارات سريرية ومالية فائقة الدقة.",
            primary: "تواصل معنا لمناقشة شراكتنا",
            secondary: "تعرف على خدماتنا",
            boardLabel: "محرك المراجعة السريرية",
            boardStatus: "نشط • جاهز للعمل",
            card1Value: "98%",
            card1Label: "معدل دقة القرار الطبي",
            card2Value: "100%",
            card2Label: "تغطية المطابقة للبروتوكول",
            data1Header: "الضرورة الطبية المثبتة",
            data2Header: "ضبط النفقات العادلة",
            floatStrong: "مراجعة مؤسسية",
            floatSpan: "معتمدة من الخبراء",
        },
        en: {
            kicker: "Strategic Medical Review",
            titleLine1: "Institutional medical review",
            titleLine2: "for clarity & cost control",
            lead: "We provide an independent review layer and evidence-based methodologies, empowering insurers to make highly precise clinical and financial decisions.",
            primary: "Partner with Medix",
            secondary: "Explore our platform",
            boardLabel: "Clinical Review Engine",
            boardStatus: "ACTIVE • INSURER READY",
            card1Value: "98%",
            card1Label: "Medical decision accuracy",
            card2Value: "100%",
            card2Label: "Protocol alignment coverage",
            data1Header: "Validated Medical Necessity",
            data2Header: "Fair Expenditure Control",
            floatStrong: "Institutional Review",
            floatSpan: "Expert Validated",
        },
    }[locale];

    const arrow = isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />;

    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}>
                <div className={styles.glowBlob1} />
                <div className={styles.glowBlob2} />
                <div className={styles.gridPattern} />
            </div>

            <div className={styles.container}>
                <div className={`${styles.layout} ${isArabic ? styles.rtl : ""}`}>
                    <div className={styles.textSection}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot} />
                            {t.kicker}
                        </div>

                        <h1 className={styles.title}>
                            {t.titleLine1} <br />
                            <span className={styles.titleHighlight}>{t.titleLine2}</span>
                        </h1>
                        
                        <p className={styles.description}>{t.lead}</p>

                        <div className={styles.actions}>
                            <Link href={`/${locale}/contact`} className={styles.btnPrimary}>
                                {t.primary}
                                {arrow}
                            </Link>
                            <Link href="#services" className={styles.btnSecondary}>
                                {t.secondary}
                            </Link>
                        </div>
                    </div>

                    <div className={styles.visualSection}>
                        <div className={styles.boardContainer}>
                            <div className={styles.boardDecoration} />
                            
                            <div className={styles.glassPanelTop}>
                                <div className={styles.panelTitle}>{t.boardLabel}</div>
                                <div className={styles.panelStatus}>
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    {t.boardStatus}
                                </div>
                            </div>

                            <div className={styles.glassGrid}>
                                <div className={styles.glassCard}>
                                    <div className={styles.cardIcon}>
                                        <ShieldCheck size={28} />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.cardValue}>{t.card1Value}</div>
                                        <div className={styles.cardLabel}>{t.card1Label}</div>
                                    </div>
                                </div>

                                <div className={styles.glassCard}>
                                    <div className={styles.cardIcon}>
                                        <FileCheck2 size={28} />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.cardValue}>{t.card2Value}</div>
                                        <div className={styles.cardLabel}>{t.card2Label}</div>
                                    </div>
                                </div>

                                <div className={styles.mainGlassCard}>
                                    <div className={styles.dataRow}>
                                        <div className={styles.dataRowHeader}>
                                            <span>{t.data1Header}</span>
                                            <span>85%</span>
                                        </div>
                                        <div className={styles.dataLayer}>
                                            <div className={styles.dataFill} />
                                        </div>
                                    </div>
                                    <div className={styles.dataRow}>
                                        <div className={styles.dataRowHeader}>
                                            <span>{t.data2Header}</span>
                                            <span>100%</span>
                                        </div>
                                        <div className={styles.dataLayer}>
                                            <div className={styles.dataFill2} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.floatingBadge}>
                            <div className={styles.floatingIcon}>
                                <Stethoscope size={32} />
                            </div>
                            <div className={styles.floatingText}>
                                <strong>{t.floatStrong}</strong>
                                <span>{t.floatSpan}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}