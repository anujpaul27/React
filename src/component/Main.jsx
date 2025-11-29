import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Book from './Book';
import Footer from './Footer';

const Main = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer> </Footer>
        </div>
    );
};

export default Main;