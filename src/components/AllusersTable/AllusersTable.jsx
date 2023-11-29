/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAdmin from '../Hooks/useAdmin';
import usePro from '../Hooks/usePro';
import useSurveyor from '../Hooks/useSurveyor';

const AllusersTable = ({ data, index, refetch }) => {
    const { name, email, _id, role } = data
    const axiosSecure = useAxiosSecure()
    const [adminstate, setadminstate] = useState(false)
    const [isAdmin] = useAdmin()
    const [isPro]= usePro()
    const [isSurveyor]=useSurveyor()

    // const admincheck = data.



    // for delete users
    const handleremove = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
                axiosSecure.delete(`/v1/users/${id}`)

                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()


                        }
                    })

            }
        })

    }

    // for making admimn
    const handleAdmin = (id) => {
        const makeAdmin = { role: "admin" }
        axiosSecure.patch(`/v1/usersRole/${id}`, makeAdmin)
            .then(res => {
                if (res?.data?.modifiedCount > 0) {

                    Swal.fire({
                        title: 'success!',
                        text: 'product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    setadminstate(true)
                    refetch();

                }
                else {
                    Swal.fire({
                        title: 'error!',
                        text: 'something wrong ,pls try again',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })


                }
            })

    }
    // for making surveuo
    const handleSurveeyor = (id) => {
        const makeSurveyor = { role: "surveyor" }
        axiosSecure.patch(`/v1/usersRole/${id}`, makeSurveyor)
            .then(res => {
                if (res?.data?.modifiedCount > 0) {

                    Swal.fire({
                        title: 'success!',
                        text: 'product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    setadminstate(true)
                    refetch();

                }
                else {
                    Swal.fire({
                        title: 'error!',
                        text: 'something wrong ,pls try again',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })


                }
            })

    }


    return (
        <>
            <tr className=' text-red-600 font-extrabold'>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td> {email} </td>
                <td>
                    {
                        role === "admin" ?
                            <>
                                <button disabled className='btn bg-primary text-red-600'>  admin</button>

                            </>
                            :
                            <>
                                <button onClick={() => handleAdmin(_id)} className='btn bg-cyan-300 opacity-70'> Make admin</button>
                            </>
                    }


                </td>
                <td>
                    {
                        role === "surveyor" ?

                            <>
                                <button disabled className='btn bg-primary text-red-600'>  surveyor</button>

                            </>

                            :
                            <>
                                <button onClick={() => handleSurveeyor(_id)} className='btn bg-cyan-300 opacity-70'> Make surveyor</button>


                            </>
                    }

                </td>
                <td>
                   {
                    role === "Pro_user" ?
                     <>
                       <p>pro users</p>

                     </> 
                     : 
                     <>
                     <p>pending</p>
                     </>
                   }
                </td>
                {/* role */}

                <td>  
                    {
                        role == "admin" ? <> admin</> : role == "surveyor" ? <>surveyor</> : role == "Pro_user" ? <>pro_user</> : "user"


                    }


                </td>



                <td><button onClick={() => handleremove(_id)} className='btn bg-cyan-300 opacity-70'> remove</button></td>
            </tr>
        </>
    );
};

export default AllusersTable;