import React from 'react';
import vector from '../../Images/banner-vector.png';
import banner from '../../Images/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 py-8 lg:px-6 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div data-aos="fade-right" data-aos-duration="1000" className='self-center'>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-4xl md:text-5xl text-primary font-bold pb-6'>Get You <span className='text-secondary'>Comport</span> </h2>
                    <p>May your abode be a joyous one with you.....</p>
                    <div className='flex'>
                        <button type='submit' className='banner-btn font-semibold outline-0 border-0 mt-16 bg-primary text-secondary rounded-lg px-6 py-4 text-xl '>Get Started</button><img src={vector} alt="vector" />
                    </div>
                </div>
                <div>
                    <img data-aos="fade-left" data-aos-duration="1000" src={banner} alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;