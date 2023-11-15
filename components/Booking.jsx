import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import BookingModal from './BookingModal';
import Motion from './Motion';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const [openBooking, setBookingOpen] = useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <div>
            <Motion motion1={"md:translate-x-0 -translate-x-0 duration-500 ease-in-out"} motion2={"md:translate-x-40 -translate-x-40 duration-500 ease-in-out"}>
                <div className='bg-[#49D5A7] shadow-lg hover:shadow-2xl duration-300 p-5 rounded-xl hover:scale-110 text-center'>
                    <Link href={booking.slug}>
                        <div className='flex items-center justify-center'>
                            <Image src={booking.photo} alt='photo' width={200} height={200} className='rounded-full' />
                        </div>
                        <p className='text-[#025E74] font-bold mt-5'>{booking.title}</p>
                    </Link>
                    <div className='flex justify-center my-5'>
                        <button onClick={handleBookingOpen} className="px-4 py-2 border text-sm font-semibold text-white border-[#025E74] hover:bg-[#025E74] rounded duration-300 flex items-center gap-2"><MdDateRange /><span>Book Appointment</span></button>
                    </div>
                </div>
            </Motion>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            />
        </div>
    );
};

export default Booking;