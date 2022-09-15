import { faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

const TopHeader = () => {
    return (
        <div className='bg-primary border-bottom'>
            <div className='w-full md:w-11/12 px-4 md:px-6 mx-auto'>
                <div className='hidden lg:flex lg:justify-between items-center'>
                    <div className='flex'>
                        <p className='pseudo pr-6 text-xl py-2 text-secondary'>
                            <FontAwesomeIcon className='text-secondary text-xl pr-3' icon={faPhoneAlt}></FontAwesomeIcon>
                            026260031 (Official)
                        </p>
                        <p className='text-xl pl-1 pr-6 py-2 pseudo-whats text-secondary'>
                            <FontAwesomeIcon className='text-secondary text-xl pr-3' icon={faWhatsapp}></FontAwesomeIcon>
                            0559242638
                        </p>
                    </div>
                    <div className='flex'>
                        <p className='text-xl py-2 px-4 pseudo-email-left text-secondary pr-2'>
                            <FontAwesomeIcon className='text-secondary text-xl pr-3' icon={faEnvelope}></FontAwesomeIcon>
                            habibur@assetsignrealestate.com
                        </p>
                        <p className='text-xl py-2 px-4 pseudo-email text-secondary'>
                            <FontAwesomeIcon className='text-secondary text-xl pr-3' icon={faEnvelope}></FontAwesomeIcon>
                            habibrahman891@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;