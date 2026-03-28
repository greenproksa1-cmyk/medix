import SafeHomepageV2 from "../../components/SafeHomepageV2";

type PageProps = {
  params: {
    locale: string;
  };
};

export default function Page({ params }: PageProps) {
  const locale = params.locale === "en" ? "en" : "ar";
  return <SafeHomepageV2 locale={locale} />;
}