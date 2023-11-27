import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useSurveyor from '../Hooks/useSurveyor';

const Suerveyscard2 = ({ data }) => {
    const { title, category, short_description, _id, timestamp, status } = data
    const [isSurveyor] = useSurveyor()
    return (
        <div>

            {
                status ?
                    <>
                        <button className='btn invisible btn-primary'> no data</button>

                    </>
                    :
                    <>
                        <div className="card card-compact  bg-base-100 shadow-xl">

                            <div className="card-body">
                                <h2 className="card-title text-lg font-black">title: <span className='text-lg font-semibold'>{title}</span> </h2>
                                <p className='text-lg font-black'> category: <span className='text-lg font-semibold'  >{category}</span></p>
                                <p className='text-xl font-bold'>{short_description}</p>
                                <p className='text-lg font-black'>Survey created at : <span className='text-lg font-semibold'>{timestamp}</span></p>
                                <div className="card-actions justify-center">
                                    <Link to={`/details/${_id}`} > <button className="btn btn-primary">Details</button></Link>
                                </div>
                                {/* update button */}

                                {
                                    isSurveyor ?
                                        <>
                                            <div className='flex justify-center my-6'>
                                                <NavLink to={`/update/${_id}`} ><button className='btn btn-ghost border-2 text-center mx-auto shadow-2xl  border-cyan-300' >update survey</button></NavLink>
                                            </div>

                                        </>
                                        :
                                        <>
                                            <button className='btn hidden btn-ghost border-2 text-center mx-auto shadow-2xl  border-cyan-300' >update survey</button>

                                        </>
                                }
                            </div>
                        </div>

                    </>
            }


        </div>
    );
};

export default Suerveyscard2;