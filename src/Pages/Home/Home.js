import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import GoogleLocation from './GoogleLocation';
import HeadLine from './HeadLine';
import Service from './Service';
import WhatsApp from './WhatsApp';

const Home = () => {
    return (
        <div>
            <HeadLine></HeadLine>
            <Banner></Banner>
            <Service></Service>
            <Contact></Contact>
            <WhatsApp></WhatsApp>
            <GoogleLocation></GoogleLocation>
        </div>
    );
};

export default Home;