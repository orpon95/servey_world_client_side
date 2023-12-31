import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useAxiospublic from '../Hooks/useAxiospublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { authContext } from '../../Authprovider/Authprovider';
import usePro from '../Hooks/usePro';
import useSurveyor from '../Hooks/useSurveyor';
import useAdmin from '../Hooks/useAdmin';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const colors2 = ['green', 'red', '#FFBB28', '#FF8042', 'orange', 'black'];

const Details = () => {
    const axiosSecure = useAxiosSecure()
    const axiospublic = useAxiospublic()
    const [isPro, isProLoading] = usePro()
    const { user } = useContext(authContext)
    // const [surveysData,setsurveysData] = useState([])
    const [title, settitle] = useState(null)
    const [category, setcategory] = useState(null)
    const [short_description, setshort_description] = useState(null)
    const [_id, set_id] = useState(null)
    const [timestamp, settimestamp] = useState(null)
    const [yesNo, setYesNo] = useState("")
    const [like, setlike] = useState("")
    const [areaValue, setAreaValue] = useState("")
    const [feedbackValue, setfeedbackValue] = useState("")
    console.log("fedd", feedbackValue);
    const [usersSurveyData, setusersSurveyData] = useState([])
    const [details, setdetails] = useState([])
    console.log("detailsstae", details);
    console.log("usersSurveyData", usersSurveyData);
    const { id } = useParams()
    // const { data } = useLoaderData()
    const [confirm, setConfirm] = useState(false)
    const [isSurveyor] = useSurveyor()
    // const [isPro] = usePro()
    const [isAdmin] = useAdmin()
    // console.log("data", data);
    // const axiosSecure = useAxiosSecure()
    // const { data: surveysData, isLoading, isFetching, refetch } = useQuery({
    //     queryKey: ["alldetials"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/v1/allSurveys")


    //         return await res?.data
    //     }


    // })

    // console.log(data);
    // all users load start


    // all users load end




    // const { title, category, short_description, _id } = singleseurveyData

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


    // details data load part strt


    const { data: detailsData, } = useQuery({
        queryKey: ["details"],
        queryFn: async () => {
            const res = await axiospublic.get("/v1/allSurveys")
            return await res.data
        }


    })
    console.log("detailsData", detailsData);
    const singleseurveyData = detailsData?.find(data => data?._id === id)
    console.log("singleseurveyData", singleseurveyData);

    // old useeffect strt

    // useEffect(() => {
    //     setdetails(detailsData)
    //     console.log("detailsData", detailsData);

    // }, [detailsData])
    // old useffct end

    // neeffect strt
    // useeffeect
    useEffect(() => {
        if (singleseurveyData) {
            const { title, category, short_description, _id, timestamp } = singleseurveyData
            //    console.log(email);
            settitle(title)
            setcategory(category)
            setshort_description(short_description)
            set_id(_id)
            settimestamp(timestamp)

            //    setfindedData({email, categories, deadline, job_title, max_price, min_price, short_description, _id })
        }
        else {
            console.log("sry no data");
        }


    }, [singleseurveyData])
    // neweffct strt




    // details data load part end





    // get all datr using tanstwsed query
    const { data: allData, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["addedData"],
        queryFn: async () => {
            const res = await axiospublic.get("/v1/usersSurveyInfo")
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
    const handlefeedback = (e) => {
        setfeedbackValue(e.target.value)

    }

    const buttonClick = () => {
        console.log(areaValue);

        const timestamp = new Date()
        const usersSurveyInfo = {
            like,
            yesNo,
            areaValue,
            usersid: _id,
            title,
            category,
            short_description,
            feedbackValue,
            timestamp

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
                // singleseurveyData ?

                    <div className="card  shadow-black shadow-xl text-white">

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


                            {
                                isPro ?

                                    <>
                                        {/*comments */}
                                        <div className='text-center'>
                                            <label className=" flex flex-col cursor-pointer">
                                                <span className="label-text text-xl font-bold mx-3 text-black" >add comments</span>
                                                <textarea onChange={handletextArea} className="textarea text-black textarea-primary" placeholder="add comments"></textarea>
                                            </label>

                                        </div>

                                    </>
                                    :
                                    <>
                                        {/*comments */}
                                        <div className='text-center'>
                                            <label className=" flex flex-col cursor-pointer">
                                                <span className="label-text text-xl font-bold mx-3 text-black" >add comments</span>
                                                <textarea disabled className="textarea text-black textarea-primary" placeholder="add comments"></textarea>
                                            </label>

                                        </div>

                                    </>
                            }












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
                            {/*feddbach/report */}
                            <div className='text-center'>
                                <label className=" flex flex-col cursor-pointer">
                                    <span className="label-text text-xl font-bold mx-3" >add Your feedback</span>
                                    <textarea onChange={handlefeedback} className="textarea text-black textarea-primary" placeholder="write your feedback"></textarea>
                                </label>

                            </div>

                            {/* button submit */}

                            {
                                isAdmin ?

                                    <>
                                        <div className="card-actions justify-center">
                                            <Link to={"/novote"} > <button className="btn bg-cyan-300 opacity-70">click for send your vote</button></Link>
                                        </div>

                                    </>
                                    :
                                    isSurveyor
                                        ?
                                        <>
                                            <div className="card-actions justify-center">
                                                <Link to={"/novote"} > <button className="btn bg-cyan-300 opacity-70">click for send your vote</button></Link>
                                            </div>

                                        </>
                                        :
                                        <>
                                            <div className='text-center'>
                                                <button type='submit' onClick={buttonClick} className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  > click to send your vote </button>
                                            </div>

                                        </>
                            }






                            {/* form end */}


                        </div>
                    </div>
                    // : <p>loadibg</p>
            }
            {/* char div */}










        </div>
        // <div>dethh</div>
    );
};

export default Details;