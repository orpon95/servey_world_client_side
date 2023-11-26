import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RpSg575/istockphoto-1472468738-170667a.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">welcome to survey world</h1>
                        <p className="mb-5">"Welcome to our survey and polling platform, where your opinion matters! We believe in the power of collective insights, and your voice can shape the future. Explore a diverse range of polls on topics that resonate with you, from current events to lifestyle preferences. </p>
                        <button className="btn btn-primary">Explore more</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;