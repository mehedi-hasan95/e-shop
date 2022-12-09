import React, { useState } from 'react';
import { FaBalanceScale, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

const SingleProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const images = [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80'
    ]
    return (
        <div className='flex gap-5 mt-10'>
            <div className='flex gap-5 flex-1'>
                <div className='flex flex-col gap-5'>
                    <img className='h-28 w-full object-cover cursor-pointer' src={images[0]} alt="" onClick={e => setCurrentImage(0)} />
                    <img className='h-28 w-full object-cover cursor-pointer' src={images[1]} alt="" onClick={e => setCurrentImage(1)} />
                    <img className='h-28 w-full object-cover cursor-pointer' src={images[2]} alt="" onClick={e => setCurrentImage(2)} />
                </div>
                <div>
                    <img src={images[currentImage]} className=' max-h-96 md:max-h-[600px] lg:max-h-[800px] object-cover w-full' alt="" />
                </div>
            </div>
            <div className='flex gap-5 flex-1'>
                <div>
                    <h2 className='text-2xl'>Title</h2>
                    <h3 className='my-5 text-2xl text-blue-500'>$19.99</h3>
                    <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non et quo ipsum praesentium est, rem aspernatur voluptatum voluptas impedit esse consequuntur pariatur? Iusto magni quis porro voluptas architecto nemo ipsum fugiat cumque voluptates reprehenderit! Debitis.</p>
                    <button className='bg-gray-400 h-12 w-12 justify-center items-center' onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    <span className='mx-4'>{quantity}</span>
                    <button className='bg-gray-400 h-12 w-12 justify-center items-center' onClick={() => setQuantity(prev => prev + 1)}>+</button>
                    <div className='mt-10'>
                        <button className='px-7 py-2 bg-blue-400 flex justify-center items-center gap-3 text-white font-semibold rounded-md'><FaShoppingCart /> Add to Cart</button>
                    </div>
                    <div className='flex gap-5 mt-10'>
                        <span className='flex items-center gap-3'><FaRegHeart /> Add to Wish List</span>
                        <span className='flex items-center gap-3'><FaBalanceScale /> Add to Compair</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;