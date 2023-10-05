import Box from "@/components/Box";
import { getLocale } from "@/utils/getLocale";
import { useTranslation } from "@/app/i18n";
import Counter from "./components/counter";

const Page = async () => {
    const locale = await getLocale();
    const { t } = await useTranslation(locale, "explore");

    return (
        <>
            <h1 className="font-bold text-4xl mb-4 text-center">
                {t("title")}
            </h1>
            <Box>{t("p1")}</Box>
            <Box>{t("p2")}</Box>
            <Box>{t("p3")}</Box>

            <Counter locale={locale} />
        </>
    );
};

export default Page;
