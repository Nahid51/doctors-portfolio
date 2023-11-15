import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaSkype } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdCall, MdDateRange } from "react-icons/md";
import Motion from "./Motion";

const HeaderTop = () => {
    return (
        <section className='bg-[#025E74] md:flex hidden'>
            <div className='container mx-auto py-2'>
                <div className='flex items-center justify-between'>
                    <Motion motion1={"-translate-x-0 duration-500 ease-in-out"} motion2={"-translate-x-40 duration-500 ease-in-out"}>
                        <div className="text-white flex items-center gap-3">
                            <Link href="#"><FaFacebookSquare size={24} /></Link>
                            <Link href="#"><FaLinkedin size={24} /></Link>
                            <Link href="#"><FaGithubSquare size={24} /></Link>
                            <Link href="#"><FaSquareXTwitter size={24} /></Link>
                            <Link href="#"><FaSkype size={24} /></Link>
                        </div>
                    </Motion>
                    <Motion motion1={"translate-x-0 duration-500 ease-in-out"} motion2={"translate-x-40 duration-500 ease-in-out"}>

                        <div className="text-white font-semibold flex items-center">
                            <Link href="tel://+8801XXXXXXXXX">
                                <button className="px-4 py-2 border border-[#49D5A7] hover:bg-[#49D5A7] rounded duration-300 flex items-center gap-2"><MdCall /><span>+88017XXXXXXXX</span></button>
                            </Link>
                            <Link href="/appointment">
                                <button className="mx-4 px-4 py-2 border border-[#49D5A7] hover:bg-[#49D5A7] rounded duration-300 flex items-center gap-2"><MdDateRange /><span>Book Online</span></button>
                            </Link>
                            <button className="px-4 py-2 border border-[#49D5A7] hover:bg-[#49D5A7] rounded duration-300">Patient Portal</button>
                        </div>
                    </Motion>
                </div>
            </div>
        </section>
    );
};

export default HeaderTop;