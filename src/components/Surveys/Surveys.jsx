import React, { useRef, useState } from 'react';
import useAxiospublic from '../Hooks/useAxiospublic';

import { useQuery } from '@tanstack/react-query';
import Suerveyscard2 from './Suerveyscard2';

const Surveys = () => {
    const [catValue, setcatValue] = useState("")

    // const catRef = useRef()
    // console.log("ref",catRef.current?.value);
    const handlecat = (e) => {
        e.preventDefault()
        // const form = e.taget
        const form = e.target
        const category = form?.category?.value;
        setcatValue(category)
    }


    const axiosPublic = useAxiospublic()


    const { data: surveysData = [], isLoading, isFetching, refetch } = useQuery({
        queryKey: ["allsurveys", catValue],
        queryFn: async () => {
            const res = await axiosPublic.get(`/v1/allSurveys?sort=${catValue}`)

            return await res.data
        }


    })
    return (
        <div>

            {
                isLoading ?

                    <>
                        <h1 className='text-3xl font-black text-center mt-7'>data is loading, pls wait</h1>
                        <span className="loading loading-spinner loading-lg mx-auto"></span>

                    </>



                    :

                    <>
                        <form onSubmit={handlecat} className='text-center my-7'>


                            {/* category */}
                            <div className='text-center'>
                                <label htmlFor="category" className='text-xl font-bold mx-3'>search by category</label>
                                <select
                                    className='border-2 bg-transparent shadow-2xl  border-cyan-300  p-3 flex-1'

                                    name="category"
                                    required


                                >
                                    <option value="Demographics">Demographics</option>
                                    <option value="lifeStyle">lifeStyle</option>
                                    <option value="Technology-Usage">Technology-Usage</option>
                                    <option value="work-education">work-education</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Social-media-usage">Social-media-usage</option>

                                </select><br />
                            </div>
                            <input type="submit" value="search" className='btn bg-cyan-300 my-6' />



                        </form>


                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>


                            {
                                surveysData?.map(data => <Suerveyscard2 key={data._id} data={data} isLoading={isLoading} ></Suerveyscard2>)
                            }
                            {/* {
    surveysData?.map(data => <SurveysCard key={data._id} data={data} >  </SurveysCard>)
} */}

                        </div>


                    </>


            }




        </div>
    );
};

export default Surveys;