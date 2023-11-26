import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../Authprovider/Authprovider';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user} = useContext(authContext)
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin = [], isLoading, isFetching,isPending : isAdminLoading, refetch } = useQuery({
        queryKey: [ user?.email , "isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/v1/users/admin/${user.email}`)
               
            

            return await res.data?.admin
        }


    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;