import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Order from '../Order/Order';
import { addToCart } from '../../utilities/fakeDataBase';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(rest => rest.json())
        .then(data => setProducts(data.slice(0,9)))
    },[]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToCart(product.id);
    }

    return (
        <div className='bg-gray-500'>
             <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-5 md:col-span-3 lg:col-span-4 mx-24 mt-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {
                    products.map(product => <Product
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        
                    ></Product>)
                    }
                </div>
                </div>
                <div className='col-span-5 rounded-md mx-24 py-8 mb-5 md:rounded-none md:mx-0 md:py-0 md:mb-0 md:col-span-2 lg:col-span-1 bg-orange-300 text-white relative'>
                <div className='sticky top-10'>
                    <Order 
                        cart = {cart}
                        key = {cart.id}
                    ></Order>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;