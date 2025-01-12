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

const ServiceResearchtaxcredit = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="اعتبار مالیاتی تحقیق و توسعه"
                homePageUrl="/"
                homePageText="صفحه اصلی"
                activePageText="اعتبار مالیاتی تحقیق و توسعه"

                imgClass="bg-1"
            />

            <div className="services-details-area ptb-100" style={{fontFamily:'Digikala',textAlign:'justify'}}>
                <div className="container">
                    <div className="row">
                     
                    </div>


                    <div className="services-details-text">
                        <p style={{ fontFamily: 'Digikala' }}>
                        اعتبار مالیاتی تحقیق و توسعه (R&D Tax Credit) یک نوع خاص از اعتبار مالیاتی است که برای تشویق شرکت ‌ها به سرمایه ‌گذاری در نوآوری و توسعه فناوری‌ های جدید طراحی شده است. این اعتبار مالیاتی به شرکت ‌ها اجازه می ‌دهد که بخشی از هزینه ‌های تحقیق و توسعه خود را از مالیات ‌های خود کسر کنند که شامل شرکت های دانش بنیان نیز می گردد.
                        </p>
                    </div>




                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">

                            <div className="col-lg-15">
                         
                                <ul style={{fontFamily:'Digikala'}}>

								<li style={{fontFamily:'Digikala'}}>
                               
                             <b style={{fontFamily:'Digikala'}}>اهداف اعتبار مالیاتی تحقیق و توسعه</b>
                             <ul>
                               <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}>	تشویق به نوآوری : </b>
                                          افزایش انگیزه شرکت‌ ها برای سرمایه‌ گذاری در پروژه ‌های تحقیق و توسعه.
                                      </li>
  
                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}> افزایش رقابت ‌پذیری:  </b>
                                          کمک به شرکت ‌ها برای بهبود محصولات و فرآیندهای خود و در نتیجه افزایش رقابت ‌پذیری در بازارهای جهانی.
                                      </li>
  
                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}> ایجاد اشتغال:   </b>
                                          تحریک ایجاد فرصت ‌های شغلی در بخش ‌های تحقیق و توسعه.
                                      </li>



                                      <li style={{ fontFamily: 'Digikala' }}>
                                          <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}>توسعه اقتصادی:  </b>
                                          تقویت رشد اقتصادی از طریق افزایش بهره ‌وری و تولید محصولات جدید.
                                      </li>
                                     
  
  
                                  </ul>




								</li>
							
                            		<li style={{fontFamily:'Digikala'}}>
                               
                             <b style={{fontFamily:'Digikala'}}> نحوه کارکرد اعتبار مالیاتی تحقیق و توسعه </b>
                           <p> شرکت ‌ها می ‌توانند بخشی از هزینه ‌های تحقیق و توسعه خود را به عنوان اعتبار مالیاتی مطالبه کنند. این هزینه ‌ها ممکن است شامل موارد زیر باشد:
                           </p>

                           <ul>
                               <li style={{ fontFamily: 'Digikala' }}>
                               <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}>	هزینه ‌های دستمزد:  </b>
                                          حقوق و دستمزد کارکنان مشغول در پروژه‌ های تحقیق و توسعه.
                                      </li>

                                      <li style={{ fontFamily: 'Digikala' }}>
                               <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}>	هزینه ‌های مواد و لوازم:   </b>
                                          هزینه ‌های مربوط به مواد اولیه و لوازم مصرفی در پروژه ‌ها.
                                      </li>


                                      <li style={{ fontFamily: 'Digikala' }}>
                               <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}> هزینه‌ های تحقیق قراردادی:   </b>
                                          هزینه ‌های مربوط به تحقیقاتی که به صورت قراردادی به شرکت ‌های دیگر واگذار شده است.
                                      </li>

                                      <li style={{ fontFamily: 'Digikala' }}>
                               <i className="flaticon-tick"></i>
                                          <b style={{fontFamily:'Digikala'}}> هزینه ‌های تجهیزات:   </b>
                                          هزینه ‌های خرید تجهیزات ویژه تحقیق و توسعه.
                                      </li>
                                      </ul>
                                      </li>


                                      <li style={{fontFamily:'Digikala'}}>
                               
                               <b style={{fontFamily:'Digikala'}}> مزایای اعتبار مالیاتی تحقیق و توسعه </b>
  
                             <ul>
                                 <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                            <b style={{fontFamily:'Digikala'}}>	کاهش بار مالیاتی:   </b>
                                            کاهش مستقیم مبلغ مالیات پرداختی که می ‌تواند به بهبود نقدینگی شرکت ‌ها کمک کند.
                                        </li>
  
                                        <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                            <b style={{fontFamily:'Digikala'}}>	افزایش سرمایه‌ گذاری در تحقیق و توسعه:  </b>
                                            با کاهش هزینه ‌های مالیاتی، شرکت ‌ها ممکن است انگیزه بیشتری برای سرمایه‌ گذاری در پروژ ه‌های تحقیق و توسعه پیدا کنند.
                                        </li>
  
  
                                        <li style={{ fontFamily: 'Digikala' }}>
                                 <i className="flaticon-tick"></i>
                                            <b style={{fontFamily:'Digikala'}}> افزایش نوآوری و بهره ‌وری:    </b>
                                            تشویق به توسعه فناوری‌ های جدید و بهبود فرآیندهای موجود که منجر به افزایش بهره ‌وری و کیفیت محصولات می ‌شود.
                                        </li>
  
                                        </ul>
                                        </li>


                                        <li style={{fontFamily:'Digikala'}}>
                               
                               <b style={{fontFamily:'Digikala'}}> نحوه محاسبه اعتبار مالیاتی مودیان </b>

                               <p>
                               محاسبه اعتبار مالیاتی مودیان یک فرآیند چند مرحله ‌ای است که شامل شناسایی هزینه ‌های واجد شرایط، تعیین میزان اعتبار مجاز و اعمال آن به مالیات ‌های پرداختی می ‌شود.
                               </p>
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

            export default ServiceResearchtaxcredit;