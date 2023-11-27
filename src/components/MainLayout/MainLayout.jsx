import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./MainLayout.css"

const MainLayout = () => {
    return (
        <div className='w-[80%] mx-auto py-6 dark-theme'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;