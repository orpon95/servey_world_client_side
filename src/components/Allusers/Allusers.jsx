import React, { useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AllusersTable from '../AllusersTable/AllusersTable';

const Allusers = () => {
    const axiosSecure = useAxiosSecure()
    const [role, setrole] = useState("")
    const { data: users = [], isLoading, isFetching, refetch } = useQuery({
        queryKey: ["allusersinf", role],
        queryFn: async () => {
            const res = await axiosSecure.get(`/v1/users?sort=${role}`
                // ,{
                //     headers:{
                //         Authorization:`bearer ${localStorage.getItem("access_token")}`
                //     }
                // }
            )

            return await res.data
        }


    })

    const handleRole = (e) => {
        e.preventDefault()
        // const form = e.taget
        const form = e.target
        const role = form?.role?.value;
        setrole(role)
    }




    return (
        <div>

            {
                isLoading ? <>

                <h1 className='text-3xl font-black text-center mt-7'>data is loading, pls wait</h1>
                
                 <span className="loading loading-spinner loading-lg  mx-auto"></span></>

                    :

                    <>

                        <form onSubmit={handleRole} className='text-center my-7'>


                            {/* category */}
                            <div className='text-center'>
                                <label htmlFor="role" className='text-xl font-bold mx-3 text-white'>search by role</label>
                                <select
                                    className='border-2 bg-transparent shadow-2xl  border-cyan-300  p-3 flex-1'

                                    name="role"



                                >
                                    <option value="admin">admin</option>
                                    <option value="surveyor">surveyor</option>
                                    <option value="Pro_user">Pro_user</option>


                                </select><br />
                            </div>
                            <input type="submit" value="search" className='btn bg-cyan-300 my-6' />



                        </form>



                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead className=''>
                                    <tr  >
                                        <th className=' text-yellow-200 font-extrabold'></th>
                                        <th className=' text-yellow-200 font-extrabold'>Name</th>
                                        <th className=' text-yellow-200 font-extrabold'>email</th>
                                        <th className=' text-yellow-200 font-extrabold'>make admin</th>
                                        <th className=' text-yellow-200 font-extrabold'>make Surveyor</th>
                                        <th className=' text-yellow-200 font-extrabold'>pro users status</th>
                                        <th className=' text-yellow-200 font-extrabold'>Role</th>
                                        <th className=' text-yellow-200 font-extrabold'>delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        users?.map((user, index) => <AllusersTable key={user._id} data={user} refetch={refetch} index={index} ></AllusersTable>)
                                    }



                                </tbody>
                            </table>
                        </div>

                    </>

            }
            {/* form */}



        </div>
    );
};

export default Allusers;