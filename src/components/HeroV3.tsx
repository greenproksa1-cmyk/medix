import Image from "next/image";
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
                        {/* Integrated Visual Panel Design */}
                        <div className={styles.visualGlow} />
                        
                        <div className={styles.imageContainer}>
                            <div className={styles.imageOverlay} />
                            <div className={styles.panelDecorTop} />
                            
                            <Image 
                                src="/hero-visual.png" 
                                alt="Medix Strategic Visual" 
                                width={1200} 
                                height={800} 
                                className={styles.heroImage}
                                priority
                            />
                            
                            <div className={styles.panelDecorBottom} />
                        </div>

                        <div className={`${styles.floatingBadge} ${isArabic ? styles.rtlBadge : ""}`}>
                            <div className={styles.floatingIcon}>
                                <Activity size={28} />
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