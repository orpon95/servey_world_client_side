import React from 'react';
import { Link } from 'react-router-dom';

const NovotePage = () => {
    return (
        <div>


            <div className="card w-96 shadow-lg shadow-black text-primary-content my-9 mx-auto">
                <div className="card-body">
                    
                    <h1 className="card-title">sry u are not a pro user or not a loggedin user . u have not the rigt to participate in survyes</h1>
                    <div className="card-actions justify-end">
                    <Link to={"/"}> <button className='btn btn-warning' >Go home</button></Link>
                    </div>
                </div>
            </div>
            

           
        </div>
    );
};

export default NovotePage;