import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery, useQueryErrorResetBoundary } from '@tanstack/react-query';
import Surveysinfotable from './Surveysinfotable';
// import Surveysinfotable from './Surveysinfotable';

const SurveysInfo = () => {
    const axiosSecure = useAxiosSecure()
    const [usersSurveyData, setusersSurveyData] = useState([])
    console.log("usersSurveyData", usersSurveyData)
    // get all data of user seurvey info using tanstwsed query
    const { data: allData, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["addedData"],
        queryFn: async () => {
            const res = await axiosSecure.get("/v1/usersSurveyInfo")
            return await res.data
        }


    })
    // console.log("allData", allData);

    useEffect(() => {
        setusersSurveyData(allData)
        console.log("allData", allData);

    }, [allData])
    // about chart

    const likeData = usersSurveyData?.filter(data => data.like === "like")
    console.log("like", likeData?.length);
    const dislikeData = usersSurveyData?.filter(data => data.like === "dislike")
    console.log("dislikeData", dislikeData?.length);
    const yesData = usersSurveyData?.filter(data => data.yesNo === "yes")
    console.log("yesData", yesData?.length);
    const noData = usersSurveyData?.filter(data => data.yesNo === "no")
    console.log("noData", noData?.length);

    // percantage
    const totalDataLength = usersSurveyData?.length

    const likeDataLength = likeData?.length
    const dislikeDataLength = dislikeData?.length

    const yesDataLength = yesData?.length
    const noDataLength = noData?.length

    const likedatapercentagae = (likeDataLength * 100) / totalDataLength
    console.log("likedatapercentagae", likedatapercentagae);
    const dislikedatapercentagae = (100 - likedatapercentagae)
    const yesPercantage = (yesDataLength * 100) / totalDataLength
    const noParcantage = (100 - yesPercantage)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>title</th>
                            <th>category</th>
                            <th>Queastion asked</th>
                            <th>like-dislike chart</th>
                            <th>Yesno chart</th>
                            <th>created time</th>
                            <th>users feedback</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            usersSurveyData?.map((user, index) => <Surveysinfotable key={user._id}
                                data={user}
                                refetch={refetch}
                                index={index}
                                likedatapercentagae={likedatapercentagae}
                                dislikedatapercentagae={dislikedatapercentagae}
                                yesPercantage={yesPercantage}
                                noParcantage={noParcantage} ></Surveysinfotable>)
                        }
                        {/* {
                            usersSurveyData?.map((user, index) => <Surveysinfotable key={user._id}
                                data={user}
                                refetch={refetch}
                                index={index}
                                likedatapercentagae={likedatapercentagae}
                                dislikedatapercentagae={dislikedatapercentagae}
                                yesPercantage={yesPercantage}
                                noParcantage={noParcantage}

                            ></Surveysinfotable>)
                        } */}



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SurveysInfo;