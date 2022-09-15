import { faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactPage.css';

// For message
// import emailjs from 'emailjs-com';

const ContactPage = () => {

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_l2mh3ra', 'template_mjns3v9', e.target, 'DaKnbaHxEK4oxNIFK')
    //         .then(res => {
    //             console.log(res);
    //             alert('Email Sent');
    //             e.target.reset();
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className='contact-page py-10 pb-14'>
            <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center text-5xl font-bold text-white pt-6'>Contact Us</h2>
                <p className='text-center text-xl text-slate-400 pt-4 pb-6'>If you have any question about me? Then you should contact with this.</p>
                <div className='flex-none md:flex md:items-center pt-10'>
                    <div data-aos='fade-right' data-aos-duration="1000" className='pb-8 md:pb-0 w-full'>
                        <div className='flex pb-6'>
                            <div className='pr-6'>
                                <FontAwesomeIcon className='text-lg text-primary bg-white px-[18px] py-4 rounded-full' icon={faLocationDot}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h3 className='text-red-500 text-2xl pb-2'>Address</h3>
                                <p className='text-white text-lg'>Hamdan street Wemart same building, 3rd floor, office No 316</p>
                            </div>
                        </div>
                        <div className='flex pb-6'>
                            <div className='pr-6'>
                                <FontAwesomeIcon className='text-xl text-primary bg-white px-4 py-4 rounded-full' icon={faPhoneAlt}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h3 className='text-red-500 text-2xl pb-2'>Phone</h3>
                                <p className='text-white text-lg'>026260031 (Official)</p>
                                <p className='text-white text-lg'>0504188232</p>
                            </div>
                        </div>
                        <div className='flex pb-6'>
                            <div className='pr-6'>
                                <FontAwesomeIcon className='text-xl text-primary bg-white px-4 py-4 rounded-full' icon={faWhatsapp}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h3 className='text-red-500 text-2xl pb-2'>Whatsapp</h3>
                                <p className='text-white text-lg'>0559242638</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='pr-6'>
                                <FontAwesomeIcon className='text-xl text-primary bg-white px-4 py-4 rounded-full' icon={faEnvelope}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h3 className='text-red-500 text-2xl pb-2'>Email</h3>
                                <p className='text-white text-lg'>habibur@assetsignrealestate.com</p>
                                <p className='text-white text-lg'>habibrahman891@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-duration="1000" className='bg-white p-6 rounded-md w-full'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-4xl text-primary pb-6'>Send Message</h2>
                        {/* for click onSubmit={sendEmail} */}
                        <form>
                            <input type="text" name="name" id="name" placeholder='Your Name' className='py-3 border-b border-3 outline-0 w-full mb-3' />
                            <input type="email" name="email" id="email" placeholder='Email' className='py-3 border-b border-3 outline-0 w-full' />
                            <textarea name="message" id="message" rows="5" className='py-3 border-b border-3 outline-0 w-full' placeholder='Write your message...'></textarea>
                            <button type="submit" className='btn mt-5 btn-primary text-secondary'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;