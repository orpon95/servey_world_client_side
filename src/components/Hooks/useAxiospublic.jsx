import axios from 'axios';
import React from 'react';

const useAxiospublic = () => {
    const axiosPublic = axios.create({
        baseURL: "https://survey-world-server.vercel.app"
    })
    return axiosPublic
};

export default useAxiospublic;