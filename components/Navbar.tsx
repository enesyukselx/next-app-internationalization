import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-slate-200 text-slate-800 mb-6 py-2 text-center font-bold flex justify-center gap-4">
            <Link href="/" prefetch={false}>
                TR
            </Link>
            <Link href="/en" prefetch={false}>
                EN
            </Link>
        </div>
    );
};

export default Navbar;
