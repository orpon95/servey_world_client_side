/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { authContext } from '../../Authprovider/Authprovider';
import useSurveyor from '../Hooks/useSurveyor';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateSurveyor = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const [isSurveyor, isSurveyorLoading] = useSurveyor()
    const location = useLocation()
    if (user && isSurveyor) {
        return children
    }
    if (loading || isSurveyorLoading) {
        return <span className="loading loading-spinner loading-lg mx-auto"></span>
    }
    // return <Navigate state={location.pathname} to={"/Login"} ></Navigate>
    return <Navigate state={location.pathname} to={"/login"}  ></Navigate>
};

export default PrivateSurveyor;