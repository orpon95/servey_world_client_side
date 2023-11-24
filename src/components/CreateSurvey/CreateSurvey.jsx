import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CreateSurvey = () => {
    const axiosSecure =useAxiosSecure()
    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target
        const title = form?.title?.value;
        const short_description = form?.short_description?.value;
        const category = form?.category?.value;
        const options = 0;
        const like_dislike = 0 ;




        // console.log(image,name,brandName,type,price,short_description,rating_2);
        const createdSurvey = {
            title, category, short_description,options,like_dislike

        }
        console.log(createdSurvey);
        axiosSecure.post("/v1/surveys",createdSurvey)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    title: 'success!',
                    text: 'surveys added successfully',
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
            <form onSubmit={handleAdd} className=' p-5 shadow-2xl space-y-6 border-2 border-cyan-300 rounded-2xl w-[70%] mx-auto' action="">

                {/* title */}
                <div className='text-center'>
                    <label htmlFor="title" className='text-xl font-bold '>Title</label>
                    <input type="text" placeholder="Type survey title" required name='title' className=" flex-1 input input-bordered w-full max-w-xs mx-3 bg-transparent shadow-2xl border-2 border-cyan-300" /> <br />
                </div>
                {/* short des */}
                <div className='text-center'>
                    <label htmlFor="short_description" className='text-xl font-bold'>short description</label>
                    <input type="text" required placeholder="short description" name='short_description' className="border-2 bg-transparent shadow-2xl  border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />

                </div>
                {/*Options */}
                <div className='text-center'>
                    <label name='options' className=" cursor-pointer">
                        <span className="label-text text-xl font-bold mx-3" >yes</span>
                        <input name='options' type="radio" value={"yes"}  className="checkbox checkbox-primary" />
                        <span className="label-text text-xl font-bold mx-3">no</span>
                        <input name='options' type="radio" value={"no"}   className="checkbox checkbox-primary" />
                    </label>

                </div>
                {/*like dislike */}
                <div className='text-center'>
                    <label name='options' className=" cursor-pointer">
                        <span className="label-text text-xl font-bold mx-3" >like</span>
                        <input name='like_dislike' type="radio" value={"like"}  className="checkbox checkbox-primary" />
                        <span className="label-text text-xl font-bold mx-3">dislike</span>
                        <input name='like_dislike' type="radio" value={"dislike"}   className="checkbox checkbox-primary" />
                    </label>

                </div>

                {/* category */}
                <div className='text-center'>
                    <label htmlFor="category" className='text-xl font-bold mx-3'>category</label>
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








                <div className='text-center'>
                    <button type='submit' className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  > create Survey </button>
                </div>

            </form>

        </div>
    );
};

export default CreateSurvey;