import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='border-b-4 border-orange-500 pb-7 mt-4'>
            <div className="navbar bg-base-100 px-40 lg:px-24 flex flex-col sm:flex-row justify-between">    
                <div className='mb-6 sm:mb-0'>
                    <a href='./home' className="btn btn-ghost normal-case text-xl" >
                        <img className='w-24 sm:w-auto' src={logo} alt="" />
                    </a>
                </div>
                <div className=" flex gap-6 text-lg hidden lg:block">
                    <a className='hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md' href='./order'>Order</a>
                    <a className='hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md' href='./order-review'>Order Review</a>
                    <a className='hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md' href='./manage-inventory'>Manage Inventory</a>
                    <a className='hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md' href='./login'>Login</a>
                </div>
                <div className="block lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-yellow-500 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md'><a href='./order'>Order</a></li>
                            <li className='hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md'><a href='./order-review'>Order Review</a></li>
                            <li className='hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md'><a href='./manage-inventory'>Manage Inventory</a></li>
                            <li className='hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md'><a href='./login'>Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;