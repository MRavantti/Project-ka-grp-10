import React from 'react';
import Navbar from '../Navbar';
import CoursesBox from '../CoursesBox';
import Footer from '../Footer';

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>
            {children}
            <CoursesBox/>
            <Footer/>
        </div>
    );
};

export default Layout;