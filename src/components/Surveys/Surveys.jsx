import React, { useState } from 'react';
import useAxiospublic from '../Hooks/useAxiospublic';
import SurveysCard from './SurveysCard';
import { useQuery } from '@tanstack/react-query';

const Surveys = () => {
    // const [surveysData, setsurveysData] = useState([])

    const axiosPublic = useAxiospublic()

    // axiosPublic.get("/v1/allSurveys")
    // .then(res=> {
    //     console.log("all surveys",res.data)
    //     setsurveysData(res.data)
    // })

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
                    surveysData?.map(data => <SurveysCard key={data._id} data={data} >  </SurveysCard>)
                }

            </div>


        </div>
    );
};

export default Surveys;