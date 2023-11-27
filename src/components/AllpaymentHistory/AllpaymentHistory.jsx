import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { authContext } from '../../Authprovider/Authprovider';
import AllpaymentHisCard from './AllpaymentHisCard';

const AllpaymentHistory = () => {
    const { user } = useContext(authContext)

    const axiosSecure = useAxiosSecure()
    const { data: allpaymenInfo = [], isLoading, isFetching, refetch } = useQuery({
        queryKey: [user?.email, "allpaymentinfo"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/v2/allpaymentHistory/${user?.email}`
                // ,{
                //     headers:{
                //         Authorization:`bearer ${localStorage.getItem("access_token")}`
                //     }
                // }
            )

            return await res.data
        }



    })
    return (
        <div>
            {allpaymenInfo.length}

            <div className='grid grid-cols-1 lg:grid-cols-3  gap-4' >
                {
                    allpaymenInfo?.map(data => <AllpaymentHisCard key={data._id} data={data} ></AllpaymentHisCard>)
                }
            </div>
        </div>
    );
};

export default AllpaymentHistory;