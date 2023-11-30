/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const colors2 = ['green', 'red', '#FFBB28', '#FF8042', 'orange', 'black'];


const DashboardsurveyinfoCard = ({ data, refetch, index, likedatapercentagae, dislikedatapercentagae, yesPercantage, noParcantage }) => {
    const [areaValue, setAreaValue] = useState("")
    const [areaenable, setareaenable] = useState(false)
    const axiosSecure = useAxiosSecure()
    console.log("area", areaValue);
    const areRef = useRef()
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


    // chart data
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



    const { title, category, short_description, _id, timestamp, usersid, like, yesNo } = data


    // for making unpublish
    // for making unpublish
    const handleUnpublish = () => {
        setareaenable(true)


    }


    const handleArea = (id) => {
        // e.preventDefault()
        // const form = e.target
        // const area = form.area?.value
        const arearefValue = areRef.current.value
        console.log("arearefValue",arearefValue);

        // setAreaValue(area)


        const makeunPublish = {
            status: "unpublish",
            feedback: arearefValue

        }
        axiosSecure.patch(`/v1/unpublishSurvey/${id}`, makeunPublish)
            .then(res => {
                console.log("patch",res.data);
                if (res?.data?.modifiedCount > 0) {

                    Swal.fire({
                        title: 'success!',
                        text: 'unpublished successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    // setadminstate(true)
                    refetch();

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
        <>
            <tr>
                <th>{index + 1}</th>
                <td className='border-2  text-center border-black'>{title}</td>
                <td className='border-2 text-center border-black'> {category} </td>
                <td className='border-2 text-center border-black'> {short_description} </td>
                <td className='border-2 text-center border-black'>

                    {/* like chart start */}
                    < >
                        <BarChart
                            width={200}
                            height={150}
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




                    </>

                    {/* like chart end */}


                </td>
                <td className='border-2 text-center border-black'>
                    {/* yesnochart start */}
                    <>
                        <BarChart
                            className='w-[100px]'
                            width={200}
                            height={150}
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




                    </>
                    {/* yesnochart end */}


                </td>
                {/* time div */}
                <td className='border-2  text-center border-black'>{timestamp}</td>
                <td>
                    {/* onClick={() => handleUnpublish(_id)} */}

                    <button onClick={handleUnpublish} className='btn bg-primary'> Unpublish</button>
                    < >

                        {
                            areaenable ?
                                <>
                                    <textarea ref={areRef} name='area' className="textarea textarea-bordered" placeholder="send your feedback"></textarea>
                                    <button onClick={()=>handleArea(usersid)} type='submit' className='btn btn-primary  ' > send</button>

                                </> :
                                <>
                                    <textarea disabled name='area' className="textarea textarea-bordered" placeholder="send your feedback"></textarea>
                                    <button disabled type='submit' className='btn btn-primary  ' > send</button>

                                </>
                        }




                    </>

                </td>

            </tr>
        </>

    );
};

export default DashboardsurveyinfoCard;