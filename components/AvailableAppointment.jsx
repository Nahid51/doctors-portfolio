import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Booking from './Booking';

const AvailableAppointment = ({ date }) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [bookingSuccess, setBookingSuccess] = useState(false);

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
        <div>
            <h2 className="mt-20 mb-10 text-2xl font-bold text-center text-[#025E74]">Available Appointment on {date}</h2>
            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-x-5 gap-x-0 md:gap-y-5 gap-y-5'>
                {
                    data.map((booking) => (
                        <Booking
                            key={booking.id}
                            booking={booking}
                            date={date}
                            setBookingSuccess={setBookingSuccess}
                        ></Booking>
                    ))
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;