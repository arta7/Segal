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
                pageTitle="دفتر کار آنلاین" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="دفتر کار آنلاین" 
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
                        <h2 style={{fontFamily:'Digikala'}}>دفتر کار آنلاین</h2>
                        <p>کارشناسان حقوقی پس از گرفتن پروانه وکالت باید اقدام به راه اندازی کسب و کار خود کنند. بعضی از وکلا همان ابتدا دفتر کار اجاره می‌کنند. بعضی از وکلا نیز در شهرستان دفتر دارند ولی می‌خواهند در کلان شهرها نیز فعالیت کنند، اما اجازه راه اندازی دفتر در کلان شهر را ندارند. دسته دیگری از وکلا نیز هستند که ساکن کلانشهر هستند اما نمره کافی برای راه اندازی دفتر را ندارند.

وجه مشترک تمامی این وکلا، چه دفتر کار داشته باشند و چه نداشته باشند، این است که برای جذب، نوبت دهی و مدیریت پرونده مراجعان به یک ابزار هوشمند نیاز دارند. بعضی از وکلا شماره تلفن همراه خود را در اختیار مراجعان قرار می‌دهند که اصلاً راهکار مناسبی نیست و وجهه کاری وکیل را نزد مراجعان به شدت خدشه دار می‌کند.
</p>

                        {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc generators on the Internet tend to repeat predefined chunks as necessary, making this the first generator.</p> */}
                    </div>
                    
                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="services-img">
                                    <img src="/img/service-details/service-details5.jpg" alt="Image" />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <h3 style={{fontFamily:'Digikala'}}>الزامات قانونی برای وکلاء</h3>
                                <p>     وفق ماده ۴۳ قانون وکالت و نظریه 9719 مورخ 20/07/1379 کمیسیون امور حقوقی کانون وکلای دادگستری، وکلاء باید دارای دفتر منظم بوده و مراسلات و مکاتباتی که راجع به امر وکالت است ثبت و ضبط نمایند، طرز تنظیم و نگاهداری آن را دفتر بازرسی و تشکیلات وکلاء معین خواهد نمود و حفظ دفتر و ته چک قبوض (اوراق واجد اعتبار مربوط به موکل) تا ده سال پس از تاریخ ختم پرونده اجباری است</p>
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
                                <h3 style={{fontFamily:'Digikala'}}>معرفی دفتر کار آنلاین</h3>
                                <p>حجم انبوه پرونده هاي دعاوی و لزوم بايگاني، دسته بندي، استخراج اطلاعات و اسناد پرونده ها و زمان بر بودن مطالعه و رسيدگي به پرونده ها همواره يكي از دغدغه‌های کارشناسان حقوقي بوده است. مديريت و ذخيره اطلاعات پرونده هاي دعاوي و در نهايت پايش و استخراج نتـايج و گزارشات جامع، پويا، سريع و مديريتي مهمترين اهداف شبکه است. امكان مطالعه سريع و دقيـق پرونده جهت بررسي و تنظيم لـوايح، اعتـراض و تجديـدنظرخواهي بـا اسـتفاده از قابليـت جسـتجو در سـوابق و مشاهده تصاوير اسناد پرونده از مزاياي مهمي است كه دفتر کار آنلاین را براي كارشناسـان حقـوقي و وکلا كارآمـد و مفيد نموده است.  

دفتر کار آنلاین، بستری تحت وب بوده که با هدف مکانیزه سازی کلیه فرآیندهای مربوط به مراجعین از مشاوره، عقد قرارداد و ارائه خدمات به منظور ذخیره سازی متمرکز و یکپارچه اطلاعات پرونده ها و نامه ها، حفظ امنیت اطلاعات با در نظر گرفتن مالکیت داده، تسریع انجام چرخه ها و تعاملات اداری و دریافت سریع پاسخ ها و ارجاعات، ایجاد گزارشات تجمیعی، ارائه گزارشات آماری و نموداری تولید شده است.

راه اندازی دفتر کار آنلاین، ضمن انعکاس سریعتر وضعیت پرونده ها، پیگیری و کنترل آسان تر پرونده ها و نامه ها، و نظارت راحت و دقیق تر بر روند اجرا و تسریع رسیدگی را برای دفاتر حقوقی به همراه خواهد داشت.
</p>
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
                          <div className="col-lg-8" style={{fontFamily:'Digikala'}}>
							<h2 style={{fontFamily:'Digikala'}}> مزایای دفتر کار آنلاین</h2>

							<ul>
								<li>
									<i className="flaticon-tick"></i> 
                                    
										ارتقاء سطح کیفی پاسخگویی به مراجعین
								</li>
								<li>
									<i className="flaticon-tick"></i>
										نظارت بر عملکرد و هدایت پرونده دعاوی
								</li>
								<li>
									<i className="flaticon-tick"></i>
									یکپارچه سازی کلیه فرآیندهای دعاوی مراجعین
								</li>
								<li>
									<i className="flaticon-tick"></i>
									ایجاد بایگانی مکانیزه کلیه پرونده های دعاوی 
								</li>

                                <li>
									<i className="flaticon-tick"></i>
										ایجاد بستر تبادل دانش و تجارب بین اعضا 
								</li>

                                <li>
									<i className="flaticon-tick"></i>
										تمرکز بر روی خدمات ویژه حقوقی و معرفی پرونده ها بر اساس تخصص اعضا
								</li>

                                <li>
									<i className="flaticon-tick"></i>
										اطلاع رسانی از تمامی مراحل رسیدگی و روند پرونده مراجعین
								</li>

                                <li>
									<i className="flaticon-tick"></i>
                                  	سهولت در دسترسی و ارائه خدمات 24 ساعته از سوی اعضا
								</li>

                                <li>
									<i className="flaticon-tick"></i>
										استقرار سیستم گزارشات پویا
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

export default ServicesDetails;