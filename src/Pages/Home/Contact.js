import React from 'react';
import { Link } from 'react-router-dom';
import contact from '../../Images/contact.png';

const Contact = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 pt-0 pb-14 md:py-14 mx-auto'>
            <div className='flex-none md:flex md:items-center'>
                <div data-aos="fade-right" data-aos-duration="1000" className='w-full pb-10 md:pb-0'>
                    <h2 className='text-5xl font-bold text-primary py-9'>Contact with Us</h2>
                    <p className='text-xl'>To get more information about our services.</p>
                    <p className='text-xl pb-10'>Please! Contact with us!</p>
                    <button type="submit" className='bg-primary border-0 outline-0 text-2xl font-semibold text-secondary hover:bg-secondary hover:text-primary rounded-xl px-6 py-3'><Link to='/contact'>Contact</Link></button>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='w-full flex justify-center'>
                    <img src={contact} alt="contact" />
                </div>
            </div>
        </div>
    );
};

export default Contact;