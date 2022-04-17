import React from 'react';

const Service = ({ service }) => {
    const { image, name, price, duration, description } = service;
    return (
        <div className='border-solid border-2 rounded-lg text-center shadow-lg'>
            <img src={image} alt="" />
            <div className='p-3'>
                <p className='text-xl font-semibold'>{name}</p>
                <p className='text-gray-500'><small>{description}</small></p>
                <p>Duration: {duration}</p>
                <button className='border-solid border-2 rounded-xl bg-sky-500 p-2 mt-2'>Book Now : $ {price}</button>
            </div>
        </div>
    );
};

export default Service;