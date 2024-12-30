import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import OurWorks from '../components/HomeOne/OurWorks';

const companions = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="همراهان تامین مالی سگال" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="همراهان تامین مالی سگال" 
                imgClass="bg-1" 
            />  

           

           

           

            <OurWorks />

            <Subscribe />
            
            <Footer /> 
        </>
    )
}

export default companions;