import React from 'react';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Product = ({product, handleAddToCart}) => {

    const {img,name,price,seller,ratings} = product;

    return (
        <div className='mb-6'>
            <div className="card bg-base-100 shadow-md">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="text-left">
                <div className='p-4 flex flex-col gap-8'>
                    <div>
                        <h2 className="text-lg">{name}</h2>
                        <h2 className='text-md'>${price}</h2>
                    </div>
                    <div>
                        <p>Manufacturer : {seller}</p>
                        <p>Rating : {ratings} stars</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(product)} className="bg-orange-400 w-full text-black hover:bg-black hover:text-white rounded-b-lg flex flex-row py-3 justify-center items-center"><p className='pr-2'>Add to Cart</p><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Product;