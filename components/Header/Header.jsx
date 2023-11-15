"use client"
import Link from 'next/link';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState("");

    // for sticky navbar
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);


    const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    return (
        <nav className={`bg-white text-[#025E74] ${sticky} shadow-lg`}>
            <div className='container mx-auto'>
                <div className="flex items-center justify-between">
                    <div className="z-50 md:w-auto w-full md:mx-0 mx-3 py-3 flex justify-between items-center">
                        <Link href="/" className='flex items-center gap-3'>
                            <h2 className='text-3xl font-bold text-[#025E74] hover:text-[#49D5A7] duration-300'>Portfolio</h2>
                        </Link>
                        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                            {open ? <MdClose /> : <MdMenu />}
                        </div>
                    </div>
                    <ul className="md:flex hidden items-center">
                        <Navbar setOpen={setOpen} sticky={sticky} />
                        <a href="#" download="#"><button className='border border-[#49D5A7] text-[#025E74] hover:text-white font-bold px-4 py-2 rounded-md hover:bg-[#49D5A7] duration-300'>Download CV</button></a>
                    </ul>

                    {/* Mobile nav */}
                    <ul className={`md:hidden absolute w-full top-[4.5rem] bg-white bottom-0 pt-5 pl-4 z-40 h-screen duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                        <Navbar setOpen={setOpen} sticky={sticky} />
                        <a href="#" download="#"><button className='border border-[#49D5A7] text-[#025E74] hover:text-white font-bold px-4 py-2 rounded-md hover:bg-[#49D5A7] duration-300'>Download CV</button></a>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;