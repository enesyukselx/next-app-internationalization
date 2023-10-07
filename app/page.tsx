import Link from "next/link";
import { getLocale } from "@/utils/getLocale";
import { useTranslation } from "@/app/i18n";
import Navbar from "@/components/Navbar";

export default async function Home() {
    const locale = await getLocale();
    const { t } = await useTranslation(locale);

    return (
        <>
            <Navbar />
            <div>
                <h1 className="font-bold text-4xl mb-4">{t("title")}</h1>
                <p className="font-thin mb-2">{t("paragraph1")}</p>
                <p className="font-thin">{t("paragraph2")}</p>

                <Link
                    className="block bg-slate-100 w-full text-center text-black mt-6 m-auto py-2 text-xl rounded-md font-bold hover:bg-slate-300"
                    href={locale === "tr" ? "/explore" : `/${locale}/explore`}
                >
                    {t("explore")}
                </Link>
            </div>
        </>
    );
}
