import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../Authprovider/Authprovider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Paymenttable from './Paymenttable';

const PaymentHistory = () => {
    const { user } = useContext(authContext)

    const axiosSecure = useAxiosSecure()
    const { data: paymenInfo = [], isLoading, isFetching, refetch } = useQuery({
        queryKey: [user?.email,"paymentinfo"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/v2/paymentHistory/${user?.email}`
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
         {
            paymenInfo?.map(data => <Paymenttable key={data._id } data={data} > </Paymenttable> )
         }


        </div>
    );
};

export default PaymentHistory;