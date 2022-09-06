import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

const MainHeader = () => {

    const menuItem = <>
        <li><Link className='text-secondary bg-primary hover:bg-secondary hover:text-primary text-xl font-medium' to='/'>Home</Link></li>
        <li><Link className='text-secondary mx-3 bg-primary hover:bg-secondary hover:text-primary text-xl font-medium' to='/about'>About</Link></li>
        <li><Link className='text-secondary bg-primary hover:bg-secondary hover:text-primary text-xl font-medium' to='/contact'>Contact</Link></li>
    </>;

    return (
        <div className='bg-white border-bottom'>
            <div class="navbar w-full lg:w-11/12 px-4 lg:px-6 mx-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/'> <img src={logo} className='w-[150px] h-[80px]' alt="logo" /> </Link>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;