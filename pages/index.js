import React from 'react';
import Navbar from '../components/_App/Navbar';
// import MainBanner from '../components/HomeOne/MainBanner';
import MainBanner from '../components/HomeFive/MainBanner';
import Facilities from '../components/HomeOne/Facility';
import AboutUs from '../components/HomeOne/AboutUs';
import Faqs from '../components/Common/Faqs';
import DoctorsStyleOne from '../components/Common/DoctorsStyleOne';
import OurWorks from '../components/HomeOne/OurWorks';
import FunFactStyleOne from '../components/Common/FunFactStyleOne';
import AppointmentForm from '../components/HomeOne/AppointmentForm';
import EmergencyArea from '../components/HomeOne/EmergencyArea';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import NewsStyleOne from '../components/Common/NewsStyleOne';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import SearchForm from '../components/HomeFive/SearchForm';

const Index = () => {
    return (
        <div style={{fontFamily:'Digikala'}}>
            <Navbar style={{fontFamily:'Digikala'}}/>
            <MainBanner style={{fontFamily:'Digikala'}}/>
            {/* <SearchForm />
            <div class="first-facility-emergency pt-100 pb-70"><div class="container"><div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6"><div class="first-facility-item"><i class="flaticon-online-learning"></i><h3>هدایت</h3>
                <p>ارائه راهکارهای تخصصی</p></div></div><div class="col-lg-4 col-sm-6"><div class="first-facility-item"><i class="flaticon-care">
                    </i><h3>حمایت</h3><p>حفظ منافع ذینفعان</p></div></div><div class="col-lg-4 col-sm-6">
                <div class="first-facility-item"><i class="flaticon-support">
                    </i><h3>پشتیبانی</h3><p>تنوع در خدمات آنلاین</p></div></div></div></div></div> */}
            <AboutUs style={{fontFamily:'Digikala'}}/>
            <Faqs style={{fontFamily:'Digikala'}}/>
            <FunFactStyleOne style={{fontFamily:'Digikala'}}/>
            <Subscribe style={{fontFamily:'Digikala'}}/>
            <Footer style={{fontFamily:'Digikala'}}/> 
        </div>
    )
}

export default Index;