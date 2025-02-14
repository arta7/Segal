import React, { useEffect } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const MainBanner = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }


   
    
    return (     
        <>
            <div className="main-banner-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner-text">
                                        {/* <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <span>Smarter Service Care</span>
                                        </ScrollAnimation> */}

                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <h1>تامین مالی سگال</h1>
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua gravida. Risus commodo.</p>
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <div className="banner-btn">
                                                {/* <Link href="/appointment">
                                                    <a className="default-btn">
                                                        Book An Appointment
                                                    </a>
                                                </Link> */}
                
                                                <div
                                                    onClick={e => {e.preventDefault(); openModal()}}
                                                    className="default-btn active popup-youtube"
                                                > 
                                                   ورود به سامانه
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 pr-0">
                                    <div className="banner-img-wrap">
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <div className="banner-img">
                                                <img src="/img/home-one/home-one-banner.png" alt="Image" />
                                            </div>
                                        </ScrollAnimation>

                                        <div className="banner-shape">
                                            <img src="/img/home-one/home-one-shape.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                      
                    </div>
                </div>
                  
                <div className="first-facility-area" style={{width:'100vw',backgroundColor:'white',marginTop:100}}>
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="first-facility-item">
                                            <i className="flaticon-care"></i>
                                            <h3>هدایت</h3>
                                            <p>ارائه راهکارهای تخصصی</p>
                                        </div>
                                    </div>
                
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="first-facility-item">
                                        <i className="flaticon-online-learning"></i>
                                            <h3>حمایت</h3>
                                            <p>حفظ منافع ذینفعان</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="first-facility-item">
                                           
                                            <i className="flaticon-support"></i>
                                            <h3>پشتیبانی</h3>
                                            <p>تنوع در خدمات آنلاین</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </> 
    )
}

export default MainBanner;