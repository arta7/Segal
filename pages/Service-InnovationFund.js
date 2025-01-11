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

const ServiceInnovationFund = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="صندوق سرمایه گذاری نوآوری"
                homePageUrl="/"
                homePageText="صفحه اصلی"
                activePageText="صندوق سرمایه گذاری نوآوری"
                imgClass="bg-1"
            />

            <div className="services-details-area ptb-100" style={{ fontFamily: 'Digikala' }}>
                <div className="container">
                    <div className="row">
                     
                    </div>


                    <div className="services-details-text">
                        <p style={{ fontFamily: 'Digikala' }}>
                        دسترسی به شبکه سرمایه گذاران و جذب سرمایه جهت پیشبرد اهداف و تجاری سازی و ورود به بازار یکی از نیازهای اصلی هر کسب و کار و از همکاری‌های سگال ونچرز می‌باشد. یکی از نیازهای اصلی برای عملیاتی کردن هر ایده و نوآوری های آن، سرمایه گذاری اولیه می‌باشد. هر فناور برای ورود به فاز مطالعاتی، ساخت پروتوتایپ و یا نوآوری نسبت به تولیدات پیشین نیازمند به سرمایه اولیه‌ای می‌باشد که میتوان این نیاز را با دریافت تسهیلات بانکی، جذب سرمایه از مراکز رشد، شتابدهنده‌ها و سرمایه‌گذاران تامین کرد.
                        </p>
                    </div>




                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">

                            <div className="col-lg-15">
                         
                                <ul style={{fontFamily:'Digikala'}}>

								<li style={{fontFamily:'Digikala'}}>
                               
                             <b style={{fontFamily:'Digikala'}}> معرفی صندوق نوآوری سگال </b>
<p>
صندوق نوآوری سگال یک نوع صندوق سرمایه گذاری خصوصی است که با هدف کمک به توسعه و ارتقای شرکتهای حاضر در زیست بوم نوآوری سگال جهت رفع نیازهای فناورانه صنایع فعالیت می کنند تشکیل گردیده است. ماموریت اصلی این صندوق کمک به گسترش پژوهش ها، فعالیت های نوآورانه و همچنین کمک به توسعه فناوری ها در زمینه پایداری صنایع است. از این رو، تاسیس و مشارکت این صندوق در گسترش فعالیت شرکتهای حاضر در زیست بوم نوآوری موجب تقویت و اثر بخشی فعالیت ها آنها شود.                            
</p>
								</li>
							
                            		<li style={{fontFamily:'Digikala'}}>
                               
                             <b style={{fontFamily:'Digikala'}}> حوزه های فناوری </b>
                           <p> کلیه فناورهای کاربردی در نوآوری صنایع
                           </p>


                           <li style={{fontFamily:'Digikala'}}>
                               
                               <b style={{fontFamily:'Digikala'}}>خدمات صندوق   </b>
                               <ul>
                               <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          	ارایه خدمات مالی و تسهیلاتی به اشخاص حقوقی به صورت تسهیلات کوتاه‌مدت و بلندمدت، پرداخت تمام یا بخشی از سود تسهیلات و جرایم متعلقه و ارایه خدمات ضمانت‌نامه‌ای برای اجرای طرح‌های پژوهشی، فناوری، نوآوری و تجاری‌سازی نتایج پژوهش‌ها
                                      </li>
  
                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          	جذب و یا هدایت منابع مالی دولتی، بانک‌ها و مؤسسات اعتباری مجاز و سایر صندوق‌ها در راستای اهداف و وظایف و اختیارات صندوق
                                      </li>
  
                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          	مشارکت و سرمایه‌گذاری در ایجاد، توسعه، راهبری و توانمندسازی شرکت‌های پژوهشی و فناوری و دانش‌بنیان
                                      </li>



                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          	تضمین پرداخت تعهدات و اقساط طرح‌های پژوهشی و فناوری در قرارداد به منظور تسریع و تسهیل در اجرای طرح‌ها و قراردادها و توثیق و ترهین اموال و دارایی‌ها به‌منظور جلوگیری از وقفه در اجرای طرح‌ها
                                      </li>


                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          	همکاری با مؤسسات و نهادهای داخلی و خارجی و عضویت در مجامع تخصصی مرتبط در راستای اهداف صندوق
                                      </li>

                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          	اخذ و اعطای کارگزاری و عاملیت منابع مالی اشخاص حقیقی و حقوقی دولتی و غیردولتی در حوزه پژوهش و فناوری
                                      </li>
  
                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          ارایه خدمات ارزیابی و امکان‌سنجی طرحهای کسب‌وکار و نظارت، ارزش‌گذاری پروژه‌ها و طرح‌های پژوهشی و فناوری
                                      </li>
                                     
  
  
                                  </ul>
  
  
  
                                  </li>




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

            export default ServiceInnovationFund;