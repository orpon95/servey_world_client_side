import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useSurveyor from '../Hooks/useSurveyor';
import usePro from '../Hooks/usePro';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isSurveyor] = useSurveyor()
    const [isPro] = usePro()
    return (
        <div>
            {/* main div */}
            <div className='grid grid-cols-4 gap-4 dark-theme'>
                {/* static div */}
                {

                    <div className='w=[30%] bg-cyan-300 h-screen col-span-1  '>

                        {
                            isAdmin ?
                                <>
                                    <div>
                                        <NavLink to={"/dashboard/allusers"}><li className=' shadow-lg shadow-black btn  block '>all users </li></NavLink>

                                        <NavLink to={"/dashboard/allSurveyinfo"}> <li className=' shadow-lg shadow-black btn  block  my-2'>all surveys info </li></NavLink>
                                        
                                        <NavLink to={"/surveys"} ><li className=' shadow-lg my-2 shadow-black btn  block '>all surveys</li></NavLink>
                                        <NavLink to={"/dashboard/allpaymentHistory"}><li className='btn  my-5 shadow-lg shadow-black  block '>payment history </li></NavLink>

                                    </div>

                                </>

                                :
                                isSurveyor
                                    ?
                                    <>
                                        <div className=''>
                                            <NavLink to={"/dashboard/create_survey"}><li className='btn my-4 shadow-lg shadow-black block '>create survey </li></NavLink>

                                            <NavLink to={"/dashboard/surveysinfo"}><li className='btn  shadow-black block '>surveysinfo </li></NavLink>
                                            <NavLink to={"/surveys"} ><li className='btn  my-4 shadow-lg shadow-black block '>all surveys</li></NavLink>



                                        </div>

                                    </>
                                    :
                                    isPro
                                        ?
                                        <>
                                            <NavLink to={"/dashboard/paymentHistory"}><li className='btn  my-5 shadow-lg shadow-black  block '>payment history </li></NavLink>
                                            <NavLink to={"/surveys"} ><li className='btn shadow-lg shadow-black  block '>all surveys</li></NavLink>

                                        </>
                                        :
                                        <>
                                            <NavLink to={"/surveys"} ><li className='btn my-5 shadow-lg shadow-black  block '>all surveys</li></NavLink>

                                        </>

                        }







                        <hr />
                        {/* shared */}
                        <div>

                            <Link to={"/"}> <li className='btn btn-ghost border-2 border-black'> home </li></Link>

                        </div>

                    </div>




                }

                {/* outlet div */}
                <div className='w=[70%]  h-screen w-full col-span-3'>

                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;