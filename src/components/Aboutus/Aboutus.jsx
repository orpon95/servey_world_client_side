import React from 'react';

const Aboutus = () => {
    return (
        <div>
            <h1 className='text-center block text-3xl font-extrabold my-8 border-b-2 border-pink-400 '>About us </h1>

            <div className='flex  justify-center gap-9 my-14 text-white '>

                {/* about us */}



                <div className="card  shadow-xl border-2 border-r-cyan-400">
                    <div className="card-body">

                        <p className='text-center text-xl italic'>Welcome to our dynamic polling and survey platform, where your opinions shape the future! At [Survey world], we believe in the power of collective insights to drive meaningful change. Whether you're a business seeking valuable customer feedback, a researcher exploring trends, or an organization looking to gauge public opinion, our user-friendly polling and survey tools empower you to gather and analyze data with ease. Engage your audience, make informed decisions, and uncover valuable perspectives through our customizable and intuitive survey features.</p>

                    </div>
                </div>
                {/* who we are */}

                <div  className="card  shadow-xl border-2 border-r-cyan-400">
                    <div className="card-body">
                        <h2 className="card-title text-center mx-auto">Who we are</h2>
                        <p className='text-center'>We are more than just a platform; we are a community of changemakers, united by the belief that informed decisions lead to impactful outcomes. As we celebrate our first year anniversary, we remain committed to pushing the boundaries of possibility and fostering a culture of inclusivity and collaboration. </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Aboutus;