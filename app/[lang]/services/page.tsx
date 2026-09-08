import Services from "../components/Services/Services";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function Page(props: {
    params: Promise<{ lang: Locale }>;
  }) {
    const { lang } = await props.params;
  
    const dictionary = await getDictionary(lang);
  // ⬇️ Solo pasamos dictionary.services
  return <Services dictionary={dictionary.services} />;
}
