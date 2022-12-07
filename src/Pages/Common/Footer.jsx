import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                <div className='flex flex-col'>
                    <h2 className='text-2xl'>Categories</h2>
                    <Link to=''>Men</Link>
                    <Link to=''>Women</Link>
                    <Link to=''>Children</Link>
                    <Link to=''>Accessories</Link>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-2xl'>Links</h2>
                    <Link to=''>FAQ</Link>
                    <Link to=''>Pages</Link>
                    <Link to=''>Stores</Link>
                    <Link to=''>Compare</Link>
                    <Link to=''>Cookies</Link>
                </div>
                <div>
                    <h2 className='text-2xl'>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia corporis fugit incidunt modi laborum distinctio? Quia consequuntur quasi perspiciatis, veritatis sunt libero. Temporibus unde sint, delectus eligendi quisquam ut.</p>
                </div>
                <div>
                    <h2 className='text-2xl'>Contact</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia corporis fugit incidunt modi laborum distinctio? Quia consequuntur quasi perspiciatis, veritatis sunt libero. Temporibus unde sint, delectus eligendi quisquam ut.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;