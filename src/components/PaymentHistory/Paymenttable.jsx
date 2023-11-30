/* eslint-disable react/prop-types */
import React from 'react';

const Paymenttable = ({ data }) => {
    const { name , email,transactionId,price,date    } = data

    return (
        <div>
            <div className="card w-96 mx-auto shadow-black shadow-xl">
                
                <div className="card-title justify-center text-lg font-black">
                    <h2  className="card-title">Name: <span>{name}</span> </h2>
                    <p className='text-lg font-black'> email:         <span className='text-lg font-semibold'>{email}</span> </p>
                    <p className='text-xl font-bold'> Transaction id: <span className='text-lg font-semibold'>{transactionId}</span> </p>
                    <p className='text-xl font-bold'> Payment amount: <span className='text-lg font-semibold'>{price}</span> </p>
                    <p className='text-xl font-bold'> Payment date:   <span className='text-lg font-semibold'>{date}</span> </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Paymenttable;