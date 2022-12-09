import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ product }) => {
    const { img, img2, title, newPrice, oldPrice, isNew } = product;
    return (
        <Link to={`/product/${product.id}`}>
            <div className='h-[240px] overflow-hidden relative img'>
                <img src={img} alt={title} />
                <img src={img2} className='img2 absolute top-0 left-0 hidden z-10' alt={title} />
                {isNew && <span className='top-2 left-2 bg-white text-teal-600 absolute z-10 px-3 py-1 font-semibold rounded-lg'>New Season</span>}
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
            <div className='flex gap-5'>
                <h3 className='text-lg line-through'>${oldPrice}</h3>
                <h3 className='text-lg font-semibold'>${newPrice}</h3>
            </div>
        </Link>
    );
};

export default Card;