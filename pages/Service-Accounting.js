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

const ServiceAccounting = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="خدمات  تامین مالی"
                homePageUrl="/"
                homePageText="صفحه اصلی"
                activePageText="خدمات تامین مالی"
                imgClass="bg-1"
            />

            <div className="services-details-area ptb-100" style={{ fontFamily: 'Digikala' }}>
                <div className="container">
                    <div className="row">
                     
                    </div>


                    <div className="services-details-text">
                        <p style={{ fontFamily: 'Digikala' }}>
                        فرآیند توسعه و تجاری‌سازی فناوری، فعالیتی هزینه‌بر است. از این رو، تأمین مالی علم، فناوری و نوآوری با روش مناسب، در زمان مناسب و از طریق منابع مناسب اهمیت فراوانی دارد. روش‌های تأمین مالی بنگاه‌های نوآور در مراحل مختلف دوره عمر بنگاه، متفاوت است و از منابع شخصی تا بانکی، سرمایه‌گذاران خطرپذیر، تأمین مالی جمعی و بازار سهام را دربر می‌گیرد. بازیگران مختلف، روش‌های متفاوت تأمین مالی را به کار می‌گیرند و در کنار یکدیگر نظام تأمین مالی نوآوری را شکل می‌دهند.
                        </p>
                    </div>




                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                           

                            <div className="col-lg-15">
                                <h3 style={{ fontFamily: 'Digikala' }}>خدمات تامین مالی</h3>
                                <p>دسترسی به شبکه سرمایه گذاران و جذب سرمایه جهت پیشبرد اهداف و تجاری سازی و ورود به بازار یکی از نیازهای اصلی هر کسب و کار و از همکاری‌های مجتمع نوآوری سگال می‌باشد. یکی از نیازهای اصلی برای عملیاتی کردن هر ایده و نوآوری های آن، سرمایه گذاری اولیه می‌باشد. هر فناور برای ورود به فاز مطالعاتی، ساخت پروتوتایپ و یا نوآوری نسبت به تولیدات پیشین نیازمند به سرمایه اولیه‌ای می‌باشد که میتوان این نیاز را با دریافت تسهیلات بانکی، جذب سرمایه از مراکز رشد و شتابدهنده‌ها و سرمایه‌گذاران تامین کرد. پس از بررسی طرح، تیم اجرایی، هزینه‌ها و امکانات مورد نیاز هر پروژه، در صورت پذیرش در ازای دریافت سهام از شرکت، اقدام به سرمایه گذاری بذری می‌کنند. این امر موجب افزایش تمرکز شتابدهنده بر هر پروژه، همراهی و پشتیبانی با تیم خواهد شد.</p>
                                <ul>
                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> تامین مالی فرشته (Angel Financing)  :  </b>
                                        به نوعی مدل سرمایه گذاری می گویند که در ازای دریافت سهام کسب و کارهای نوپا پشتوانه مالی مناسب را برای آنها فراهم می کنند. تامین مالی فرشته می تواند  به صورت سرمایه گذاری یکباره و یا پشتیبانی مداوم باشد. متخصصان حرفه ای با تجزیه و تحلیل کسب و کار، مشاوره و راهنمایی متناسب را پیشنهاد می‌دهند. شرکت مدیریت ثروت سگال به عنوان یکی از نهادهای زیرمجموعه هلدینگ سگال با برنامه ریزی و اجرای استراتژی های صحیح سرمایه گذاری ماموریت تامین مالی استارتاپ‌ها و کسب‌و‌کارهای نوپا را در زیست بوم نوآوری سگال بر عهده دارد.
                                        <h3 style={{ fontFamily: 'Digikala' }}>فهرست خدمات</h3>
                                        <ul>
                                        <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                    	پردازش اطلاعات مالی
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        مشاوره به بنیان گذاران
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                       	سرمایه گذاری فرشته
                                    </li>
                                        </ul>
                                   
                                   
                                    </li>


                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> تامین مالی جمعی (Crowd funding)  </b>
                                        روشی است که در آن سرمایه مورد نیاز برای تأمین مالی یک کسب و کار از پس‌اندازهای خرد گردآوری می‌شود. این مشارکت جمعی از طریق سکوهای عاملین دارای مجوز تأمین مالی جمعی از فرابورس و سازمان بورس و اوراق بهادار انجام می‌پذیرد. تامین مالی سگال یک سکوی تامین مالی جمعی است که با ایجاد مکانیزم های نظارتی چند لایه شامل متخصصان مالی، شرکت سبدگردان و شرکت فرابورس ایران، مسیر امنی برای مبادلات مالی در قالب مشارکت بین اشخاص حقیقی و حقوقی را در زیست بوم نوآوری سگال فراهم می آورد.
                                  
                                        <h3 style={{ fontFamily: 'Digikala' }}>مزایای سرمایه گذاری جمعی برای سرمایه گذاران</h3>
                                        <ul>
                                        <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                      	سرمایه گذاری در طرح هایی که سود به مراتب بیشتر و جذاب تری نسبت به سپرده گذاری بانکی دارند.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                      	سرمایه گذاری در طرح هایی که حداقل سود مشخص دارند و نسبت به بازار سرمایه و خرید سهام ریسک کمتری دارند
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        	سرمایه گذاری در طرح هایی که از اطلاعات آنها اطمینان کامل دارند و به صورت شفاف از جزییات آن مطلع می شوند.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                       	سرمایه گذاری در طرح هایی که دارای تضامین مناسب هستند و  ناظر مورد تایید فرابورس بر آنها نظارت می کند.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        	سرمایه گذاری در طرح هایی که سکوی تامین مالی جمعی حمایت حقوقی از سرمایه گذاران را در آنها بر عهده گرفته است.
                                    </li>


                                        </ul>




                                  
                                    </li>





                                </ul>
                            </div>
                        </div>
                    </div>








               


             

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

            export default ServiceAccounting;