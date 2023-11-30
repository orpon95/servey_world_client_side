import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./MainLayout.css"

const MainLayout = () => {
    return (
        <div className='dark-theme'>
            <div className='w-[80%] mx-auto py-6 '>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default MainLayout;