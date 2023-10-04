const defaultLocale = "tr";
const locales = ["tr", "en"];

const rewrites = [];

locales.forEach((locale) => {
    if (locale === defaultLocale) {
        return;
    }

    rewrites.push({
        source: `/${locale}`,
        destination: `/`,
    });

    rewrites.push({
        source: `/${locale}/:path*`,
        destination: `/:path*`,
    });
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return rewrites;
    },
};

module.exports = nextConfig;
