import React from 'react';
import Categories from './Categories/Categories';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedProducts type='featured' />
            <Categories />
            <FeaturedProducts type='trending' />
        </div>
    );
};

export default Home;