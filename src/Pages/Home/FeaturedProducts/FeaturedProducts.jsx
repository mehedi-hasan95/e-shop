import React from 'react';
import Loading from '../../../Components/Loading/Loading';
import useFetch from '../../../Hooks/useFetch';
import Card from './Card/Card';

const FeaturedProducts = ({ type }) => {

    const { products, loading } = useFetch(`/products?populate=*&filters[type][$eq]=${type}`);

    return (
        <div>
            {products.length > 0 && <>
                <div className='flex items-center pt-10'>
                    <h2 className='text-2xl w-72'>{type} Products</h2>
                    <p className='flex-auto w-64 text-gray-700'>Test Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit possimus rerum sit vitae repudiandae, quia molestiae aut sunt eum dicta sequi nemo a voluptatibus et modi ipsam quo aliquid iste ullam tempora! Quaerat hic aut corrupti necessitatibus illo nobis enim suscipit ratione laborum recusandae. Similique voluptate consequatur veniam repellendus.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 gap-5'>
                    {
                        loading ?
                        <Loading />
                        :
                        products?.map(product => <Card key={product.id} product={product}></Card>)
                    }
                </div>
            </>}
             
        </div>
    );
};

export default FeaturedProducts;