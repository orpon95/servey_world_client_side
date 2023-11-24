import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useAxiospublic from '../Hooks/useAxiospublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Details = () => {
    const axiosSecure = useAxiosSecure()
    // const [surveysData,setsurveysData] = useState([])
    const [yesNo, setYesNo] = useState("")
    const [like, setlike] = useState("")
    const [areaValue, setAreaValue] = useState("")
    const { id } = useParams()
    const { data } = useLoaderData()
    // console.log("data", data);
    // const axiosSecure = useAxiosSecure()
    // const { data: surveysData, isLoading, isFetching, refetch } = useQuery({
    //     queryKey: ["alldetials"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/v1/allSurveys")


    //         return await res?.data
    //     }


    // })



    const singleseurveyData = data?.find(data => data?._id === id)
    // console.log("singleseurveyData", singleseurveyData);
    const { title, category, short_description, _id } = singleseurveyData

    // const handleSurvey = (e) => {
    //     e.preventDafault()
    //     // const form = e.target
    //     const title = form?.title?.value;
    //     // const like_dislike = form?.like_dislike?.value;
    //     // const text_area = form?.text_area?.value;
    //     // const survey = {
    //     //     options, like_dislike,text_area
    //     // }
    //     console.log("survey",);

    // }

    const handleYesNo = (e) => {
        // console.log(e.target.value);
        setYesNo(e.target.value)


    }
    const handlelikeDislike = (e) => {
        // console.log(e.target.value);
        setlike(e.target.value)



    }
    console.log(yesNo, like);
    const handletextArea = (e) => {
        setAreaValue(e.target.value)

    }
    const buttonClick = () => {
        console.log(areaValue);
        const usersSurveyInfo = {
            like,
            yesNo,
            areaValue,
            usersid:_id
        }
        axiosSecure.post("/v1/usersSurveyInfo", usersSurveyInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'tour opinion accepted successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                else {
                    Swal.fire({
                        title: 'error!',
                        text: 'something wrong ,pls try again',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })


                }

            })

    }

    return (
        <div>


            {
                singleseurveyData ?

                    <div className="card  bg-base-100 shadow-xl">

                        <div className="card-body text-center">
                            <h2 className="card-title justify-center text-lg font-black">title: <span className='text-lg font-semibold'>{title}</span> </h2>
                            <p className='text-lg font-black'> category: <span className='text-lg font-semibold'  >{category}</span></p>
                            <p className='text-xl font-bold'>{short_description}</p>
                            {/* form start */}


                            {/*Options */}
                            <div className='text-center'>
                                <label name='options' className=" cursor-pointer">
                                    <span className="label-text text-xl font-bold mx-3" >yes</span>
                                    <input onChange={handleYesNo} name='options' type="radio" value={"yes"} className="checkbox checkbox-primary" />
                                    <span className="label-text text-xl font-bold mx-3">no</span>
                                    <input onChange={handleYesNo} name='options' type="radio" value={"no"} className="checkbox checkbox-primary" />
                                </label>

                            </div>

                            {/*like dislike */}
                            <div className='text-center'>
                                <label name='options' className=" cursor-pointer">
                                    <span className="label-text text-xl font-bold mx-3" >like</span>
                                    <input onChange={handlelikeDislike} name='like_dislike' type="radio" value={"like"} className="checkbox checkbox-primary" />
                                    <span className="label-text text-xl font-bold mx-3">dislike</span>
                                    <input onChange={handlelikeDislike} name='like_dislike' type="radio" value={"dislike"} className="checkbox checkbox-primary" />
                                </label>

                            </div>
                            {/*like dislike */}
                            <div className='text-center'>
                                <label className=" cursor-pointer">
                                    <span className="label-text text-xl font-bold mx-3" >add comments</span>
                                    <textarea onChange={handletextArea} className="textarea textarea-primary" placeholder="Bio"></textarea>
                                </label>

                            </div>

                            {/* button submit */}
                            <div className='text-center'>
                                <button type='submit' onClick={buttonClick} className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  > click to send your vote </button>
                            </div>

                            {/* form end */}

                        </div>
                    </div>
                    : <p>loadibg</p>
            }






        </div>
    );
};

export default Details;