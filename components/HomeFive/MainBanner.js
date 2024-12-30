import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
    return (      
        <div className="main-banner-area-five" style={{fontFamily:'Digikala',marginTop:30}}>
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-7">
								<div className="banner-text"> 
									{/* <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                        <span>اولین شبکه هوشمند مشاوره</span>
                                    </ScrollAnimation> */}

                                    <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
									    <h2 style={{fontFamily:'Digikala'}}>سگال ونچرز؛ راهکار نوین تامین مالی</h2> 
                                    </ScrollAnimation>

                                    <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
									    <p>سگال ونچرز، شبکه تخصصی مالی می باشد که بر اساس نیاز جامعه متخصصین کشور به ارائه خدمات مالی می پردازد.</p>
                                    </ScrollAnimation>

                                    <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                        {/* <div className="banner-btn">
                                            <Link href="/appointment">
                                                <a className="default-btn">
												ورود به سامانه
                                                </a>
                                            </Link>
                                        </div> */}
                                    </ScrollAnimation>
								</div>
							</div>
		
							<div className="col-lg-5 pr-0">
								<div className="banner-img-wrap">
									<ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                        <div className="banner-img">
                                            <img src="/img/home-five/home-five-banner.png" alt="Image" />
                                        </div>
                                    </ScrollAnimation>
                                    
									<div className="shapes">
										<img src="/img/home-five/home-five-shape-3.png" alt="Image" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		


			

			<div className="shape">
				<img src="/img/home-five/home-five-shape-1.png" alt="Image" />
			</div>
			<div className="shape-2">
				<img src="/img/home-five/home-five-shape-2.png" alt="Image" />
			</div>
			
		</div>
    )
}

export default MainBanner;