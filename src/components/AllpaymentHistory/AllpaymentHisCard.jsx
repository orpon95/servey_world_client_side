/* eslint-disable react/prop-types */
import React from 'react';

const AllpaymentHisCard = ({ data }) => {
    const { name , email,transactionId,price,date    } = data
    return (
        <div>
            <div className="card  border-2 border-black mx-auto shadow-black shadow-xl">

                <div className="card-body">
                    <h2 className="card-title text-lg font-black">name:<span className='text-lg font-semibold'>{name}</span> </h2>
                    <p className='text-lg font-black'> email:  <span className='text-lg font-semibold'>{email}</span> </p>
                    <p className='text-lg font-black'> transactionId <span className='text-lg font-semibold'>{transactionId}</span> </p>
                    <p className='text-lg font-black'>paid amount <span className='text-lg font-semibold'>{price}</span> </p>
                    <p className='text-lg font-black'> payment date: <span className='text-lg font-semibold'>{date}</span> </p>

                </div>
            </div>
        </div>
    );
};

export default AllpaymentHisCard;