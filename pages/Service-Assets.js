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

const ServiceAssetss = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="خدمات مدیریت دارایی"
                homePageUrl="/"
                homePageText="صفحه اصلی"
                activePageText="خدمات مدیریت دارایی"
                imgClass="bg-1"
            />

            <div className="services-details-area ptb-100" style={{fontFamily:'Digikala',textAlign:'justify'}}>
                <div className="container">
                    <div className="row">
                     
                    </div>


                    <div className="services-details-text">
                        <p style={{ fontFamily: 'Digikala' }}>
                            مدیریت دارایی، شکلی از مدیریت بر دارایی‌های ملموس و غیرملموس است. این مدیریت به نحوی انجام می‌شود که با مرور زمان از ارزش دارایی‌ها کاسته نشود و به صورت مؤثر مورد استفاده قرار گیرد. متخصصان مدیریت ریسک به کمک صاحبان دارایی می‌آیند. این همراهی به شکلی خواهد بود که ریسک‌های بازار سرمایه‌گذاری و عدم اطلاعات کافی از شناخت بازار را مرتفع می‌سازد و سازماندهی و استفاده بهینه از منابع را در جهت ارزش‌آفرینی بیشتر دارایی‌ها به پیش می‌برد. مدیریت بر دارایی به حدی تخصصی و نیازمند مهارت‌های چندگانه است که شرکت‌هایی متشکل از مدیران حرفه‌ای دارایی، مختص ارائه چنین خدماتی تشکیل شده‌اند.
                        </p>
                    </div>




                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                           

                            <div className="col-lg-15">
                                <h3 style={{ fontFamily: 'Digikala' }}>مزایای مدیریت دارایی برای سازمان‌ها</h3>
                                <p>مدیریت بر دارایی‌های سازمانی در کسب و کارها، صنایع و شرکت‌ها یکی از مسائل بسیار مهم در جلوگیری از کاهش سرمایه و حفظ ارزش‌های مادی است. مدیریت این دارایی‌ها از هر لحاظ حائز اهمیت است که در ادامه به معرفی مزایای این مدیریت می‌پردازیم.</p>
                                <ul>
                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> شناسایی دارایی‌های در خطر یا کاذب : </b>
                                        دارایی‌هایی که به هر دلیلی در اختیار مالک آن نباشند اما در لیست دارایی‌ها ثبت شده باشند را دارایی کاذب می‌گویند. دارایی که به سرقت رفته باشد یا دچار استهلاک و فرسایش و در نتیجه کاهش ارزش زیاد شده باشد، دارایی کاذب است.
                                    </li>


                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> پیش‌بینی هزینه و بودجه : </b>
                                        زمانی که هزینه‌های خرید و راه‌اندازی و نگهداری یک دارایی مشخص باشد، برای سرمایه‌گذاری در آینده می‌توان برآورد هزینه صحیح‌تری داشت و تصمیم‌های بهتری اتخاذ کرد.
                                    </li>


                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}>دسترسی به ارزش به‌روزشده دارایی‌ها : </b>
                                        رصد آنی دارایی و دسترسی به ارزش به‌روزشده دارایی‌ها، نقش حیاتی در تصمیم‌گیری‌های مهم مالی و سرمایه‌گذاری دارند.
                                    </li>



                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}>دسترسی به اطلاعات و جزئیات دقیق :   </b>
                                        دسترسی به جزئیات اطلاعات می‌تواند میزان رشد یا کاهش و تخریب و استهلاک هر دارایی را مشخص کند. به این ترتیب ظرفیت هر دارایی و نحوه عملکردش مشخص خواهد شد.

                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> بهینه‌سازی فعالیت‌های اجرایی :   </b>
                                        دسترسی به جزئیات اطلاعات می‌تواند میزان رشد یا کاهش و تخریب و استهلاک هر دارایی را مشخص کند. به این ترتیب ظرفیت هر دارایی و نحوه عملکردش مشخص خواهد شد.

                                    </li>



                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> بهبود چرخه مالی :  </b>
                                        با پیاده‌سازی سیستم مدیریت دارایی می‌توان نقش تمامی دارایی‌ها را در سازمان شناخت و با کمترین ریسک، ارزش دارایی را حفظ و حتی در موقعیت مناسب افزایش داد.
                                    </li>



                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                           

                            <div className="col-lg-15">
                                <h3 style={{ fontFamily: 'Digikala' }}>مزایای مدیریت دارایی برای افراد</h3>
                                <p>مدیریت بهینه دارایی به ریسک کمتر و اطمینان بیشتر در سرمایه‌گذاری‌ها منجر می‌شود. مزایای مدیریت بر دارایی افراد به اختصار در ادامه آورده می‌شود.</p>
                                <ul>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        ارزیابی و بررسی تفکیکی و تجمیعی تمامی دارایی‌ها
                                    </li>


                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        کاهش و مدیریت ریسک‌های موجود در نگهداشت یا فروش دارایی‌ها
                                    </li>


                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        بهبود کارایی سرمایه‌گذاری با بررسی روندهای سرمایه‌گذاری به‌روز و تحولات موجود در بازار
                                    </li>



                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        مدیریت زمان و واکنش سریع به موارد مخاطره‌آمیز بازارهای سرمایه‌گذاری و فاکتورهای ارزش‌گذاری دارایی
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        سازماندهی سبد دارایی به شکلی مؤثر و قابل ارتقا
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>






                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                            

                            <div className="col-lg-15">
                                <h3 style={{ fontFamily: 'Digikala' }}>معرفی انواع مدیریت دارایی</h3>
                                <ul>
                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> مدیریت دارایی مالی FAM : </b>
                                        دارایی‌ها را در صندوق سرمایه‌گذاری، سهام، اوراق قرضه، معاملات سلف و مشتقات آنها صرف و سرمایه‌گذاری می‌کند.
                                    </li>


                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> مدیریت دارایی ثابت :  </b>
                                        امکانات ارتباطی و دسترسی، دارایی زیرساختی محسوب می‌شوند. این دارایی‌ها عبارتند از راه، پل، جاده، وسایل حمل و نقل، اینترنت، برق و تلفن. هدف مدیریت زیرساختی توسعه، بهبود و جایگزینی امکانات رفاهی است.
                                    </li>


                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> مدیریت دارایی زیرساختی: </b>
                                        رصد آنی دارایی و دسترسی به ارزش به‌روزشده دارایی‌ها، نقش حیاتی در تصمیم‌گیری‌های مهم مالی و سرمایه‌گذاری دارند.
                                    </li>



                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> 	مدیریت دارایی املاک و مستغلات:  </b>
                                        در این نوع مدیریت هزینه شدن منابع مالی بیشتر به سمت خرید و ساخت املاک تجاری است.

                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> 	مدیریت دارایی  IT یا مدیریت دارایی فناوری اطلاعات ITAM :   </b>
                                        فناوری اطلاعات شامل سیستم‌های کامپیوتری، پتنت یا ثبت اختراع، مجوز، اپلیکیشن شبکه‌ها می‌شود که مدیریت آنها به معنای حفظ حقوق موارد غیرمادی و به‌روزرسانی و ارتقای دارایی‌هایی است که به صنعت فناوری اطلاعات مرتبط هستند.
                                    </li>



                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}> مدیریت دارایی دیجیتال DAM :  </b>
                                        دارایی دیجیتال شامل محتوا، حضور در رسانه‌های اجتماعی، وب‌سایت‌ها، رسانه‌ها و سایر دارایی‌های معنوی از این دست دارایی‌ها شمرده می‌شود. مدیریت بر دارایی دیجیتال به معنای نگهداری و حفظ هویت این دارایی‌ها است.
                                    </li>

                                    <li style={{ fontFamily: 'Digikala' }}>
                                        <i className="flaticon-tick"></i>
                                        <b style={{ fontFamily: 'Digikala' }}>مدیریت دارایی سازمانی EAM :   </b>
                                        دارایی سازمانی شامل دارایی ملموس و دارایی ناملموس هر سازمان می‌شود. زیرساخت، نرم افزار، اسناد، املاک و مواردی نظیر این در دسته دارایی سازمانی قرار می‌گیرند.
                                    </li>



                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-15">
                        <h3 style={{ fontFamily: 'Digikala' }}>ارتباط بورس و مدیریت دارایی</h3>
                        <p>سرمایه‌گذاری در بورس به دو شیوه مستقیم و غیرمستقیم انجام می‌شود. خدمات مدیریتی دارایی شیوه غیرمستقیم سرمایه‌گذاری در بورس است. سرمایه‌گذاری در بورس یکی از شناخته‌شده‌ترین شیوه‌های مدیریتی دارایی است. در شرایطی که پیچیدگی بازار بورس به وجود می‌آورد، استفاده از خدمات مدیریتی دارایی می‌تواند به سرمایه‌گذاران کمک کند. صندوق‌های درآمد ثابت و سهامی از بهترین گزینه‌ها برای مشارکت و افزایش میزان ارزش دارایی افراد و سازمان‌هایی است که قصد ندارند شخصاً در بازار بورس فعالیت کنند.
صندوق سرمایه‌گذاری مشترک که یکی از مقاصد سرمایه‌گذاری برای مدیریت دارایی است، توسط شرکت‌های سبدگردان ارائه می‌شود. ترکیب دارایی در این صندوق‌ها بر عهده تحلیل‌گران حرفه‌ای در بازار است. صندوق‌های سرمایه‌گذاری مشترک بر اساس ترکیب دارایی تفکیک می‌شوند. بیشترین دارایی این صندوق‌ها از اوراق و سپرده‌های بانکی تشکیل می‌شود. سرمایه‌گذاری در این صندوق‌ها بدون ریسک است و سود به صورت منظم محاسبه و پرداخت می‌شود.
</p>

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

            export default ServiceAssetss;