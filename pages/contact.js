import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/ContactUs/ContactInfo';
import ContactForm from '../components/ContactUs/ContactForm';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="تماس با ما"  
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="تماس با ما" 
                imgClass="bg-1" 
            />  
            <ContactInfo />

            <ContactForm />

            <Subscribe />
            
            <Footer /> 
        </>
    )
}

export default Contact;