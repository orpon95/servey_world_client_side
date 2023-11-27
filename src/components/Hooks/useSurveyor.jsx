import React, { useContext } from 'react';
import { authContext } from '../../Authprovider/Authprovider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSurveyor = () => {
    const { user } = useContext(authContext)
    const axiosSecure = useAxiosSecure()
    const { data: isSurveyor = [], isLoading, isFetching, isPending: isSurveyorLoading, refetch } = useQuery({
        queryKey: [user?.email, "isSurveyor"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/v1/users/surveyor/${user.email}`)



            return await res.data?.surveyor
        }


    })
    return [isSurveyor, isSurveyorLoading]
};

export default useSurveyor;