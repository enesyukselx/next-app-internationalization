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
            <body className="p-10 bg-black text-white">
                <div className="max-w-[700px] w:2/3 md:w-1/2 m-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
