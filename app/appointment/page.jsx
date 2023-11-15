"use client"
import AppointmentTop from "@/components/AppointmentTop";
import AvailableAppointment from "@/components/AvailableAppointment";
import { useState } from "react";

const Appointment = () => {
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10));

    return (
        <div className='container mx-auto my-10'>
            <div className="md:mx-0 mx-3">
                <AppointmentTop date={date} setDate={setDate}></AppointmentTop>
                <AvailableAppointment date={date} />
            </div>
        </div>
    );
};

export default Appointment;