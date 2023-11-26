/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const AllusersTable = ({ data, index, refetch }) => {
    const { name, email, _id, role } = data
    const axiosSecure = useAxiosSecure()
    const [adminstate, setadminstate] = useState(false)
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
            <tr>
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
                                <button onClick={() => handleAdmin(_id)} className='btn bg-primary'> Make admin</button>
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
                                <button onClick={() => handleSurveeyor(_id)} className='btn bg-primary'> Make surveyor</button>


                            </>
                    }

                </td>
                <td> <button className='btn bg-primary'> make pro users</button> </td>
                <td><button onClick={() => handleremove(_id)} className='btn bg-primary'> remove</button></td>
            </tr>
        </>
    );
};

export default AllusersTable;