import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import OurWorks from '../components/HomeOne/OurWorks';

const certificates = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="مجوزها و گواهینامه ها" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="مجوزها و گواهینامه ها"
                imgClass="bg-1" 
            />  
            
            <OurWorks />

            <Subscribe />
            
            <Footer /> 
        </>
    )
}

export default certificates;