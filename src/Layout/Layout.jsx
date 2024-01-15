import React from 'react';
import Nav from '../component/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';

const Layout = () => {
    return (
        <div className='max-w-[1366px] mx-auto'>
            <Nav></Nav>
             <Outlet></Outlet>
             <Footer/>
        </div>
    );
};

export default Layout;