import React, { useState } from 'react';
import { FaBalanceScale, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';

const SingleProduct = () => {
    const id = useParams().id;
    const [currentImage, setCurrentImage] = useState('img');
    const [quantity, setQuantity] = useState(1);
    
    const { products, loading } = useFetch(`/products/${id}?populate=*`);
    console.log(products?.attributes?.newPrice);

    return (
        <div className='flex gap-5 mt-10'>
            <div className='flex gap-5 flex-1'>
                <div className='flex flex-col gap-5'>
                    <img className='h-28 w-full object-cover cursor-pointer' src={process.env.REACT_APP_IMG_URL + products?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setCurrentImage('img')} />
                    <img className='h-28 w-full object-cover cursor-pointer' src={process.env.REACT_APP_IMG_URL + products?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setCurrentImage('img2')} />
                </div>
                <div>
                    <img src={process.env.REACT_APP_IMG_URL + products?.attributes?.[currentImage]?.data?.attributes?.url} className=' max-h-96 md:max-h-[600px] lg:max-h-[800px] object-cover w-full' alt="" />
                </div>
            </div>
            <div className='flex gap-5 flex-1'>
                <div>
                    <h2 className='text-2xl'>{products?.attributes?.title}</h2>
                    <h3 className='my-5 text-2xl text-blue-500'>${products?.attributes?.newPrice}</h3>
                    <p className='mb-5'>{products?.attributes?.desc}</p>
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