import React from 'react';
import Categories from './Categories/Categories';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedProducts type='trending' />
            <Categories />
            <FeaturedProducts type='featured' />
        </div>
    );
};

export default Home;