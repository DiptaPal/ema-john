import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { removeFromDb } from '../../utilities/fakeDataBase';

const OrderManage = ({item}) => {
    const {id,img, quantity, name} = item;

    return (
        <div className='flex text-white items-center justify-between p-2 mb-2 bg-base-100'>
            <div>
                <img className='w-16 h-16 rounded-md' src={img} alt="" />
            </div>
            <div className='flex flex-col justify-between'>
                <p><small>{name.toLowerCase()}</small></p>
                <p><small>Quantity: {quantity}</small></p>
            </div>
            <div>
                <button onClick={() => removeFromDb(id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default OrderManage;