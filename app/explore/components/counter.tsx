"use client";

import { useTranslation } from "@/app/i18n/client";
import { useState } from "react";

const Counter = ({ locale }: { locale: string | null }) => {
    const { t } = useTranslation(locale, "client-page");
    const [count, setCount] = useState(0);

    return (
        <div className="bg-slate-800 p-6 text-center">
            <h1 className="text-3xl font-bold">{t("counter")}</h1>
            <p className="mb-2 text-xl">
                {t("count")} {count}
            </p>
            <button
                className="bg-white text-black p-1 rounded-lg mr-2"
                onClick={() => setCount(count + 1)}
            >
                {t("increment")}
            </button>
            <button
                className="bg-white text-black p-1 rounded-lg"
                onClick={() => setCount(count - 1)}
            >
                {t("decrement")}
            </button>
        </div>
    );
};

export default Counter;
