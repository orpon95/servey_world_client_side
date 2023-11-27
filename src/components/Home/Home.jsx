import React from 'react';
import Banner from '../Banner/Banner';
import Howwork from '../Howwork/Howwork';
import Testimonial from '../Testimonial/Testimonial';
import FAQ from '../FAQ/FAQ';
// import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Howwork></Howwork>
            <Testimonial></Testimonial>
            {/* <FAQ></FAQ> */}
            <FAQ></FAQ>
        </div>
    );
};

export default Home;