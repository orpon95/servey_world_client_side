import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AllusersTable from '../AllusersTable/AllusersTable';

const Allusers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isLoading, isFetching, refetch } = useQuery({
        queryKey: ["allusersinf"],
        queryFn: async () => {
            const res = await axiosSecure.get("/v1/users")

            return await res.data
        }


    })




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>make admin</th>
                            <th>make Surveyor</th>
                            <th>make proAdmin</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user,index) => <AllusersTable key={user._id} data={user} refetch={refetch} index={index} ></AllusersTable> )
                        }
                        


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Allusers;