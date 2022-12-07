import React from 'react';
import Card from './Card/Card';

const FeaturedProducts = () => {
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
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            img2: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Polo t-shirt',
            newPrice: 19,
            oldPrice: 22,
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1503342452485-86b7f54527ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            img2: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'Polo t-shirt for men',
            newPrice: 26,
            oldPrice: 29,
        }
    ]
    return (
        <div>
            <div className='flex items-center pt-10'>
                <h2 className='text-2xl w-72'>Treading Products</h2>
                <p className='flex-auto w-64 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit possimus rerum sit vitae repudiandae, quia molestiae aut sunt eum dicta sequi nemo a voluptatibus et modi ipsam quo aliquid iste ullam tempora! Quaerat hic aut corrupti necessitatibus illo nobis enim suscipit ratione laborum recusandae. Similique voluptate consequatur veniam repellendus.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 gap-5'>
                {
                    data.map(product => <Card key={product.id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;