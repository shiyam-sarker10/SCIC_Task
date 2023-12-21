import React from 'react';
import Nav from '../component/Nav/Nav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='max-w-[1366px] mx-auto'>
            <Nav></Nav>
             <Outlet></Outlet>
        </div>
    );
};

export default Layout;