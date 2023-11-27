/* eslint-disable react/prop-types */
import React from 'react';

const Paymenttable = ({ data }) => {
    const { name , email,transactionId,price,date    } = data

    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                
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

export default Paymenttable;