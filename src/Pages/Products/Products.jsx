import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import ProductsList from './ProductsList/ProductsList';

const Products = () => {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(50);
    const [sort, setSort] = useState('asc');
    const [selectSubCat, setSelectSubCat] = useState([]);

    const catChange = (e) => {
        const value = e.target.value;
        const isChecke = e.target.checked;

        setSelectSubCat(isChecke ? [...selectSubCat, value] : selectSubCat.filter(item => item !==value));
    }

    console.log(selectSubCat);

    const { products } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
    
    return (
        <div className='flex'>
            <div className='w-[400px]'>
                <div>
                    <h2 className='text-xl font-semibold'>Products Categories</h2>
                    {
                        products?.map(item => (
                            <div key={item.id}>
                                <input type="checkbox" id={item.id} value={item.id} onChange={catChange} />
                                <label htmlFor={item.id} className=' pl-2'>{item.attributes.title}</label>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <h2 className='text-xl font-semibold mt-7'>Filter by Price</h2>
                    <div>
                        <span>0</span>
                        <input type="range" min={0} max={50} className='mx-2' onChange={e => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mt-7'>Sort by</h2>
                    <div>
                        <input type="radio" name="price" id="asc" value="asc" onChange={e => setSort('asc')} />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div>
                        <input type="radio" name="price" id="desc" value="desc" onChange={e => setSort('desc')} />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img className='w-full h-[300px] object-cover bg-center' src="https://images.unsplash.com/photo-1517111856508-8a6984d65c75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="" />
                <ProductsList catId={catId} maxPrice={maxPrice} sort={sort} selectSubCat={selectSubCat} />
            </div>
        </div>
    );
};

export default Products;