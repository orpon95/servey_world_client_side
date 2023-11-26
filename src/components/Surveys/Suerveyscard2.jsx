import React from 'react';
import { Link } from 'react-router-dom';

const Suerveyscard2 = ({ data }) => {
    const { title, category, short_description, _id, timestamp } = data
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title text-lg font-black">title: <span className='text-lg font-semibold'>{title}</span> </h2>
                    <p className='text-lg font-black'> category: <span className='text-lg font-semibold'  >{category}</span></p>
                    <p className='text-xl font-bold'>{short_description}</p>
                    <p className='text-lg font-black'>Survey created at : <span className='text-lg font-semibold'>{timestamp}</span></p>
                    <div className="card-actions justify-center">
                        <Link to={`/details/${_id}`} > <button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Suerveyscard2;