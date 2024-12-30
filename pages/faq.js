import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Faqs from '../components/Common/Faqs';
import ContactForm from '../components/ContactUs/ContactForm';

const Faq = () => {
    return (
        <>
            <Navbar style={{fontSize:'Digikala'}}/>

            <PageBanner 
                pageTitle="پرسش های متداول" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="پرسش های متداول" 
                imgClass="bg-2" 
                style={{fontSize:'Digikala'}}
            />

            <Faqs style={{fontSize:'Digikala'}}/>

            <ContactForm style={{fontSize:'Digikala'}}/>

            <Subscribe style={{fontSize:'Digikala'}}/>
            
            <Footer style={{fontSize:'Digikala'}}/> 
        </>
    )
}

export default Faq;