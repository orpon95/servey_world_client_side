import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            {/* main div */}
            <div className='grid grid-cols-4 gap-4'>
                {/* static div */}
                <div className='w=[30%] bg-pink-500 h-screen col-span-1  '>

                    
                    <NavLink to={"/dashboard/allusers"}><li  className='btn btn-primary block '>all users </li></NavLink> 
                    
                    <NavLink to={"/dashboard/allSurveyinfo"}> <li className='btn btn-primary block  my-2'>all surveys info </li></NavLink> 



                    <hr />
                    {/* shared */}
                    <div>
                       
                        <Link to={"/"}> <li className='btn btn-primary'> home </li></Link>

                    </div>

                </div>

                {/* outlet div */}
                <div className='w=[70%] bg-red-500 h-screen w-full col-span-3'>

                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;