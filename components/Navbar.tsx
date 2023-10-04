import { getLocale } from "@/utils/getLocale";

const Navbar = async () => {
    const locale = await getLocale();

    return (
        <div className="bg-slate-200 text-slate-800 mb-6 py-2 text-center font-bold flex justify-center gap-4">
            <a
                href="/"
                className={`
                ${
                    locale === "tr"
                        ? "bg-slate-800 text-white"
                        : "bg-slate-200 text-slate-800"
                }
                px-2 rounded
        
            `}
            >
                TR
            </a>
            <a
                href="/en"
                className={`
                ${
                    locale === "en"
                        ? "bg-slate-800 text-white"
                        : "bg-slate-200 text-slate-800"
                }
                px-2 rounded
        
            `}
            >
                EN
            </a>
        </div>
    );
};

export default Navbar;
