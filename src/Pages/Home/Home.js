import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import HeadLine from './HeadLine';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <HeadLine></HeadLine>
            <Banner></Banner>
            <Service></Service>
            <Contact></Contact>
        </div>
    );
};

export default Home;