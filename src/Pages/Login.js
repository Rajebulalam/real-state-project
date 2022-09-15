import React from 'react';

const Login = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto h-[500px] flex items-center justify-center'>
            <div>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center text-2xl font-bold text-primary'>Login Please!</h2>
                <form className='mt-5 p-5 w-full md:w-10/12 mx-auto shadow-lg rounded-md'>
                    <input className='w-full border border-primary rounded-md px-2 py-1 mb-2 outline-0' type="text" name="userId" id="userId" placeholder='User Id' />
                    <input className='w-full border border-primary rounded-md px-2 py-1 outline-0' type="text" name="name" id="name" placeholder='Name' />
                </form>
            </div>
        </div>
    );
};

export default Login;