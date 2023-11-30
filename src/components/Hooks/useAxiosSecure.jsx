import axios from 'axios';
import { config } from 'localforage';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Authprovider/Authprovider';
// import { authContext } from '../../Authprovider/Authprovider';

const axiosSecure = axios.create({
    baseURL: "https://survey-world-server.vercel.app"
})

const useAxiosSecure = () => {
    const nevigate = useNavigate()
    const {logOut} = useContext(authContext)
    // request interceptors
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem("access_token")
        console.log("req stope intesresdc", token);
        config.headers.authorization = `bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error);
    })

    // interceptors for response
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async (error)=>{
        
        const status = error.response.status
        console.log("status erros in interceptor",  status );
        if(status === 401 || status === 403){
             await logOut()
            nevigate("/login")

        }
        return Promise.reject(error)

    })
    
    return axiosSecure;
};

export default useAxiosSecure;