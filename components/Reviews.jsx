"use client"
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

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

const Reviews = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/reviews.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>


    return (
        <div>
            <Slider {...settings} className="slick_dots">
                {data.map((item) => (
                    <div key={item.id}>
                        <div className='px-20 py-40 text-center text-white'>
                            <h4 className='text-2xl text-[#49D5A7] font-light mb-10'>{item.review}</h4>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Reviews;