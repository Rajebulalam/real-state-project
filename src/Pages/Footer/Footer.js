import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

const Footer = () => {
    return (
        <div>
            {/* Main Footer */}
            <div className='bg-primary py-10'>
                <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='flex justify-center'>
                            <Link to='/'><img className='w-[200px] h-[200px]' src={logo} alt="logo" /></Link>
                        </div>
                        <div className='text-center md:text-start'>
                            <h2 className='text-white text-2xl font-bold pb-5'>Important Links</h2>
                            <Link className='text-xl block text-white hover:text-secondary pb-1' to='/'>Home</Link>
                            <Link className='text-xl block text-white hover:text-secondary pb-1' to='/coming'>About</Link>
                            <Link className='text-xl block text-white hover:text-secondary pb-1' to='/contact'>Contact</Link>
                            <ExternalLink href='https://smartservices.icp.gov.ae/echannels/web/client/default.html#/login' className='text-xl block text-white hover:text-secondary pb-1' to='/'>Smart Services</ExternalLink>
                        </div>
                        <div className='text-center md:text-start'>
                            <h2 className='text-white text-2xl font-bold pb-5'>Connect Us</h2>

                            <p className='pb-2 text-white text-lg md:text-xl'> <FontAwesomeIcon className='text-xl text-secondary pr-3' icon={faLocationDot}></FontAwesomeIcon> <span>Hamdan street Wemart same building,</span>
                                <span className='pl-2'>3rd floor, office No 316 </span> </p>
                            <p className='pb-2 text-white text-lg md:text-xl'> <FontAwesomeIcon className='text-xl text-secondary pr-3' icon={faPhoneAlt}></FontAwesomeIcon>026260031 (Official) , 0504188232 </p>
                            <p className='text-white text-xl pb-2'> <FontAwesomeIcon className='text-xl text-secondary pr-3' icon={faWhatsapp}></FontAwesomeIcon> 0559242638 </p>
                            <p className='text-white text-xl pb-2'> <FontAwesomeIcon className='text-lg md:text-xl text-secondary pr-3' icon={faEnvelope}></FontAwesomeIcon> habibrahman891@gmail.com </p>
                            <p className='text-white text-xl pb-2'> <FontAwesomeIcon className='text-xl text-secondary pr-3' icon={faEnvelope}></FontAwesomeIcon> infoassetsign@gmail.com </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Footer */}
            <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-6'>
                <div className='flex-none md:flex md:justify-between items-center'>
                    <p className='text-xl flex text-center justify-center pb-3 md:pb-0 md:flex-none md:justify-start'>&copy; All Right Reserved by Asset Sign Real State</p>
                    <p className='flex justify-center pt-3 md:pt-0 md:flex-none md:justify-start'>
                        <FontAwesomeIcon className='px-4 py-3 text-primary text-xl border border-primary rounded-full mr-2 hover:bg-primary hover:text-secondary' icon={faFacebookF}></FontAwesomeIcon>
                        <FontAwesomeIcon className='p-3 text-primary text-xl border border-primary rounded-full mr-2 hover:bg-primary hover:text-secondary' icon={faWhatsapp}></FontAwesomeIcon>
                        <FontAwesomeIcon className='p-3 text-primary text-xl border border-primary rounded-full mr-2 hover:bg-primary hover:text-secondary' icon={faInstagram}></FontAwesomeIcon>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;