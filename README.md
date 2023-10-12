## Next.js App Router Internationalization
## Packages

```bash
i18next
i18next-resources-to-backend
react-i18next

react-cookie
i18next-browser-languagedetector
```

## Usage Server

```javascript
import { useTranslation } from "@/app/i18n";

export default async function Page() {
    const locale = await getLocale();

    const { t } = await useTranslation(locale); //translation.json (default namespace)
    const { t } = await useTranslation(locale, "explore"); //explore.json

    return <p>{t("title")}</p>;
}
```

## Usage Client

```javascript
"use client";

import { useTranslation } from "@/app/i18n/client";

export default function Page() {
    const { t } = useTranslation(locale, "client-page"); //client-page.json

    return <p>{t("title")}</p>;
}
```

## For Hydration errors (layout)

```javascript
    const locale = await getLocale();

    return (
        <html lang={locale}>
           ...
}
```

## Source

https://locize.com/blog/next-13-app-dir-i18n/
