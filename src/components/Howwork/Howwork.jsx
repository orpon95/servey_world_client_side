import React from 'react';

const Howwork = () => {
    return (
        <div className='my-8'>
            <h1 className='text-4xl font-bold my-8 text-center'>How it works</h1>
            <div className="hero p-6 shadow-2xl shadow-black ">
                <div className="   hero-content gap-16   flex-col lg:flex-row">
                    <img src="https://i.ibb.co/x1kT1k7/african-woman-filling-survey-poll-260nw-1953455263.webp" className="w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl text-center md:text-5xl font-bold color-changing-text">How it woks!!!</h1>
                        <p className="py-6 text-center text-black text-lg">At <span className='text-blue-500 font-bold'>Survey world</span>, we aim to provide users with a
                            seamless and intuitive experience, ensuring that their opinions are effortlessly captured
                            and analyzed. To begin, users can easily create an account or log in to their existing one,
                            granting them access to a diverse range of surveys tailored to their interests. Our platform
                            employs user-friendly interfaces, allowing participants to navigate through surveys with ease.
                            Upon completion, respondents can view insightful summaries of their contributions, fostering
                            transparency in the data collection process. </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Howwork;