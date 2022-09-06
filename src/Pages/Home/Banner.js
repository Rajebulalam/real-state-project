import React from 'react';
import vector from '../../Images/banner-vector.png';
import banner from '../../Images/banner.png';

const Banner = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 py-12 lg:px-6 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='self-center'>
                    <h2 className='text-4xl text-primary font-bold pb-6'>Get You <span className='text-secondary'>Comport</span> </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi deleniti officia harum beatae nobis perspiciatis pariatur aperiam possimus veritatis.</p>
                    <div className='flex'>
                        <button type='submit' className='btn font-semibold outline-0 border-0 mt-16 bg-secondary text-primary hover:bg-primary hover:text-secondary rounded-lg'>Get Started</button><img src={vector} alt="vector" />

                    </div>
                </div>
                <div>
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;