import { NextRequest, NextResponse } from "next/server";

const defaultLocale = "tr";
const locales = ["tr", "en"];

const setHeader = (headerName: string, request: NextRequest, value: string) => {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(headerName, value);
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    return response;
};

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const firstPath = pathname.split("/")[1];

    if (pathname === "/" || !locales.includes(firstPath)) {
        return setHeader("x-user-locale", request, defaultLocale);
    }

    if (locales.includes(firstPath) && firstPath !== defaultLocale) {
        return setHeader("x-user-locale", request, firstPath);
    }
}
