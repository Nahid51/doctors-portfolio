"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Motion from './Motion';

const MyTeam = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('/team.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className='md:h-[90vh] h-full flex items-center'>
            <div className='container mx-auto'>
                <div className='md:mx-0 mx-3'>
                    <div className='flex items-center justify-center'>
                        <div className='text-center md:py-0 py-20'>
                            <h4 className='text-[#49D5A7] text-lg font-bold'>My Team</h4>
                            <p className='text-3xl text-[#025E74] mb-6'>We are here to help</p>
                            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-x-5 gap-x-0 md:gap-y-0 gap-y-5'>
                                {
                                    data.map((item) => (
                                        <Motion key={item.id} motion1={"-translate-x-0 duration-500 ease-in-out"} motion2={"-translate-x-40 duration-500 ease-in-out"}>
                                            <div className='shadow-lg hover:shadow-2xl duration-300 p-5 rounded-xl'>
                                                <Link href={item.slug}>
                                                    <div className='flex items-center justify-center'>
                                                        <Image src={item.photo} alt='photo' width={300} height={300} className='rounded-full' />
                                                    </div>
                                                    <h4 className='text-lg font-bold my-3 text-[#025E74]'>{item.name}</h4>
                                                    <p className='text-[#49D5A7]'>{item.title}</p>
                                                    <p className='text-[#025E74]'>{item.email}</p>
                                                </Link>
                                            </div>
                                        </Motion>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTeam;