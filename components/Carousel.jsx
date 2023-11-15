"use client"
import Image from 'next/image';
import Slider from 'react-slick';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import doctorPhoto from "../public/photos/portrait-doctor.jpg";
import Link from 'next/link';

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <MdArrowBackIos
            className="md:text-4xl text-2xl absolute md:left-10 left-0 top-[40%] cursor-pointer z-10 text-[#49D5A7]"
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <MdArrowForwardIos
            className="md:text-4xl text-2xl absolute md:right-10 right-0 top-[40%] cursor-pointer z-10 text-[#49D5A7]"
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        appendDots: dots => (
            <div>
                <ul className='mb-10'> {dots} </ul>
            </div>
        ),
    };

    return (
        <div>
            <div className='md:mt-[5px] mt-0'>
                <Slider {...settings} className="slick_dots">
                    <div className='bg-[#025E74]'>
                        <div>
                            <div className='flex md:flex-row flex-col items-center justify-evenly text-white'>
                                <div className='md:w-1/3 w-full mx-auto md:text-left text-center md:py-0 py-10'>
                                    <h2 className='text-5xl font-bold'>Meet with Dr. Maisha Sultana</h2>
                                    <p className='text-xl my-6'>Board Certified Rheumatologist</p>
                                    <Link href="#"><button className="px-6 py-2 border hover:bg-[#49D5A7] rounded duration-300">Meet Your Doctor</button></Link>
                                </div>
                                <div>
                                    <Image src={doctorPhoto} alt='dorcor photo' height={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex md:flex-row flex-col items-center justify-evenly'>
                                <div>
                                    <Image src={doctorPhoto} alt='dorcor photo' height={500} />
                                </div>
                                <div className='md:w-1/3 w-full mx-auto md:text-left text-center md:py-0 py-10'>
                                    <h2 className='text-5xl font-bold'>Providing the Safest Care Possible</h2>
                                    <p className='text-xl my-6'>Offering both in-person and virtual visits so you can stay safe during your appointments.</p>
                                    <Link href="#"><button className="px-6 py-2 border border-[#025E74] hover:bg-[#49D5A7] rounded duration-300">Meet Your Doctor</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#025E74]'>
                        <div>
                            <div className='flex md:flex-row flex-col items-center justify-evenly text-white'>
                                <div className='md:w-1/3 w-full mx-auto md:text-left text-center md:py-0 py-10'>
                                    <h2 className='text-5xl font-bold'>Get Your Quality Life Back</h2>
                                    <p className='text-xl my-6'>Quality & Compassionate Care</p>
                                    <Link href="#"><button className="px-6 py-2 border hover:bg-[#49D5A7] rounded duration-300">Meet Your Doctor</button></Link>
                                </div>
                                <div>
                                    <Image src={doctorPhoto} alt='dorcor photo' height={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex md:flex-row flex-col items-center justify-evenly'>
                                <div>
                                    <Image src={doctorPhoto} alt='dorcor photo' height={500} />
                                </div>
                                <div className='md:w-1/3 w-full mx-auto md:text-left text-center md:py-0 py-10'>
                                    <h2 className='text-5xl font-bold'>Medical Services That You Can Trust</h2>
                                    <p className='text-xl my-6'>Need professional help? Our support staff will answer your questions. Visit us now or make an appointment.</p>
                                    <Link href="#"><button className="px-6 py-2 border border-[#025E74] hover:bg-[#49D5A7] rounded duration-300">Meet Your Doctor</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;