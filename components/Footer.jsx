import Link from 'next/link';
import { FaFacebookSquare, FaGithubAlt, FaLinkedin, FaSkype, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import Motion from './Motion';

const Footer = () => {
    return (
        <div className="bg-[url('../public/photos/footer-bg.png')] bg-white bg-cover bg-center bg-no-repeat">
            <div className="md:h-[50vh] h-full flex items-center">
                <div className='container mx-auto md:py-0 py-10'>
                    <div className="text-[#025E74] md:text-left text-center">
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                            <Motion motion1={"-translate-x-0 duration-500 ease-in-out"} motion2={"-translate-x-40 duration-500 ease-in-out"}>
                                <h2 className='text-2xl font-bold text-[#49D5A7] mb-5'>Location</h2>
                                <p>{`Health and Hope Doctor's Chamber, Doctor Sabamun Tower, 152/1/H Green Rd`}</p>
                                <p className='my-3'>+8801XXXXXXXXX</p>
                                <p>+8801XXXXXXXXX</p>
                            </Motion>
                            <div>
                                <h2 className='text-2xl font-bold text-[#49D5A7] mb-5'>Office Hours</h2>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <p>Monday - Thrusday</p>
                                        <p className='my-3'>Friday</p>
                                        <p>Friday - Saturday</p>
                                    </div>
                                    <div>
                                        <p>8.00 am - 5.00 pm</p>
                                        <p className='my-3'>2.00 am - 7.00 pm</p>
                                        <p>Closed</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold text-[#49D5A7] mb-5'>Get in touch</h2>
                                <div className='flex flex-col md:items-start items-center'>
                                    <Link href="https://wa.me/+88017XXXXXXXX" className='flex md:justify-start justify-center'>
                                        <button className="px-6 py-2 border border-[#49D5A7] hover:bg-[#49D5A7] rounded duration-300 flex items-center gap-2"><FaWhatsapp size={24} /><span>+88017XXXXXXXX</span></button>
                                    </Link>
                                    <Link href="/appointment">
                                        <button className="mt-3 px-10 py-2 border border-[#49D5A7] bg-[#49D5A7] hover:bg-transparent rounded duration-300 flex items-center gap-2"><MdDateRange size={24} /><span> Book Online</span></button>
                                    </Link>
                                    <div className='flex items-center text-[#025E74] mt-5'>
                                        <Link href="#" className='text-2xl hover:text-3xl w-10 h-10 duration-300'><FaSkype /></Link>
                                        <Link href="#" className='text-2xl hover:text-3xl w-10 h-10 duration-300'><FaGithubAlt /></Link>
                                        <Link href="#" className='text-2xl hover:text-3xl w-10 h-10 duration-300'><FaFacebookSquare /></Link>
                                        <Link href="#" className='text-2xl hover:text-3xl w-10 h-10 duration-300'><FaSquareXTwitter /></Link>
                                        <Link href="#" className='text-2xl hover:text-3xl w-10 h-10 duration-300'><FaLinkedin /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;