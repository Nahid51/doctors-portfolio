"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Motion from './Motion';

const Services = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('/services.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className='grid md:grid-cols-4 grid-cols-1 md:gap-x-5 gap-x-0 md:gap-y-5 gap-y-5'>
            {
                data.map((item) => (
                    <Motion key={item.id} motion1={"md:translate-x-0 -translate-x-0 duration-500 ease-in-out"} motion2={"md:translate-x-40 -translate-x-40 duration-500 ease-in-out"}>
                        <div className='bg-[#49D5A7] shadow-lg hover:shadow-2xl duration-300 p-5 rounded-xl hover:scale-110 text-center'>
                            <Link href="#">
                                <div className='flex items-center justify-center'>
                                    <Image src={item.photo} alt='photo' width={200} height={200} className='rounded-full' />
                                </div>
                                <p className='text-[#025E74] font-bold mt-5'>{item.title}</p>
                            </Link>
                        </div>
                    </Motion>
                ))
            }
        </div>

    );
};

export default Services;