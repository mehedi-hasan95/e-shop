import React from 'react';
import Card from '../../Home/FeaturedProducts/Card/Card';

const ProductsList = () => {
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {/* {
                data.map(list => <Card key={list.id} product={list}></Card>)
            } */}
        </div>
    );
};

export default ProductsList;