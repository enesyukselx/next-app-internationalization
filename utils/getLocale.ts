import { headers } from "next/headers";

export const getLocale = async () => {
    const headersList = headers();
    const location = headersList.get("x-user-locale");

    return location;
};
