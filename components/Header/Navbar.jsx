import { navItems } from "@/public/assets/navItems";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = ({ setOpen, sticky }) => {
    const pathName = usePathname();

    return (
        <>
            {navItems.map(link => (
                <div key={link.id}>
                    <div>
                        <Link
                            href={link.path}
                            className={`flex md:justify-center justify-between items-center font-bold hover:md:text-[#49D5A7] md:px-3 px-0 md:py-6 py-3 ${pathName === link.path ? "text-[#49D5A7]" : "md:text-[#025E74] text-black"}`}
                            onClick={() => {
                                link.path && setOpen(false)
                            }}
                        >
                            {link.title}
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Navbar;