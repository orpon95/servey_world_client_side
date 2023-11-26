import axios from 'axios';
import { config } from 'localforage';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem("access_token")
        console.log("req stope intesresdc", token);
        config.headers.authorization = `bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error);
    })
    
    return axiosSecure;
};

export default useAxiosSecure;