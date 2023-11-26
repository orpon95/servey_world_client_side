import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <footer className=" my-5 shadow-2xl shadow-black footer p-10  text-neutral-content">
                <nav className='flex justify-center items-center'>
                    <span className='w-[50px] h-[50px] rounded-full'><img className='w-full rounded-[50%]' src="https://i.ibb.co/PjDkYcs/png-transparent-career-development-job-application-for-employment-business-career-miscellaneous-trad.png" alt="" /></span>
                    <span className='mx-2 font-poppins font-bold text-3xl text-black  italic'>Job city</span>
                </nav>
                <nav>
                    <header className=" text-black footer-title">contact information</header>
                    <a className="text-black link link-hover">sayedabad,80\c,dhaka</a>
                    <a className=" text-black link link-hover">call:02154545</a>
                    <a className=" link link-hover text-red-700">email:job-city@gmail.com</a>
                    {/* <a className="link link-hover">Advertisement</a> */}
                </nav>
                <nav>
                    <header className="text-black footer-title">social media links</header>
                    <a className="text-black link link-hover   underline">facebook</a>
                    <a className="text-black link link-hover underline ">twiter</a>
                    <a className="text-black link link-hover underline ">instagram</a>
                    {/* <a className="link link-hover">Press kit</a> */}
                </nav>
                <nav>
                    <header className="text-black footer-title">Legal</header>
                    <a className="text-black link link-hover">Terms of use</a>
                    <a className="text-black link link-hover">Privacy policy</a>
                    <a className="text-black link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;