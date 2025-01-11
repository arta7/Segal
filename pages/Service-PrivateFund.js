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
                               
                             <b style={{fontFamily:'Digikala'}}> صندوق سرمایه‌گذاری خصوصی </b>
<p>                             صندوق‌های سرمایه‌گذاری خصوصی(Private Equity Fund) ، ابزارهای سرمایه‌گذاری‌ای هستند که به وسیله شرکت‌های PE و به نمایندگی از گروهی از سرمایه‌گذاران اداره می‌شوند. سرمایه این صندوق‌ها با این دیدگاه تأمین می‌شود که بخشی از سهام شرکت‌های خصوصی تملک و سپس در یک بازه زمانی واگذار شود. بیشتر صندوق‌های خصوصی در قالب یک مشارکت محدود با سرمایه ثابت تشکیل می‌شوند که اهداف سرمایه‌گذاری آن‌ها از قبل کاملا تعیین نشده که از این جهت به آن‌ها اصطلاحا «blind pool» گفته می‌شود. این صندوق‌ها معمولا دارای طول عمر محدود هستند و از سرمایه‌گذاران می‌خواهند متعهد به تأمین سرمایه صندوق برای تمام طول عمر صندوق، بدون حق بازخرید و یا برداشت باشند.
این نوع صندوق‌ها با جمع‌آوری منابع از سرمایه‌گذاران، در طی یک دوره هفت تا ده ساله اقدام به سرمایه‌گذاری در شرکت‌های خصوصی کوچک و متوسط و یا شرکت‌های دچار بحران می‌کنند،‌ آن‌ها را رشد، توسعه و ارتقا می‌دهند و در نهایت با عرضه سهام آنها به دیگر سرمایه‌گذاران و یا حتی در بورس، بازدهی قابل توجهی را برای سرمایه‌گذاران خود رقم می‌زنند.
</p>
								</li>
							
                            		<li style={{fontFamily:'Digikala'}}>
                               
                             <b style={{fontFamily:'Digikala'}}> صندوق خصوصی (PE) در ایران </b>
                           <p>  در ایران دستورالعمل تاسیس و راه‌اندازی صندوق‌های خصوصی در سال نود‌و‌هفت توسط سازمان بورس و اوراق بهادار تهیه و ابلاغ شد. واحدهای این صندوق‌ها به شکل قابل معامله در بورس هستند، ساختار حاکمیت شرکتی‌ آن‌ها در قالب واحدهای ممتاز(که تشکیل‌دهنده مجمع صندوق‌ هستند) و واحدهای عادی اداره می‌شود. تصمیمات سرمایه‌گذاری آن با مسئولیت مدیر صندوق، در چارچوب مصوب مجمع، و با کمک کمیته سرمایه‌گذاری، اتخاذ می‌شود.
                           </p>
                                </li>


                                <li style={{fontFamily:'Digikala'}}>
                               
                             <b style={{fontFamily:'Digikala'}}>ویژگی‌های صندوق سرمایه‌گذاری خصوصی  </b>
                             <p>صندوق‌های PE به جای سرمایه‌گذاری در بازارهای عمومی، سرمایه خود را در شرکت‌های خصوصی با پتانسیل رشد بالا سرمایه‌گذاری می‌کنند. سرمایه‌گذاری‌های صندوق‌های PE معمولا بلندمدت (۵ تا ۷ سال) هستند تا فرصت رشد و بهبود شرکت‌ها فراهم شود. این صندوق‌ها معمولا در مدیریت شرکت‌های هدف خود مشارکت فعال دارند تا آن‌ها را رشد و توسعه دهند. به دلیل ماهیت خصوصی این صندوق‌ها، امکان سرمایه‌گذاری در آن‌ها معمولا محدود به سرمایه‌گذاران خاص و نهادی است. برخی از نقاط قوت صندوق‌های سرمایه‌گذاری خصوصی عبارت است از:</p>
                             <ul>
                             <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> بازده بالا:  </b>
                                        صندوق‌های PE معمولاً بازدهی بالاتری نسبت به سایر انواع صندوق‌های سرمایه‌گذاری ارائه می‌دهند.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> 	تنوع پرتفوی:   </b>
                                        این صندوق‌ها در چندین شرکت مختلف سرمایه‌گذاری می‌کنند که این کار، موجب کاهش ریسک و اطمینان خاطر بالاتر می‌شود.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> 	مدیریت فعال:    </b>
                                        صندوق‌های PE شرکت‌های سرمایه‌گذاری‌شده را به صورت فعال مدیریت می‌کنند که باعث بهبود عملکرد آن‌ها می‌شود. مدیریت حرفه‌ای این صندوق‌ها موجب می‌شود خیال سرمایه‌گذاران از همه لحاظ راحت باشد.
                                    </li>



                                </ul>



								</li>

                                <li style={{fontFamily:'Digikala'}}>
                               
                             <b style={{fontFamily:'Digikala'}}>ارکان صندوق‌های سرمایه‌گذاری خصوصی  </b>
                             <p>ارکان تشکیل‌دهنده صندوق‌های سرمایه‌گذاری خصوصی به شرح زیر هستند:</p>


                             <ul>
                             <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> شرکت مدیریت دارایی خصوصی (PE)   </b>
                                        شرکتی است که دارای افراد متخصص در اجرای سرمایه‌گذارهای خطرپذیر و رشدی هستند. این نوع شرکت‌ها سرمایه یک یا گروهی از صندوق‌های سرمایه‌گذاری را جمع‌آوری می‌کنند و از طریق دو شخصیت حقوقی مجزا (مدیر سرمایه‌گذاری و شریک مدیریتی) اقدام به ارائه مشاوره به این صندوق‌ها می‌کنند.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> شرکای سرمایه‌گذار (LP)   </b>
                                        شرکای سرمایه‌گذار قسمت عمده‌ای از سرمایه‌های صندوق‌های خصوصی را تامین می‌کنند. LPها به عنوان سرمایه‌گذاران غیرفعال در صندوق‌های خصوصی مشارکت می‌کنند و تعهدات مالی هر یک به اندازه سرمایه‌ای است که به صندوق سرمایه‌گذاری متعهد شده‌اند. صندوق‌های بازنشستگی عمومی و خصوصی، بیمه‌ها، خیریه‌ها، بانک‌ها، افراد ثروتمند و فراصندوق‌ها از جمله LPها شناخته می‌شوند.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> شریک مدیریتی (GP)   </b>
                                        شریک مدیریتی مسئولیت مدیریت صندوق را بر عهده دارد. مسئولیت بدهی و تعهدات صندوق بر عهده شریک مدیریتی خواهد بود. همچنین، یکی از مهم‌ترین ویژگی‌های شریک مدیریتی (GP)، تامین بخشی از سرمایه صندوق است.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> مدیر سرمایه‌گذاری   </b>
                                        مدیر سرمایه‌گذاری وظیفه مدیریت عملیات روزمره صندوق را بر عهده دارد. این مدیر وظیفه دارد تا فرصت‌های سرمایه‌گذاری را ارزیابی کرده و به شرکت‌های موجود در پرتفوی مشاوره بدهد. همچنین مدیر سرمایه‌گذاری فرآیند حسابرسی و گزارش‌دهی را مدیریت می‌کند و در ازای این خدمت، کارمزد می‌گیرد.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> شرکت‌های فعال در سبد سرمایه‌گذاری  </b>
                                        صندوق‌های خصوصی ممکن است در طول دوره فعالیت‌شان در شرکت‌هایی سرمایه‌گذاری کنند که تعداد آن‌ها بین ۱۰ تا ۱۵ عدد است. این شرکت‌ها به عنوان تشکیل‌دهنده سبد سرمایه‌گذاری شناخته می‌شوند.
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

            export default ServicePrivateFund;