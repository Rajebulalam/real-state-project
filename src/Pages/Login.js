import React from 'react';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [])

    console.log(admins);

    const [userIn, setUserIn] = useState('');
    const [userNam, setUserNam] = useState('');

    const userHandle = (event) => {
        setUserIn(event.target.value);
        console.log(event.target.value);
    }

    const userNameHandle = (event) => {
        setUserNam(event.target.value);
        console.log(event.target.value);
    }



    const formHandle = async (e) => {
        e.preventDefault();

        const loginResult = admins?.find(admin => (admin.userId === userIn) && (admin.userName === userNam));
        console.log(loginResult);
        if (loginResult) {
            localStorage.setItem('admin', JSON.stringify(loginResult));
            navigate('/home');
            window.location.reload();

        }
        e.target.reset();
    }

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto h-[500px] flex items-center justify-center'>
            <div>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center text-2xl font-bold text-primary'>Login Please!</h2>
                <form onSubmit={formHandle} className='mt-5 p-5 w-full md:w-10/12 mx-auto shadow-lg rounded-md'>
                    <input onBlur={userHandle} className='w-full border border-primary rounded-md px-2 py-1 mb-2 outline-0' type="text" name="user" id="user" placeholder='User Id' />
                    <input onBlur={userNameHandle} className='w-full border border-primary rounded-md px-2 py-1 outline-0' type="text" name="userName" id="name" placeholder='Name' />
                    <div className='flex justify-center mt-5'>
                        <button type="submit" className='px-4 py-2 font-medium text-secondary rounded-md bg-primary'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;