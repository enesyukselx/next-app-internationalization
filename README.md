## Packages

```bash
i18next
i18next-resources-to-backend
react-i18next
```

## Usage Server

```javascript
export default async function Page() {
    const locale = await getLocale();

    const { t } = await useTranslation(locale); //translation.json (default namespace)
    const { t } = await useTranslation(locale, "explore"); //explore.json

    return <p>{t("title")}</p>;
}
```
