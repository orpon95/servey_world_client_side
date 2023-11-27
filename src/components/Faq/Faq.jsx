import React from 'react';

const FAQ = () => {
    return (
        <div className='space-y-6 shadow-lg shadow-black'>
            <h1 className='text-4xl font-bold my-8 text-center'>Frequently asked question</h1>

            {/* question1  */}
            <div className="collapse shadow-lg shadow-black ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title shadow-lg shadow-black text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Q: How can I participate in surveys? [Click to see your answer]
                </div>
                <div className="collapse-content shadow-lg shadow-black text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>To participate in surveys, simply log in to your account, browse the available surveys, and choose the ones that match your interests and eligibility. Click on the survey links to get started.</p>
                </div>
            </div>
            {/* question2  */}
            <div className="collapse shadow-lg shadow-black ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title shadow-lg shadow-black text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Q: Is my personal information kept confidential? [Click to see your answer]
                </div>
                <div className="collapse-content shadow-lg shadow-black text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Yes, we prioritize the security and confidentiality of your personal information. Your data is encrypted, and we do not share individual responses with third parties.</p>
                </div>
            </div>
            {/* question3  */}
            <div className="collapse shadow-lg shadow-black ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title shadow-lg shadow-black text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Q: How often are new surveys added? [Click to see your answer]
                </div>
                <div className="collapse-content shadow-lg shadow-black text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>We regularly update our survey inventory. New surveys are added daily, providing you with frequent opportunities to participate.</p>
                </div>
            </div>

        </div>
    );
};

export default FAQ;