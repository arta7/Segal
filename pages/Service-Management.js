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

const ServicesDetails = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="خدمات مشاوره مدیریت" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="خدمات مشاوره مدیریت" 
                imgClass="bg-1" 
            />

            <div className="services-details-area ptb-100" style={{fontFamily:'Digikala'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="services-img">
                                <img src="/img/service-details/service-details1.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {display ? <OwlCarousel 
                                className="services-item-wrap owl-carousel owl-theme"
                                {...options}
                            >  
                                <div className="services-item">
                                    <img src="/img/service-details/service-details2.jpg" alt="Image" />
                                </div>
                                <div className="services-item">
                                    <img src="/img/service-details/service-details3.jpg" alt="Image" />
                                </div>
                                <div className="services-item">
                                    <img src="/img/service-details/service-details4.jpg" alt="Image" />
                                </div>
                            </OwlCarousel> : ''}
                        </div>
                    </div>


                    <div className="services-details-text">
                        <p style={{fontFamily:'Digikala'}}>
                        مدیریت دارایی روشی سازمان یافته برای حفظ، بهبود و توسعه دارایی‌های مختلف یک فرد یا شرکت با روشی مقرون به صرفه است. اصولاً مدیریت دارایی دو تعریف کلی دارد. یکی مربوط به امور مالی شرکت‌ها است و دیگری مربوط به خدمات مشاوره. در امور مالی شرکت‌ها، مدیریت دارایی فرآیندی است که دارایی‌های ملموس و مشهود یک شرکت را نگهداری می‌کند و بهترین و بیشترین استفاده از دارایی‌های شرکت را سبب می‌شود. مدیر دارایی سعی دارد دارایی‌های فیزیکی، مالی، انسانی و اطلاعاتی شرکت را به بهترین نحو به‌کار گیرد تا ارزش شرکت به حداکثر مقدار خود برسد.
</p>
                    </div>


                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">

                            <div className="col-lg-12">
                                <h2 style={{fontFamily:'Digikala'}}>مزایای دریافت مشاوره و خدمت در مدیریت بر دارایی</h2>
                                <p style={{fontFamily:'Digikala'}}>کمک گرفتن از راهنمایی متخصصان امور مدیریتی دارایی مزایایی دارد که به شرح زیر هستند:</p>
                                <ul style={{fontFamily:'Digikala'}}>

								<li style={{fontFamily:'Digikala'}}>
                                <i className="flaticon-tick"></i> 
                             <b style={{fontFamily:'Digikala'}}> انتخاب مسیر سرمایه‌گذاری مناسب :</b>
                             مشاوره با حرفه‌ای‌ها منجر به یافتن راهی برای سرمایه‌گذاری ایده‌آل و مناسب و اجتناب از سرمایه‌گذاری نامطمئن می‌شود.
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

                    <div className="services-details-text">
                        <h2 style={{fontFamily:'Digikala'}}>مشاوره تأسیس نهادهای مالی</h2>
                        <p>
                        با توجه به اینکه مجموعه‌های نظیر شرکت‌های سرمایه‌گذاری و شرکت‌های هلدینگ یا مادر جهت ثبت، تأسیس و فعالیت خود نیازمند اخذ مجوز از سازمان بورس هستند سگال ونچرز بر اساس تجربه خود در این زمینه اقدام به ارائه مشاوره در خصوص تاسیس انواع نهادهای مالی با مجوز از سازمان بورس می‌نماید.
</p>
                    </div>
                    
                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="services-img">
                                    <img src="/img/service-details/service-details5.jpg" alt="Image" />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <h3 style={{fontFamily:'Digikala'}}>مشاوره افزایش سرمایه</h3>
                                <p>افزایش سرمایه یکی از روش‌های شرکت‌ها برای توسعه‌ی فعالیت‌ها، طرح‌های جدید و تأمین نقدینگی لازم برای اجرایی‌سازی پروژه‌ها می‌باشد. انواع روش‌های افزایش سرمایه به شرح ذیل است:</p>
                                <ul>
								<li>
									<i className="flaticon-tick"></i> 
                                    
									افزایش سرمایه از محل سود انباشته
								</li>
								<li>
									<i className="flaticon-tick"></i>
									افزایش سرمایه از محل آورده نقدی و مطالبات حال شده سهام‌داران
								</li>
								<li>
									<i className="flaticon-tick"></i>
									افزایش سرمایه از طریق آورده نقدی سهام‌داران جدید با سلب حق تقدم از سهام‌داران قبلی شرکت
								</li>
								<li>
									<i className="flaticon-tick"></i>
									افزایش سرمایه از طریق تجدید ارزیابی دارایی‌ها
								</li>

							</ul>

                            <p>سگال ونچرز در ارتباط با انواع مختلف افزایش سرمایه متناسب با نیاز شرکت‌ها و همچنین تهیه گزارشات توجیهی مربوطه خدمات مشاوره ارائه می‌دهد.</p>
                            </div>
                        </div>
                    </div>

                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="services-img">
                                    <img src="/img/service-details/service-details5.jpg" alt="Image" />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <h3 style={{fontFamily:'Digikala'}}>ادغام و تملیک</h3>
                                <p>ادغام و تملیک (M & A) یک اصطلاح کلی است که به تحکیم شرکت و یا دارایی ها اشاره دارد، هر چند بنا به پویایی‌هایی که در محیط کسب‌وکار وجود دارد، ادغام و قبضۀ مالکیت همواره اتفاق می‌افتد اما در سال‌های اخیر و با توجه به وضعیت اقتصادی پیش‌آمده و سیاست‌های استراتژیک اقتصادی دولت ج.ا.ا و نیاز شرکت‌ها به تأمین منابع مالی تازه، (داخلی و بین‌المللی) جهت پیاده‌سازی طرح‌های توسعه‌ای خود،  فضای کاری گسترده‌ای در این حوزه ایجاد شده است در این راستا سگال ونچرز می‌تواند مشتریان خود را از مرحلۀ اتخاذ استراتژی‌های مرتبط تا انجام تمامی رویه‌های قانونی و اجرایی همراهی نماید.</p>
                            </div>
                        </div>
                    </div>


                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="services-img">
                                    <img src="/img/service-details/service-details5.jpg" alt="Image" />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <h3 style={{fontFamily:'Digikala'}}>تجدید ساختار شرکتی</h3>
                                <p>تجدید ساختار نوعی استراتژی شرکتی است که در آن کلیۀ ساختارهای شرکت اعم از ساختارهای قانونی، عملیاتی، مالکیتی و غیره، به منظور افزایش سودآوری و یا بهبود عملکرد سازمانی در جهت رفع نیازهای فعلی و مواجه با نیازهای آتی، دوباره سازماندهی می‌شود. از دیگر دلایل مهم تجدید ساختار می‌توان به تغییر ساختار سهام‌داری در اثر فرآیند ادغام و یا تملک و حتی واکنش در برابر یک بحران و یا تغییر عمده در کسب‌وکار نظیر ورشکستگی، اشاره کرد. سگال ونچرز با اتکا به قابلیت‌های علمی و عملیاتی متخصصان مجرب خود، طیف وسیعی از خدمات را در حوزۀ تجدید ساختار شرکت‌ها ارائه می‌دهد که از مهم‌ترین آن‌ها می‌توان به اصلاح ساختار مالی و سازمانی اشاره کرد.</p>
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

export default ServicesDetails;