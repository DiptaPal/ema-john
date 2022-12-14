import React from 'react';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteShoppingCart } from '../../utilities/fakeDataBase';
import OrderManage from '../OrderManage/OrderManage';

const Order = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let tax;
    let grandTotal;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        tax = (total * 0.1).toFixed(2);
        grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);
    }
    const clearCart = () =>{
        deleteShoppingCart();
    }
    return (
        <div>
            <div>
                {
                    cart.map(item => <OrderManage
                        item = {item}
                        key={item.id}
                    ></OrderManage>)
                }
            </div>
            <div className='text-black flex flex-col gap-6 mt-4'>
                <p className='text-2xl'>Order Summary</p>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p>Grand Total: ${grandTotal}</p>
                <button onClick={() => clearCart()} className='flex items-center justify-center bg-red-600 text-white py-2 mx-4 rounded-md'><p className='pr-2'>Clear Cart</p><FontAwesomeIcon icon={faTrash} /></button>
                <button className='flex items-center justify-center bg-orange-600 text-white py-2 mx-4 rounded-md'><p className='pr-2'>Review Order</p><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Order;