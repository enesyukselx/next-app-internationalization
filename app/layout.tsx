import "./globals.css";
import type { Metadata } from "next";

import { getLocale } from "@/utils/getLocale";

export const metadata: Metadata = {
    title: "Next Internationalization",
    description: "Next Internationalization - App Router",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = (await getLocale()) ?? "tr";

    return (
        <html lang={locale}>
            <body className="p-10 bg-slate-900 text-white">{children}</body>
        </html>
    );
}
