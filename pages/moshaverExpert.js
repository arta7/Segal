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
                pageTitle="مشاوره تخصصی" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="مشاوره تخصصی" 
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

                    <div className="col-lg-6">
                            <div className="about-content">
                        <h2 style={{fontFamily:'Digikala'}}>دعوت به همکاری مشاور متخصص</h2>
                        <p>در دنیای امروز و با توجه به پیچیده تر شدن جامعه، افراد با مسائل و مشکلات متعددی روبرو هستند. حضور یک مشاور متخصص و بهره‌مندی از دانش و تجارب آن، در تصمیم‌گیری، پشتیبانی و حمایت امری ضروری و لازم می‌باشد.</p>

                        <p>تامین مالی سگال با در نظر داشتن مشکلات و معضلاتی که ذینفعان با آن روبرو هستند، خدمات مشاوره آنلاین خود را به صورت تخصصی در زمینه‌های ذیل ارائه می نماید:</p>

                        <ul >
								<li>
									<i ></i>
										امور مالیاتی
								</li>
								<li>
                                <i ></i>
                                   	امور حقوقی
								</li>
								<li>
                                <i ></i>
										امور بیمه و تامین اجتماعی
								</li>
								<li>
                                <i ></i>
                                    	کسـب و کار
								</li>

								<li>
                                <i ></i>
										کارشناس رسمی 
								</li>

								<li>
                                <i ></i>
										سرمایه گذاری
								</li>

                                <li>
									<i ></i>
                                   	امور تحصیلی و مهاجرت
								</li>

                                <li>
                                <i ></i>
                                   	امور خانواده
								</li>

								
							</ul>



                        <p>لذا تامین مالی سگال به منظور توسعه و ارتقاء سطح کیفی خدمات خود، از مشاوران خبره و مجرب دعوت به همکاری می‌نماید. با استفاده از این فرصت، مشاوران می‌توانند:</p>
               
                        <ul >
								<li>
                                <i ></i>
										خدمات خود را بدون محدویت به تمامی افراد در هر نقطه ارائه نمایند.
								</li>
								<li>
                                <i ></i>
                                    	از بسیاری از هزینه‌ها برای راه اندازی دفتر مشاوره، استخدام کارمند، تبلیغات و ... صرفه‌نظر نمایند.
								</li>
								<li>
                                <i ></i>
                                   	هر میزان درآمدی که مدنظر دارند را با مشاوره آنلاین و ارائه خدمات تخصصی، کسب نمایند.
								</li>
								<li>
                                <i ></i>
                                    	بدون صرف کمترین زمان و هزینه برای رفت و آمد به محل کار، خدمات خود را به کاربران ارائه دهند.
								</li>

								<li>
								<i ></i>
                                    	بدون ملاقات حضوری، در هر زمان و مکانی اقدام به مشاوره نمایند.
								</li>


								
							</ul>   
               
                        <p>مشاوران در پلتفرم تامین مالی سگال می‌توانند با برنامه زمانبندی شده اختصاصی، آمادگی خود را جهت ارائه خدمات به ذینفعان اعلام نمایند. </p>
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

export default moshavershow;