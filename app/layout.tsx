import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next Internationalization",
    description: "Next Internationalization - App Router",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="p-10 bg-slate-900 text-white">{children}</body>
        </html>
    );
}
