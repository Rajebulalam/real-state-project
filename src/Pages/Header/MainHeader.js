import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png';

const MainHeader = () => {

    const navigate = useNavigate();

    const admin = localStorage.getItem('admin');
    const logOut = async () => {
        localStorage.removeItem('admin');
        navigate('/home');
    }

    const menuItem = <>
        <li className='pr-3'><Link className='mb-4 md:mb-0 text-primary hover:text-white lg:text-secondary lg:bg-primary lg:hover:bg-secondary lg:hover:text-primary text-xl font-medium' to='/'>Home</Link></li>
        <li className='pr-3'><Link className='mb-4 md:mb-0 text-primary hover:text-white  lg:text-secondary lg:bg-primary lg:hover:bg-secondary lg:hover:text-primary text-xl font-medium' to='/contact'>Contact</Link></li>
        {
            admin === null ? '' : <li className='pr-3'><Link className='mb-4 md:mb-0 text-primary hover:text-white  lg:text-secondary lg:bg-primary lg:hover:bg-secondary lg:hover:text-primary text-xl font-medium' to='/addDetails'>Details</Link></li>
        }
        {
            admin === null ? '' : <li className='pr-3'><Link className='mb-4 md:mb-0 text-primary hover:text-white  lg:text-secondary lg:bg-primary lg:hover:bg-secondary lg:hover:text-primary text-xl font-medium' to='/addDetails'>Add</Link></li>
        }
        {
            admin ? <li><Link onClick={logOut} className='mb-4 md:mb-0 text-primary hover:text-white  lg:text-secondary lg:bg-primary lg:hover:bg-secondary lg:hover:text-primary text-xl font-medium' to='/home'>Logout</Link></li> : <li><Link className='mb-4 md:mb-0 text-primary hover:text-white  lg:text-secondary lg:bg-primary lg:hover:bg-secondary lg:hover:text-primary text-xl font-medium' to='/login'>Login</Link></li>
        }
    </>;

    return (
        <div className='bg-white border-bottom'>
            <div className="navbar w-full lg:w-11/12 px-4 lg:px-6 mx-auto">
                <div className="navbar lg:navbar-start">
                    <div className='navbar-start me-auto'>
                        <Link to='/'> <img src={logo} className='w-[150px] h-[60px]' alt="logo" /> </Link>
                    </div>
                    <div className="dropdown text-end navbar-end">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content bg-secondary mt-3 p-4 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                </div>
                <div className="lg:navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;