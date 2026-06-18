import React from 'react';
import{ Outlet } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './Footer/Footer';



function Layout(){
    return(
        <>
        <div>Layout</div>
        <Header/>
        <Footer/>




        </>
    )
}

export default Layout;