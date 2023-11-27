import React, { useContext } from 'react';
import { authContext } from '../../Authprovider/Authprovider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePro = () => {
    const { user } = useContext(authContext)
    const axiosSecure = useAxiosSecure()
    const { data: isPro = [], isLoading, isFetching, isPending: isProLoading, refetch } = useQuery({
        queryKey: [user?.email, "ispro"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/v1/users/prouser/${user.email}`)



            return await res.data?.Pro_user
        }


    })
    return [isPro, isProLoading]
};

export default usePro;