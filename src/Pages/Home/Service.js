import React from 'react';
import villa from '../../Images/villa.jpg';
import flat from '../../Images/flat.jpg';
import properties from '../../Images/properties.jpg';
import single from '../../Images/single.jpg';
import double from '../../Images/double.jpg';
import triple from '../../Images/triple.jpg';

const Service = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-6 pb-0 md:py-1'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-5xl text-center font-bold text-secondary pb-4'>Our <span className='text-primary'>Services</span> </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 pb-14'>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-primary shadow-md rounded-xl pb-4'>
                    <img className='rounded-xl h-[260px] w-full' src={villa} alt="house" />
                    <h2 className='text-2xl font-bold text-secondary text-center py-16'>Villa for Rent</h2>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-primary shadow-md rounded-xl pb-4'>
                    <img className='rounded-xl h-[260px] w-full' src={flat} alt="house" />
                    <h2 className='text-2xl font-bold text-secondary text-center py-16'>Properties for Rent</h2>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-primary shadow-md rounded-xl pb-4'>
                    <img className='rounded-xl h-[260px] w-full' src={properties} alt="house" />
                    <h2 className='text-2xl font-bold text-secondary text-center py-16'>Flat for Rent</h2>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-primary shadow-md rounded-xl pb-4'>
                    <img className='rounded-xl h-[260px] w-full' src={single} alt="house" />
                    <h2 className='text-2xl font-bold text-secondary text-center py-16'>Single Bedroom for Rent</h2>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-primary shadow-md rounded-xl pb-4'>
                    <img className='rounded-xl h-[260px] w-full' src={double} alt="house" />
                    <h2 className='text-2xl font-bold text-secondary text-center py-16'>Double Bedroom for Rent</h2>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-primary shadow-md rounded-xl pb-4'>
                    <img className='rounded-xl h-[260px] w-full' src={triple} alt="house" />
                    <h2 className='text-2xl font-bold text-secondary text-center py-16'>Triple Bedroom for Rent</h2>
                </div>
            </div>
        </div>
    );
};

export default Service;