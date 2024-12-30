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

const moshavershow = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="مشاور شو" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="مشاور شو" 
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
                        <h2>مشاور شو</h2>
                        <p>آیا شما هم به عنوان دانشجو دغدغه پیدا کردن مرکزی برای گذراندن دوره عملی دارید؟ یا اینکه فارغ التحصیل شده اید و مدت ها است که به دنبال محل کار متناسب با رشته دانشگاهی و علائق‌تان هستید؟ در هر صورت، این روزها، شما تنها فردی نیستید که در وضعیت نامطلوب بازار کار کشور، در حال تلاش برای رسیدن به شغلی ایده آل هستید. در اینکه کار نیست و از میزان استخدامی شرکت ها و سازمان های دولتی، به طرز چشمگیری کاسته شده، هیچ حرفی نیست.
     اما یکی از اصلی ترین دلایل بیکاری در کشورمان، نداشتن مهارت و توانایی کافی در انجام وظایف شغلی است. موضوعی که راه حل های مفیدی برای آن وجود دارد و کارگاه عملی برای دانشجویان، یکی از همین راه حل های کارآمد است.

    تامین مالی سگال، جهت توانمندسازی نیروی انسانی در رشته حقوق نسبت به راه اندازی کارگاه عملی بر روی پلتفرم تخصصی خود اقدام نموده است. دوره آموزشی برای دانشجویان مقطع کارشناسی و ارشد که در دانشگاه های سطح اول کشور در حال تحصیل هستند شرایطی را برای آنان فراهم می آورد تا دانشجویان بتوانند در یک شبکه تعاملی در کنار متخصصان، تجربه کسب نمایند. این کارگاه فرصت مغتنمی محسوب می‌گردد تا دانشجویان ضمن اخذ گواهینامه دوره، دانش خود را در عرصه عمل به مهارت تبدیل نمایند.
</p>

                        {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc generators on the Internet tend to repeat predefined chunks as necessary, making this the first generator.</p> */}
                    </div>
                    
                    {/* <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="services-img">
                                    <img src="/img/service-details/service-details5.jpg" alt="Image" />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <h3>Cardiac Arrhythmia</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc generators on the Internet tend to repeat predefined chunks as necessary, making this the first generator dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks.</p>
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
                                        <i className="bx bx-share-alt"></i> Share
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

export default moshavershow;