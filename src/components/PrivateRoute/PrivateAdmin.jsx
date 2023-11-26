/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { authContext } from '../../Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAdmin = ({children}) => {
    const { user, loading } = useContext(authContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if (user && isAdmin) {
        return children
    }
    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg mx-auto"></span>
    }
    // return <Navigate state={location.pathname} to={"/Login"} ></Navigate>
    return <Navigate state={location.pathname} to={"/Login"}  ></Navigate>
};

export default PrivateAdmin;