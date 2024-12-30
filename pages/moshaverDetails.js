import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer'; 
import dynamic from 'next/dynamic';;
import { useRouter } from 'next/router'

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
    const router = useRouter();
    const data = router.query;
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

            <div className="services-details-area ptb-100">
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
                        <h2>{data.title}</h2>
                    
                        <p>{data.data}</p>
                    </div>
                    
                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="services-img">
                                    <img src="/img/service-details/service-details5.jpg" alt="Image" />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <h3>تامین مالی سگال</h3>
                                <p>شبکه متشکل از مشاوران برتر در حوزه های مختلف بوده که شما میتوانید در سریعترین زمان و به بهترین روش ممکن برای رفع مشکلات یا مسائل خود با آنها مشورت کنید.</p>
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