import React, { useState } from 'react';
import useAxiospublic from '../Hooks/useAxiospublic';

import { useQuery } from '@tanstack/react-query';
import Suerveyscard2 from './Suerveyscard2';

const Surveys = () => {
    

    const axiosPublic = useAxiospublic()


    const { data: surveysData = [], isLoading, isFetching, refetch } = useQuery({
        queryKey: ["allsurveys"],
        queryFn: async () => {
            const res = await axiosPublic.get("/v1/allSurveys")

            return await res.data
        }


    })
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    surveysData?.map(data => <Suerveyscard2 key={data._id} data={data} ></Suerveyscard2> )
                }
                {/* {
                    surveysData?.map(data => <SurveysCard key={data._id} data={data} >  </SurveysCard>)
                } */}

            </div>


        </div>
    );
};

export default Surveys;