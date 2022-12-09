import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            img2: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Man t-shirt',
            isNew: true,
            newPrice: 16,
            oldPrice: 19,
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1621059591080-d5db06386b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
            img2: 'https://images.unsplash.com/photo-1575939238474-c8ada13b2724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            title: 'Women t-shirt',
            isNew: true,
            newPrice: 24,
            oldPrice: 29,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae laborum voluptates esse dolorum consequatur ipsam, consequuntur earum laudantium voluptas iure natus tempora doloribus asperiores qui nihil velit nobis? Reiciendis quo atque provident rerum, ratione voluptas perspiciatis voluptatem aspernatur repudiandae fuga sed odio temporibus est, enim, molestiae officia asperiores aut?'
        }
    ]

    return (
        <div className='relative'>
            <div className='absolute bg-white z-30 right-0 p-5 shadow-lg shadow-blue-200'>
                <h2 className='text-2xl font-semibold py-5'>Products in your Cart</h2>
                <div className='grid gap-5'>
                    {
                        data?.map(item => <div className='' key={data.id}>
                            <div className='flex justify-between gap-5 items-center border-b-2 pb-5'>
                                <img className='h-28 w-28' src={item.img} alt="" />
                                <div>
                                    <h2 className='text-xl'>{item.title}</h2>
                                    <p>{item.desc?.slice(0, 50)}</p>
                                    <span>1 x ${item.newPrice}</span>
                                </div>
                                <AiOutlineDelete className=' text-red-500 text-2xl cursor-pointer' />
                            </div>
                        </div>)
                    }
                </div>
                <div className='flex justify-between mt-10'>
                    <span>Subtotal</span>
                    <span>$19.39</span>
                </div>
                <button className='bg-blue-600 px-5 py-2 text-white font-semibold rounded-md block mt-10'>Procced To CheckOut</button>
                <p className='text-red-500 pt-7'>Reset Cart</p>
            </div>
        </div>
    );
};

export default Cart;