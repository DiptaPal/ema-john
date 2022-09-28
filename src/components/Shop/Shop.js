import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Order from '../Order/Order';
import { addToCart, getStoredCart } from '../../utilities/fakeDataBase';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(rest => rest.json())
        .then(data => setProducts(data.slice(0,9)))
    },[]);

    
    useEffect(()=>{
        const storedCart = getStoredCart();
        const cardProduct = [];
        for(const id in storedCart){
           const addedProduct = products.find(product => product.id === id)
           if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                cardProduct.push(addedProduct);
           }
        }
        setCart(cardProduct);
    },[products])

    const handleAddToCart = (selectedProduct) =>{
        let newCart;
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToCart(selectedProduct.id);
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