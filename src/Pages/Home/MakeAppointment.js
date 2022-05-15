import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                {
                    <img className='mt-[-200px]' src={doctor} alt="doctor" />
                }
            </div>
            <div className='flex-1 sm:ml-7 py-5'>
                <h3 className='text-2xl text-primary font-bold sm:text-center'>Appointment</h3>
                <h2 className='text-4xl italic font-bold text-white py-5 '>Make an  Appointment Today</h2>
                <p className='text-white sm: pb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique labore a maiores nisi, voluptatum earum voluptas iusto? Voluptatum ipsam qui molestias nemo ab rem, libero sequi amet cupiditate rerum ipsum ducimus repellendus quas dolores eum? Veritatis non repudiandae incidunt.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;