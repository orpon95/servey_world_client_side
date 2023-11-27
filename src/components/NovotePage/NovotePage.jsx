import React from 'react';
import { Link } from 'react-router-dom';

const NovotePage = () => {
    return (
        <div>
            <h1>sry u are not a pro user or not a normal user . u have not the righ to participate in survyes</h1>

            <Link to={"/"}> <button className='btn btn-warning' >Go home</button></Link>
        </div>
    );
};

export default NovotePage;