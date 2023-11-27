/* eslint-disable react/prop-types */
import React from 'react';

const AllpaymentHisCard = ({ data }) => {
    const { name , email,transactionId,price,date    } = data
    return (
        <div>
            <div className="card  border-2 border-black mx-auto shadow-black shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">{name} </h2>
                    <p> {email} </p>
                    <p> {transactionId} </p>
                    <p> {price} </p>
                    <p> {date} </p>

                </div>
            </div>
        </div>
    );
};

export default AllpaymentHisCard;