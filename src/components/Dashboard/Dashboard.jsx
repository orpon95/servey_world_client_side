import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const isSurveyor = false
    const isProuser = false
    return (
        <div>
            {/* main div */}
            <div className='grid grid-cols-4 gap-4'>
                {/* static div */}
                {

                    <div className='w=[30%] bg-pink-500 h-screen col-span-1  '>

                        {
                            isAdmin ?
                                <>
                                    <div>
                                        <NavLink to={"/dashboard/allusers"}><li className='btn btn-primary block '>all users </li></NavLink>

                                        <NavLink to={"/dashboard/allSurveyinfo"}> <li className='btn btn-primary block  my-2'>all surveys info </li></NavLink>

                                    </div>

                                </>

                                :
                                isSurveyor
                                    ?
                                    <>

                                    </>
                                    :
                                    isProuser
                                        ?
                                        <>

                                        </>
                                        :
                                        <>
                                        <p>usera</p>

                                        </>

                        }







                        <hr />
                        {/* shared */}
                        <div>

                            <Link to={"/"}> <li className='btn btn-primary'> home </li></Link>

                        </div>

                    </div>




                }

                {/* outlet div */}
                <div className='w=[70%] bg-red-500 h-screen w-full col-span-3'>

                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;