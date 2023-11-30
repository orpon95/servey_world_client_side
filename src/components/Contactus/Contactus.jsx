import React from 'react';

const Contactus = () => {
    return (
        <div>
            <h2 className='text-3xl  text-center border-b-4 border-pink-400 my-4'>contact details</h2>

            <div className='flex flex-wrap justify-between my-4 ' >

                <div  className='shadow-xl p-5 rounded-lg text-white '><h1 className='text-xl font-bold'>phone:</h1>
                    <h3>+0218878455</h3>
                    <h3>+6465874456</h3>

                </div>
                <div  className='shadow-xl p-5 rounded-lg text-white '><h1 className='text-xl font-bold'>address</h1>
                    <h2>sayedabad,1280/c <br />
                        Dhaka
                    </h2>

                </div>
                <div  className='shadow-xl p-5 rounded-lg'><h2 className='text-xl font-bold'>
                    email:

                </h2>
                    <h3 className='underline text-red-400'>support@gmail.com</h3>
                    <h3 className='underline text-red-400'>surveyworld@gmailcom</h3>

                </div>
            </div>
        </div>
    );
};

export default Contactus;