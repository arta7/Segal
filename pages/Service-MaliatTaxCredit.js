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

const ServiceMaliatTaxCredit = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="اعتبار مالیاتی سرمایه گذاری"
                homePageUrl="/"
                homePageText="صفحه اصلی"
                activePageText="اعتبار مالیاتی سرمایه گذاری"

                imgClass="bg-1"
            />

            <div className="services-details-area ptb-100" style={{ fontFamily: 'Digikala' }}>
                <div className="container">
                    <div className="row">
                     
                    </div>


                    <div className="services-details-text">
                        <p style={{ fontFamily: 'Digikala' }}>
                        با تصویب قانون جهش دانش بنیان به عنوان متمم قانون اصلی، خدمات اعتبار مالیاتی دانش بنیان دستخوش تغییراتی شدند تا بهره برداری شرکت های متقاضی از آنها تسهیل شود. یکی از این موارد، تسهیلاتی است که برای سرمایه گذاران در حوزه دانش بنیان در نظر گرفته شده است و اغلب آنها را با نام اعتبار مالیاتی سرمایه گذاری دانش بنیان می شناسند. این تسیهلات باعث می شوند که یک شرکت سرمایه گذار، فاقد از اینکه خودش دارای گواهی باشد یا خیر، بتواند با حمایت از مجموعه های دانش بنیان بخشی از مالیات خود را تحت اعتبار مالیاتی قرار بدهد. به این ترتیب نهادهای دولتی، می توانند در کنار امتیازهایی که خودشان در اختیار مجموعه های فناور قرار می دهند از کمک شرکت های خصوصی ثانویه هم برخوردار شوند. این موضوع باعث ایجاد شبکه ای از برنامه های حمایتی مالی و معنوی می شود که به رشد و توسعه اقتصادی منجر می گردند.
زمانی که یک شرکت خصوصی با سرمایه گذاری از یک مجموعه دانش بنیان حمایت کند، می تواند به یکی از دو روش زیر اعتبار مالیاتی دریافت کند.

                        </p>
                    </div>




                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">

                            <div className="col-lg-15">
                         
                                <ul style={{fontFamily:'Digikala'}}>

								<li style={{fontFamily:'Digikala'}}>
                               
                             <b style={{fontFamily:'Digikala'}}>روش های دریافت اعتبار مالیاتی سرمایه گذاری</b>
                             <ul>
                               <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}>	سرمایه گذاری مستقیم </b>
                                          تا سقف سی درصد (30%) سرمایه مورد نظر می تواند به عنوان اعتبار در نظر گرفته شود، با این شرط که شرکت سرمایه گذار در بورس تهران یا بازار اول یا دوم فرابورس پذیرفته شده باشد یا دارای سرمایه ثبتی به میزان حداقل یک سی ام سرمایه صندوق نوآوری و شکوفایی در شرکت ها و موسسات دانش بنیان و فناور باشد.
                                      </li>
  
                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}> سرمایه گذاری غیرمستقیم  </b>
                                          معادل سرمایه گذاری (100%) در تأسیس یا افزایش سرمایه از محل آورده نقدی در صندوق ها و نهادهای سرمایه پذیر غیر مستقیم که صرف افزایش سرمایه شرکت های سرمایه پذیر مستقیم شده و در طرح های فناورانه نوآورانه و دانش بنیان هزینه میشود.
                                      </li>

                                  </ul>




								</li>
							
                            		<li style={{fontFamily:'Digikala'}}>
                               
                             <b style={{fontFamily:'Digikala'}}> شرکت های سرمایه گذار مشمول</b>

                           <ul>
                               <li style={{ fontFamily: 'Digikala' }}>
                               <i className="flaticon-tick"></i>
                              	شرکت های پذیرفته شده در بورس تهران و یا بازار اول و یا دوم فرابورس ایران
                                      </li>

                                      <li style={{ fontFamily: 'Digikala' }}>
                               <i className="flaticon-tick"></i>
                              شرکت های دارای سرمایه ثبتی به میزان حداقل یک سی ام سرمایه صندوق نوآوری و شکوفایی
                                      </li>

                                      </ul>
                                      </li>


                                      <li style={{fontFamily:'Digikala'}}>
                               
                               <b style={{fontFamily:'Digikala'}}> مصادیق سرمایه گذاری </b>
  
                             <ul>
                                 <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                 	تکمیل زنجیره ارزش
                                      
                                        </li>
  
                                        <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                	توسعه محصولات جدید
                                        </li>
  
  
                                        <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                	اولویت های ملی توسعه
                                        </li>

                                        <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                	توسعه زیست بوم علم و فناوری
                                        </li>

                                        <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                افزایش مقیاس و تولید انبوه در حوزه های فناورانه و دانش بنیان
                                        </li>
  
                                        </ul>
                                        </li>


                                      
                               <li style={{fontFamily:'Digikala'}}>
                               
                               <b style={{fontFamily:'Digikala'}}> شاخصه های تایید طرح سرمایه گذاری </b>
  
                             <ul>
                                 <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                            <b style={{fontFamily:'Digikala'}}>	نظام مند؛    </b>
                                            دارای موضوع اهداف برنامه زمان بندی میزان هزینه کرد و پیش بینی خروج
                                        </li>
  
                                        <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                            <b style={{fontFamily:'Digikala'}}>	فناورانه؛   </b>
                                            حائز عمق و سطح فناوری مورد تایید دبیرخانه و انطباق با فهرست محصولات و خدمات دانش بنیان
                                        </li>
  
  
                                        <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                            <b style={{fontFamily:'Digikala'}}> 	نوآورانه؛     </b>
                                            جدید در سطح صنعت مربوطه در کشور و نه لزوما منحصر به فرد
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

            export default ServiceMaliatTaxCredit;