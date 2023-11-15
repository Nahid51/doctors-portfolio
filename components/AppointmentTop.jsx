import Image from 'next/image';
import { useState } from 'react';
import medical from "@/public/photos/measuring-blood-pressure .jpg";

const AppointmentTop = ({ date, setDate }) => {
    const [newDate, setNewDate] = useState(null);
    return (
        <div className='flex items-start justify-evenly md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10'>
            <div>
                <input type="date" className='w-96 p-2 border border-[#49D5A7] bg-[#025E74] text-white font-bold rounded focus:outline-none' date={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
                <Image src={medical} alt="medical" width={500} className="rounded" />
            </div>
        </div>
    );
};

export default AppointmentTop;