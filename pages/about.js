import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer'; 
import DoctorsStyleOne from '../components/Common/DoctorsStyleOne';
import FunFactStyleOne from '../components/Common/FunFactStyleOne';

const About = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="معرفی سگال ونچرز" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="معرفی سگال ونچرز" 
                imgClass="bg-1" 
            /> 

            <div className="about-area about-page pb-130" style={{fontSize:'Digikala'}}>
                <div className="container">
                <div className="about-content" style={{fontFamily:'Digikala'}}>
                <h2 style={{fontFamily:'Digikala'}}>معرفی سگال ونچرز</h2>
                <strong style={{fontFamily:'Digikala',marginBottom:30}}>
                مشاوره مدیریت از جمله حوزه‌هایی است که طی سال‌های اخیر در ایران رونق چشمگیری را تجربه کرده است. این رشته به شکل رسمی در دنیا بیش از یک قرن سابقه دارد و تقریباً در تمام این مدت هم در حال رشد بوده است. اصطلاح مشاوره مدیریت مجموعه‌ی گسترده‌ای از فعالیت‌های مرتبط با کسب و کار را پوشش می‌دهد. امروزه بیشتر شرکتهای مشاوره مدیریت بخشی از فعالیت خود را به آماده کردن سازمان‌ها و کسب و کارها برای حضور بهتر و موثرتر در جهان جدید اختصاص داده‌اند؛ جهانی که بدون زیرساخت‌های دیجیتال و ابزارهای فناوری اطلاعات قابل تصور نیست.
مشاوره مدیریت بر روی حل مسائل مدیریتی سازمان، برای رسیدن به عملکردی بالاتر و همچنین تحقق اهداف استراتژیک آن تمرکز دارد. مشاوره مدیریت، برای حل مسائل پیچیده مدیریتی، گرفتن مهمترین تصمیمات، ایجاد ارزش، به حداکثر رساندن بهره‌وری و رشد، و همچنین بهبود عملکرد کسب و کار و ثبات و پایداری کسب و کار، به سازمان ها، کمک می‌کند. مشاوران مدیریت از دانش و مهارت‌های تخصصی خود برای ارائه مشاوره و انتقال تجربه عینی استفاده می‌کنند تا به سازمان‌ها کمک کنند که مهارت‌های مدیریتی خود را، که یا فاقد آن هستند و یا در آن ها به بلوغ لازم و کافی نرسیده اند، توسعه دهند.

                </strong>

                    <b></b>
                <strong style={{fontFamily:'Digikala',marginBottom:30}}>
            
سگال ونچرز با هدف خدمت‌رسانی به توسعه و پایداری صنایع بنا شده‌ است که با فراهم آوردن بستر مناسب به مدیران کمک می‌کند تا با اتخاذ تصمیمات کارآمد به ویژه در شرایط بحرانی، راندمان سازمان خود را ارتقا دهند. مجموعه ما در پی آن است تا با کمک دانش، تجربه و توانایی متخصصان خود، قدمی در راستای اعتلای صنعت ایران بردارد.

                </strong>
                    </div>
                    <div className="row align-items-center" style={{marginTop:30}}>
                       

                        <div className="col-lg-6">
                            <div className="about-content" style={{fontFamily:'Digikala'}}>
                                {/* <span className="top-title">درباره تامین مالی سگال</span> */}
                                <h2 style={{fontFamily:'Digikala'}}>خدمات ویژه سگال ونچرز</h2>
                                <strong style={{fontFamily:'Digikala'}}>سگال ونچرز در راستای توسعه کسب و کار متخصصان کشور امکانات ذیل را ارائه می نماید:</strong>
                                
                                <ul>
                                    <li style={{fontFamily:'Digikala'}}>
                                        <i className="flaticon-tick"></i>
                                       	مشاوره مدیریت دارایی
                                    </li>
                                    <li style={{fontFamily:'Digikala'}}>
                                        <i className="flaticon-tick"></i>
                                        	مشاوره سرمایه گذاری 
                                    </li>
                                    <li style={{fontFamily:'Digikala'}}>
                                        <i className="flaticon-tick"></i>
                                        	مشاوره تامین مالی
                                    </li>
                                    <li style={{fontFamily:'Digikala'}}>
                                        <i className="flaticon-tick"></i>
                                        	مشاوره اعتبار مالیاتی 
                                    </li>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-area two ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/img/about-two/about-two1.png" alt="Image" />

                                <div className="shape-1">
                                    <img src="/img/about-two/about-two-shape2.png" alt="Image" />
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-6">
                            <div className="about-content" style={{fontFamily:'Digikala'}}>
                                {/* <span className="top-title">About Corona</span> */}
                                <h2 style={{fontFamily:'Digikala'}}>امتیازات   سگال ونچرز</h2>
                                <strong style={{fontFamily:'Digikala'}}>امتیازات همکاری در پلتفرم سگال ونچرز برای متخصصان کشور</strong>
                                {/* <strong>The best way to prevent illness is to avoid being exposed to this virus.</strong> */}

                                <ul>
                                    <li style={{fontFamily:'Digikala'}}>
                                        <i className="flaticon-tick"></i>
                                        	هوش مصنوعی - توسعه کسب و کار با بکارگیری هوش مصنوعی
                                    </li>
                                    <li style={{fontFamily:'Digikala'}}>
                                        <i className="flaticon-tick"></i>
                                        	رشد و پیشرفت  - ارتقاء مداوم سطح کیفی ارائه خدمات تخصصی 
                                    </li>
                                    <li style={{fontFamily:'Digikala'}}>
                                        <i className="flaticon-tick"></i>
                                        	جایگاه علمی - همکاری با نهادهای بین المللی و مراجع علمی
                                    </li>
                                    <li style={{fontFamily:'Digikala'}}>
                                        <i className="flaticon-tick"></i>
                                        	شبکه ی پویا - امکان تعامل با متخصصان حرفه ای در سطح کشور
                                    </li>
            
                                
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <DoctorsStyleOne /> */}

            {/* <div className="about-area four abouts-six">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content ml-auto">
                                <span className="top-title">درباره تامین مالی سگال</span>
                                <h2>Free Medical Camp Importance & Objectives</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                
                                <ul>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Registration of Deserving Cases for Surgeries 
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Hepatitis B & C Screening Test
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Consultation & Medicine
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Blood Pressure Test
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Diabetes Test
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Childbirth
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 pr-0">
                            <div className="about-img about-img-2"></div>
                        </div>
                    </div>
                </div>
            </div> */}

            <FunFactStyleOne style={{fontSize:'Digikala'}}/>

            <Subscribe style={{fontSize:'Digikala'}}/>
            
            <Footer style={{fontSize:'Digikala'}}/> 
        </>
    )
}

export default About;