import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 2500,
    items: 1,
    animateOut: 'fadeOut',
    margin: 0,
};

const ServiceMaliat = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="خدمات  اعتبار مالیاتی"
                homePageUrl="/"
                homePageText="صفحه اصلی"
                activePageText="خدمات اعتبار مالیاتی"
                imgClass="bg-1"
            />

            <div className="services-details-area ptb-100" style={{fontFamily:'Digikala',textAlign:'justify'}}>
                <div className="container">
                    <div className="row">
                     
                    </div>


                    <div className="services-details-text">
                        <p style={{ fontFamily: 'Digikala' }}>
                        حرکت به سمت اقتصاد دانش بنیان نیازمند افزایش و ارتقای سطح فعالیت‌های تحقیق و توسعه در صنایع مختلف کشور و استفاده حداکثری از پتانسیل‌های فناورانه موجود در راستای رفع نیازمندی‌های کشور است. یکی از قوانین کلیدی محرک توسعه اقتصاد دانش بنیان در کشور قانون جهش تولید دانش بنیان مصوب سال ۱۴۰۱ است که با ایجاد ابزار‌های حمایتی مانند اعتبار مالیاتی تحقیق و توسعه موضوع بند ب ماده ۱۱ قانون و اعتبار مالیاتی سرمایه گذاری موضوع بند ت ماده ۱۱ قانون، فرصت مناسبی را برای رشد و توسعه شرکت‌ها و صنایع بزرگ کشور فراهم ساخته است.
                        </p>

                        <p style={{ fontFamily: 'Digikala' }}>
                        <b>اعتبار مالیاتی (Tax Credit) </b>
                        یک سیستم مشوق حمایتی است که توسط دولت‌ ها برای کاهش بار مالیاتی شرکت ‌ها و افراد ارائه می ‌شود. این سیستم به طور مستقیم مبلغ مالیات پرداختی را کاهش می ‌دهد؛ برخلاف کسر مالیاتی که فقط درآمد مشمول مالیات را کم می کند. اعتبار مالیاتی می ‌تواند برای اهداف مختلفی از جمله تشویق به سرمایه‌ گذاری در تحقیق و توسعه (R&D)، ایجاد اشتغال، صرفه‌ جویی در انرژی و موارد دیگر اعطا شود. لذا با هدف جهت دهی حمایت ‌های مالیاتی به سمت توسعه نوآوری و اقتصاد دانش‌ بنیان و بهره مندی شرکت ها از مزایای اعتبار مالیاتی، 
                        <b>سگال ونچرز </b>
                        با کمک کارشناسان خبره و نخبگان متخصص در حوزه های مختلف و بهره گیری از شبکه فناوران حرفه ای زیست بوم سگال خدمات تخصصی اعتبار مالیاتی را در 
                        <b style={{color:'red'}}>کلینیک نوآوری سگال </b>
                        ارائه می نماید.
                        </p>
                    </div>




                    {/* <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                           

                            <div className="col-lg-15"> 
                                <ul>
                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                      	ارزیابی سطح فناوری شرکت به منظور تعیین ظرفیت های توسعه پذیری
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                       	برگزاری جلسات فنی به منظور تعیین راهکار بهینه استفاده از اعتبار مالیاتی
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                     	مشاوره در تهیه و تنظیم طرح های تحقیق و توسعه و سرمایه گذاری شرکت
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                       	مذاکره، ارزیابی و تعیین فناوران صلاحیت دار جهت اجرای طرح های مصوب
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                       	پیگیری و حضور در جلسات ارزیابی طرح ها و اخذ تاییدیه موافقت اصولی
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                       	پیگیری و حضور در جلسات دفاعیه کار گروه سازمان بورس و اوراق بهادار
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                       	خدمات مدیریت شرکت پروژه و نظارت بر صندوق سرمایه گذاری خصوصی
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                    	نظارت و کنترل بر پیشرفت عملکرد فناوران تایید شده طرح های اعتبار مالیاتی
                                    </li>


                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                    	 پیگیری و حضور در جلسات رفع اشکال تایید هزینه کرد طرح های شرکت
                                    </li>


                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                    		پیگیری جهت تعیین و اخذ اعتبار مالیاتی در کار گروه دبیرخانه شورای راهبردی
                                    </li>


                                 





                                </ul>
                            </div>
                        </div>
                    </div> */}








               


             

                        <div className="scrives-item-3 mt-4">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="social">
                                        <ul className="social-link">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.twitter.com/" target="_blank">
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.pinterest.com/" target="_blank">
                                                    <i className="bx bxl-pinterest-alt"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/" target="_blank">
                                                    <i className="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="share">
                                        <a href="#">
                                            <i className="bx bx-share-alt"></i> اشتراک گذاری
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Subscribe />

                <Footer />
            </>
            )
}

            export default ServiceMaliat;