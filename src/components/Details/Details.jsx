import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useAxiospublic from '../Hooks/useAxiospublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const colors2 = ['green', 'red', '#FFBB28', '#FF8042', 'orange', 'black'];

const Details = () => {
    const axiosSecure = useAxiosSecure()
    // const [surveysData,setsurveysData] = useState([])
    const [yesNo, setYesNo] = useState("")
    const [like, setlike] = useState("")
    const [areaValue, setAreaValue] = useState("")
    const [usersSurveyData, setusersSurveyData] = useState([])
    console.log("usersSurveyData", usersSurveyData);
    const { id } = useParams()
    const { data } = useLoaderData()
    const [confirm, setConfirm] = useState(false)
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




    // get all datr using tanstwsed query
    const { data: allData, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["addedData"],
        queryFn: async () => {
            const res = await axiosSecure.get("/v1/usersSurveyInfo")
            return await res.data
        }


    })

    useEffect(() => {
        setusersSurveyData(allData)
        console.log("allData", allData);

    }, [allData])





    // get all users surveydata

    // useEffect(() => {
    //     axiosSecure.get("/v1/usersSurveyInfo")
    //         .then(res => {
    //             setusersSurveyData(res.data)

    //         })

    // }, [])

    const likeData = usersSurveyData?.filter(data => data.like === "like")
    console.log("like", likeData?.length);
    const dislikeData = usersSurveyData?.filter(data => data.like === "dislike")
    console.log("dislikeData", dislikeData?.length);
    const yesData = usersSurveyData?.filter(data => data.yesNo === "yes")
    console.log("yesData", yesData?.length);
    const noData = usersSurveyData?.filter(data => data.yesNo === "no")
    console.log("noData", noData?.length);


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
            usersid: _id
        }
        axiosSecure.post("/v1/usersSurveyInfo", usersSurveyInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'your opinion accepted successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    refetch()
                    setConfirm(true)
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



    // chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    const pieChartData = [
        {
            name: 'like',
            uv: likedatapercentagae,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'dislike',
            uv: dislikedatapercentagae,
            pv: 1398,
            amt: 2210,
        },]
    const pieChartData2 = [
        {
            name: 'yes',
            uv: yesPercantage,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'no',
            uv: noParcantage,
            pv: 1398,
            amt: 2210,
        },]




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

                            {/* yes no chart */}
                            {
                                confirm &&
                                <div>
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={pieChartData2}
                                        margin={{
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                            {pieChartData2?.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={colors2[index % 20]} />
                                            ))}
                                        </Bar>
                                    </BarChart>




                                </div>
                            }


                            {/*comments */}
                            <div className='text-center'>
                                <label className=" cursor-pointer">
                                    <span className="label-text text-xl font-bold mx-3" >add comments</span>
                                    <textarea onChange={handletextArea} className="textarea textarea-primary" placeholder="Bio"></textarea>
                                </label>

                            </div>

                            <h1 className='text-lg font-bold'>was this survey helpful?</h1>
                            {/*like dislike */}
                            <div className='text-center'>
                                <label name='options' className=" cursor-pointer">
                                    <span className="label-text text-xl font-bold mx-3" >like</span>
                                    <input onChange={handlelikeDislike} name='like_dislike' type="radio" value={"like"} className="checkbox checkbox-primary" />
                                    <span className="label-text text-xl font-bold mx-3">dislike</span>
                                    <input onChange={handlelikeDislike} name='like_dislike' type="radio" value={"dislike"} className="checkbox checkbox-primary" />
                                </label>

                            </div>

                            {/* chart */}
                            {
                                confirm &&
                                <div>
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={pieChartData}
                                        margin={{
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                            {pieChartData?.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                            ))}
                                        </Bar>
                                    </BarChart>




                                </div>
                            }

                            {/* button submit */}
                            <div className='text-center'>
                                <button type='submit' onClick={buttonClick} className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  > click to send your vote </button>
                            </div>

                            {/* form end */}

                        </div>
                    </div>
                    : <p>loadibg</p>
            }
            {/* char div */}










        </div>
    );
};

export default Details;