import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import Cart from './Cart';

const NavMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between text-xl py-4">
                <div className='flex gap-5'>
                    <Link to=''>Men</Link>
                    <Link to=''>Women</Link>
                    <Link to=''>Children</Link>
                    <Link to=''>Accessories</Link>
                </div>
                <div>
                    <Link to='/' className='text-2xl cursor-pointer'>E-Shop</Link>
                </div>
                <div className='flex gap-5'>
                    <Link to=''>Homepage</Link>
                    <Link to=''>About</Link>
                    <Link to='/products'>Products</Link>
                    <Link to=''>Stores</Link>
                    <FaSearch />
                    <BsPersonFill />
                    <FaRegHeart />
                    <div className='relative cursor-pointer' onClick={() => setOpen(!open)}>
                        <FaShoppingCart />
                        <span className=' absolute h-5 w-5 rounded-full bg-blue-400 text-sm flex justify-center -top-3 -right-3'>0</span>
                    </div>
                </div>
            </div>
            {open && <Cart></Cart>}
        </div>
    );
};

export default NavMenu;