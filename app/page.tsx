import Link from "next/link";
import { getLocale } from "@/utils/getLocale";
import { useTranslation } from "@/app/i18n";

export default async function Home() {
    const locale = await getLocale();
    const { t } = await useTranslation(locale);

    return (
        <div className="text-center">
            <h1 className="font-bold text-4xl mb-4">{t("title")}</h1>
            <p className="font-thin mb-2">{t("paragraph1")}</p>
            <p className="font-thin">{t("paragraph2")}</p>

            <Link
                className="block bg-slate-100 text-black mt-6 w-[200px] m-auto py-1 rounded-sm font-bold hover:bg-slate-300"
                href="/explore"
            >
                {t("explore")}
            </Link>
        </div>
    );
}
