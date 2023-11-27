import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const axiosSecure = useAxiosSecure()
    const { id } = useParams()
    const [title, settitle] = useState(null)
    const [category, setcategory] = useState(null)
    const [short_description, setshort_description] = useState(null)
    const [_id, set_id] = useState(null)
    const [timestamp, settimestamp] = useState(null)
    const { data: updateDatas = [], isLoading, isFetching, refetch } = useQuery({
        queryKey: ["updateservey"],
        queryFn: async () => {
            const res = await axiosSecure.get("/v1/allSurveys"
                // ,{
                //     headers:{
                //         Authorization:`bearer ${localStorage.getItem("access_token")}`
                //     }
                // }
            )

            return await res.data
        }


    })

    const singleUpdatedData = updateDatas?.find(data => data._id = id)
    console.log("singleUpdatedData", singleUpdatedData);
    console.log("updateDatas", updateDatas);


    // useeffeect
    useEffect(() => {
        if (singleUpdatedData) {
            const { title, category, short_description, _id, timestamp } = singleUpdatedData
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


    }, [singleUpdatedData])

    // usedffect end

    // console.log("find dta",title,category,short_description);
    // handle update
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target
        const title = form?.title?.value;
        const category = form?.category?.value;
        const timestamp = new Date()

        const short_description = form?.short_description?.value;


        // console.log(image,name,brandName,type,price,short_description,rating_2);
        const updatedProduct = {
            title, category, timestamp, short_description,
        }
        console.log("updatedProduct", updatedProduct);
        axiosSecure.put(`/api/v1/surveyUpdate/${_id}`, updatedProduct)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'product updated successfully',
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
            <div className='my-11'>
                <form onSubmit={handleUpdate} className='p-5 shadow-2xl space-y-6 border-2 border-cyan-300 rounded-2xl w-[70%] mx-auto' action="">

                    {/* title */}
                    <div className='text-center'>
                        <label htmlFor="image" className='text-xl font-bold '>title</label>
                        <input type="text" defaultValue={title} placeholder="type new title" required name='title' className=" flex-1 input input-bordered w-full max-w-xs mx-3 bg-transparent shadow-2xl border-2 border-cyan-300" /> <br />
                    </div>
                    {/* category */}
                    <div className='text-center'>
                        <label htmlFor="category" className='text-xl font-bold mx-3'>category</label>
                        <select
                            className='border-2 bg-transparent shadow-2xl  border-cyan-300  p-3 flex-1'

                            name="category"
                            required
                            defaultValue={category}


                        >
                            <option value="Demographics">Demographics</option>
                            <option value="lifeStyle">lifeStyle</option>
                            <option value="Technology-Usage">Technology-Usage</option>
                            <option value="work-education">work-education</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Social-media-usage">Social-media-usage</option>

                        </select><br />
                    </div>



                    {/* short des */}
                    <div className='text-center'>
                        <label htmlFor="short description" className='text-xl font-bold '>short description</label>
                        <input type="text" defaultValue={short_description} required placeholder="short description" name='short_description' className="flex-1 input input-bordered w-full max-w-xs mx-3 bg-transparent shadow-2xl border-2 border-cyan-300" /> <br />

                    </div>




                    <div className='text-center'>
                        <button type='submit' className='btn btn-ghost text-center border-2 border-cyan-300 '  > Update </button>
                    </div>

                </form>

            </div>
        </div>
        // <div> update</div>
    );
};

export default Update;