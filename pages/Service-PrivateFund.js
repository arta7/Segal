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

const ServicePrivateFund = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="صندوق سرمایه گذاری خصوصی"
                homePageUrl="/"
                homePageText="صفحه اصلی"
                activePageText="صندوق سرمایه گذاری خصوصی"
                imgClass="bg-1"
            />

            <div className="services-details-area ptb-100" style={{ fontFamily: 'Digikala' }}>
                <div className="container">
                    <div className="row">
                     
                    </div>


                    <div className="services-details-text">
                        <p style={{ fontFamily: 'Digikala' }}>
                        امروزه یکی از مهم‌ترین مشکلات بنگاه‌ها و کسب‌ وکارهای کشور مسئله تامین‌مالی است. بخشی از علت عدم جریان پیدا کردن نقدینگی به سمت بنگاه‌ها و کسب‌وکار‌ها به مشکلات کلان نظام بانکی برمی‌گردد اما نمی‌توان عدم وجود ابزارها و نهادهای مالی و سرمایه‌گذاری قابل اعتماد و منطبق با نیازها و شرایط کشور را نیز در این زمینه نادیده گرفت. در بازارهای مالی بین‌المللی ابزارها و نهادهای مختلفی وجود دارد که با توجه به تمایلات و سلیقه‌های سرمایه‌گذاران و نیازهای بنگاه‌ها اختصاصی ‌شده‌اند. در ایران هم چندسالی است که سرمایه‌گذاری جسورانه (VC) و شرکت‌های استارتاپی مورد توجه سرمایه‌گذاران قرار گرفته است، اما این حوزه به دلیل اینکه با شرکت‌های در مرحله بذری (seed) و یا در مرحله توسعه‌ی اولیه سروکار دارند، برای بسیاری از سرمایه‌گذاران جالب توجه نیست چراکه این دسته از سرمایه‌گذاران بیشتر به دنبال کسب‌وکارهایی‌ هستند که تا حدی به بلوغ رسیده ‌باشند. 
                        </p>
                    </div>




                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">

                            <div className="col-lg-15">
                         
                                <ul style={{fontFamily:'Digikala'}}>

								<li style={{fontFamily:'Digikala'}}>
                                <i className="flaticon-tick"></i> 
                             <b style={{fontFamily:'Digikala'}}> صندوق سرمایه‌گذاری خصوصی </b>
                             صندوق‌های سرمایه‌گذاری خصوصی(Private Equity Fund) ، ابزارهای سرمایه‌گذاری‌ای هستند که به وسیله شرکت‌های PE و به نمایندگی از گروهی از سرمایه‌گذاران اداره می‌شوند. سرمایه این صندوق‌ها با این دیدگاه تأمین می‌شود که بخشی از سهام شرکت‌های خصوصی تملک و سپس در یک بازه زمانی واگذار شود. بیشتر صندوق‌های خصوصی در قالب یک مشارکت محدود با سرمایه ثابت تشکیل می‌شوند که اهداف سرمایه‌گذاری آن‌ها از قبل کاملا تعیین نشده که از این جهت به آن‌ها اصطلاحا «blind pool» گفته می‌شود. این صندوق‌ها معمولا دارای طول عمر محدود هستند و از سرمایه‌گذاران می‌خواهند متعهد به تأمین سرمایه صندوق برای تمام طول عمر صندوق، بدون حق بازخرید و یا برداشت باشند.
این نوع صندوق‌ها با جمع‌آوری منابع از سرمایه‌گذاران، در طی یک دوره هفت تا ده ساله اقدام به سرمایه‌گذاری در شرکت‌های خصوصی کوچک و متوسط و یا شرکت‌های دچار بحران می‌کنند،‌ آن‌ها را رشد، توسعه و ارتقا می‌دهند و در نهایت با عرضه سهام آنها به دیگر سرمایه‌گذاران و یا حتی در بورس، بازدهی قابل توجهی را برای سرمایه‌گذاران خود رقم می‌زنند.

								</li>
							
                            		<li style={{fontFamily:'Digikala'}}>
                                <i className="flaticon-tick"></i> 
                             <b style={{fontFamily:'Digikala'}}> 	تشخیص ریسک:</b>
                             مدیران متخصص دارایی با میزان ریسک در هر سبد دارایی آشنا هستند و ترفندهای کاهش ریسک برای هر کدام از موارد را می‌شناسند.
								</li>


                                <li style={{fontFamily:'Digikala'}}>
                                <i className="flaticon-tick"></i> 
                             <b style={{fontFamily:'Digikala'}}>ارزیابی مجموع دارایی‌ها: </b>
                             با مدیریت بر دارایی به صورت حرفه‌ای، همیشه اطلاعات دارایی‌ها به‌روز و قابل استناد خواهد بود.
								</li>

                                <li style={{fontFamily:'Digikala'}}>
                                <i className="flaticon-tick"></i> 
                             <b style={{fontFamily:'Digikala'}}>حذف سرمایه مرده: </b>
                             مدیریت بر دارایی یعنی اشراف کامل بر زمان اتمام دارایی‌ها. دارایی‌های مرده از مواردی هستند که دیگر ارزشمند نیستند یا وجود خارجی ندارند و در دفتر اسناد شرکت‌ها و سازمان‌ها ثبت می‌شوند اما نقشی در پیشبرد اهداف سرمایه‌گذاری و تجاری ندارند.
								</li>


                                <li style={{fontFamily:'Digikala'}}>
                                <i className="flaticon-tick"></i> 
                             <b>افزودن ارزش به دارایی مشتریان:  </b>
                             مدیریت دارایی حرفه‌ای یعنی افزودن به ارزش دارایی فعلی که شرکت‌های فعال در این زمینه با توجه به میزان دانش بالای خود، همیشه این هدف را دنبال می‌کنند.
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

            export default ServicePrivateFund;