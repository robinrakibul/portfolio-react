import React from 'react';
import errorImg from '../../images/404.jpg'
const Error = () => {
    return (
        <div className='flex justify-center align-middle mb-36'>
            <img className='rounded-xl' src={errorImg} alt="" />
        </div>
    );
};

export default Error;