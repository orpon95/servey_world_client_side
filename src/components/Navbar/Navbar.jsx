import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Authprovider/Authprovider';
import useAxiospublic from '../Hooks/useAxiospublic';
import Swal from 'sweetalert2';

const Navbar = () => {
    const axiosPublic = useAxiospublic()
    const nevigate = useNavigate()
    const location = useLocation()
    const [loggedinUser, setLoggedInUser] = useState('')
    const { user, logOut, googlesign } = useContext(authContext)
    const handleSignOut = () => {
        logOut()
            .then(() => {
                setLoggedInUser('')
                const loggeduser = { email: user?.email }

                // clear coki start



            })
            .catch(err => console.log(err))




    }


    // googlesign
    const handleGoole = () => {
        googlesign()
            .then(result => {
                setLoggedInUser(result.user)
                const loggeduser = result.user

                const UserInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }

                // user info save to dbs
                axiosPublic.post("/v1/users", UserInfo)
                    .then(res => {
                        console.log("inside update pro", res.data);
                        if (res.data.insertedId) {
                            console.log("after posting data userinfo", res.data);

                        }
                    })
                nevigate(location?.state ? location.state : "/")
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'sucessfully loggedin',
                    showConfirmButton: false,
                    timer: 1500
                })

                // start

                // end
            })
            .catch(err => {
                console.log(err)
            })




    }
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Survey World</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <li> <NavLink to={"/"} >Home</NavLink> </li>
                                <li> <NavLink to={"/surveys"} >All surveys</NavLink> </li>
                                <li> <NavLink to={"/create_survey"} >create survey</NavLink> </li>
                                <li> <NavLink to={"/dashboard"} >dashboard</NavLink> </li>
                                <li> <NavLink to={"/register"} >register</NavLink> </li>
                                {
                                    user ? <button onClick={handleSignOut} className='btn btn-ghost mt-2 underline'> sign out</button> :

                                        // <NavLink to={"/Login"}> <button className='btn'> Log in</button></NavLink>
                                        <NavLink to={"/Login"}><button className='btn btn-ghost underline'> Log in</button></NavLink>


                                }
                                <button className='btn btn-ghost underline' onClick={handleGoole}>Sign in with google</button>
                                {
                                    user && <div className='flex items-center text-center gap-3'>
                                        <h1 className='underline p-2 rounded-lg font-bold'>
                                            {user?.displayName}
                                        </h1>
                                        <p className='self-center'><img className='w-3/6 h-[40px] rounded-full ' src={user?.photoURL} alt="" /></p>


                                    </div>
                                }

                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}

                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li> <NavLink to={"/"} >Home</NavLink> </li>
                        <li> <NavLink to={"/surveys"} >All surveys</NavLink> </li>
                        <li> <NavLink to={"/create_survey"} >create survey</NavLink> </li>
                        <li> <NavLink to={"/dashboard/allusers"} >dashboard</NavLink> </li>
                        {
                            user ? <button onClick={handleSignOut} className='btn btn-ghost mt-2 underline'> sign out</button> :

                                // <NavLink to={"/Login"}> <button className='btn'> Log in</button></NavLink>
                                <NavLink to={"/Login"}><button className='btn btn-ghost underline'> Log in</button></NavLink>


                        }
                        <li> <NavLink to={"/register"} >register</NavLink> </li>
                        <button className='btn btn-ghost underline' onClick={handleGoole}>Sign in with google</button>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;