import React from 'react';
import useFetch from '../../../Hooks/useFetch';
import Card from '../../Home/FeaturedProducts/Card/Card';
import Loading from '../../../Components/Loading/Loading';

const ProductsList = ({ selectSubCat, sort, maxPrice, catId }) => {
    
    const {products, lodding} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}
    ${selectSubCat.map(item => `&filters[sub_categories][id][$eq]=${item}`)}
    &[filters][newPrice][$lte]=${maxPrice}&sort=newPrice:${sort}`);

    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                lodding ? 
                <Loading />
                :
                products.map(list => <Card key={list.id} product={list}></Card>)
            }
        </div>
    );
};

export default ProductsList;