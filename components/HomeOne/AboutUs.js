import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (      
        <div className="about-area pb-130" style={{marginTop:100,fontFamily:'Digikala'}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-img">
							<img src="/img/about/about1.png" alt="Image" />

							{/* <div className="shape-1">
								<img src="/img/about/about-shape-1.png" alt="Image" />
							</div>

							<div className="shape-2">
								<img src="/img/about/about-shape-2.png" alt="Image" />
							</div>

							<div className="shape-3">
								<img src="/img/about/about-shape-3.png" alt="Image" />
							</div> */}
						</div>
					</div>

					<div className="col-lg-6" >
						<div className="about-content">
							<span className="top-title" style={{fontFamily:'Digikala'}}>تخصص ما</span>
							<h2 style={{fontFamily:'Digikala'}}>خدمات ویژه سگال ونچرز</h2>
							<p>سگال ونچرز در راستای توسعه کسب و کار متخصصان کشور امکانات ذیل را ارائه می نماید:</p>
							
							<ul >
								<li style={{fontFamily:'Digikala'}}>
									<i className="flaticon-tick" ></i>
									مشاوره مدیریت دارایی
								</li>
								<li style={{fontFamily:'Digikala'}}>
									<i className="flaticon-tick"></i>
									مشاوره سرمایه گذاری 
								</li>
								<li style={{fontFamily:'Digikala'}}>
									<i className="flaticon-tick"></i>
									مشاوره تامین مالی
								</li>
								<li style={{fontFamily:'Digikala'}}>
									<i className="flaticon-tick"></i>
									مشاوره اعتبار مالیاتی 
								</li>

								
							</ul>

                            {/* <Link href="/about">
						    	<a className="default-btn">درباره تامین مالی سگال</a>
                            </Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUs;