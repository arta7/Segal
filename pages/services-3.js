import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Link from 'next/link'; 

const Services3 = () => {

    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="مرکز مشاوره" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="مرکز مشاوره" 
                imgClass="bg-2" 
            />

<div className="second-facility-area pb-70" style={{marginTop:20,fontFamily:'Digikala'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="second-facility-item">
                                <img src="/img/facility-img/facility-icon1.png" alt="Image" />
                                <h3 style={{fontFamily:'Digikala'}}>برترین   مشاوران کشور</h3>
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="second-facility-item">
                                <img src="/img/facility-img/facility-icon2.png" alt="Image" />
                                <h3 style={{fontFamily:'Digikala'}}>پشتیبانی سریع</h3>
                               
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="second-facility-item">
                                <img src="/img/facility-img/facility-icon3.png" alt="Image" />
                                <h3 style={{fontFamily:'Digikala'}}>پیشرو در تکنولوژی و فن آوری</h3>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-area pb-70" style={{fontFamily:'Digikala'}}>
                <div className="container">
                    <div className="section-title">
                        <span className="top-title" style={{fontFamily:'Digikala'}}>خدمات ما</span>
                        <h2 style={{fontFamily:'Digikala'}}> انواع خدمات مشاوره </h2>
                        <p>در تامین مالی سگال، بر اساس نیاز روز افزون جامعه، متخصصین کشور آماده پاسخگویی و ارائه مشاوره در حوزه های ذیل به صورت حرفه ای و تخصصی می باشند:</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-man"></span>
                                <h3 style={{fontFamily:'Digikala'}}> مشاوره بیمه و تامین اجتماعی </h3>
                                <p> 
                                بیمه یکی از آشنا ترین واژه‌هاییست که هر روزه در ادبیاتمان از آن سخن می‌گوییم و به یک مسئله عام و فراگیر هم تبدیل شده است. بیمه درحقیقت یک قرارداد حقوقی بین شما و یک شرکت بیمه (بیمه‌گر) است که بر اساس آن شرکت بیمه متعهد می شود در صورت وقوع حادثه و بیماری و ازکارافتادگی خسارت واردشده به شما را تا سقف مشخصی که در بیمه‌نامه تعیین شده، جبران کند. به طور کلی بیمه‌ها اعم از بیمه اتومبیل و مسافرت یا بازنشستگی و عمر و حتی بیمه‌های درمانی و تکمیلی در سه دسته بیمه اشخاص، بیمه اموال و بیمه مسئولیت تقسیم‌بندی می‌شوند. 
                                </p>
                                
                                <Link 
                               href={{pathname: "/consultingservices",
                                query: {
                                  data:1
                                }
                              }}
                              as={'/consultingservices'}
                                >
                                    <a className="read-more">
                                       بیشتر بخوانید <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div 
                            className="single-services"
                            >
                                <span className="flaticon-liver"></span>
                                <h3 style={{fontFamily:'Digikala'}}> مشاوره امور حقوقی</h3>
                                <p> مشاوره گرفتن از متخصصین برای آگاهی در اموری که به آنها اطلاع یا اشرافی نداریم امری پسندیده است که توسط هر شهروندی که به اصل “پیشگیری بهتر از درمان” اعتقاد و ایمان دارد توصیه می شود. بسیاری از مشکلات و دردسرهایی که اشخاص با آن مواجه می شوند به این دلیل است که در مواجه با یک موضوع تخصصی مثلاً در مسائل حقوقی، از نظرات افراد آگاه به عنوان " مشاور حقوقی" بهره نگرفته اند. </p>

                                <Link href={{pathname: "/consultingservices",
                                query: {
                                  data:2
                                }  
                              }}
                              as={'/consultingservices'}
                              >
                                    <a className="read-more">
                                        بیشتر بخوانید  <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-kidney"></span>
                                <h3 style={{fontFamily:'Digikala'}}>مشاوره امور مالیاتی</h3>
                                <p>بسیاری از صاحبان کسب و کارها بر این باورند که با انجام کارها توسط خودشان بهتر میتوانند پول و منابع را حفظ کنند اما واقعا چنین نیست. قوانین مالیاتی به طور مداوم در حال تغییر هستند و پیگیری این تغییرات برای افراد عادی بسیار دشوار است. عدم تسلط به قوانین مالیاتی باعث میشود تا خطر اشتباهات مالیاتی و مدیریت نامناسب مسائل مالیاتی افزایش یابد. یک مشاور خبره میتواند با تسلط به این قوانین و آگاهی از قوانین جدید کمک بزرگی به بهره مندی از قوانین کند. همچنین گاهی به علت نداشتن آگاهی کافی از قوانین ممکن است نتوانید به خوبی از مزیت های مالیاتی و روش های تخفیف قانونی آن بهره مند شوید.</p>

                                <Link  href={{pathname: "/consultingservices",
                                query: {
                                  data:3
                                }
                              }}>
                                    <a className="read-more">
                                   بیشتر بخوانید <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-heart"></span>
                                <h3 style={{fontFamily:'Digikala'}}>مشاوره تامین اجتماعی</h3>
                                <p>      تأمین اجتماعی از حقوق بنیادین اعضای جامعه است که در قانون اساسی جمهوری اسلامی ایران از آن به‌ عنوان یکی از وظایف و تکالیف دولت تعبیر شده است. هم کارفرمایان و هم کارگران در طول حیات کاری خود قطعا با برخی مسائل روابط کار روبرو خواهند شد که در بسیاری موارد حل آنها نیازمند دریافت خدمات مشاوره بیمه کارگری و قانون کار است. مواردی که گاه می‌توان با گرفتن یک مشاوره آن را حل کرد تا آنکه کار به دعاوی حقوقی کارگری و کارفرمایی بکشد.</p>

                                <Link  href={{pathname: "/consultingservices",
                                query: {
                                  data:4
                                }
                              }}>
                                    <a className="read-more">
                                    بیشتر بخوانید  <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-brain"></span>
                                <h3 style={{fontFamily:'Digikala'}}>مشاوره سرمایه گذاری </h3>
                                <p>متخصصان سرمایه گذاری با در نظر گرفتن تحمل ریسک و زیان مشتریان به آن‌ها مشاوره می‌دهند. آن‌ها با مدیریت مستقیم یا غیرمستقیم به بررسی دارایی مراجعه کنندگان پرداخته و با توجه به توانایی‌های مالی فرد برای سرمایه گذاری در بازارهای سرمایه، راهکارهای خود را پیشنهاد می‌دهند تا مشتریان به سوددهی برسند.</p>

                                <Link href={{pathname: "/consultingservices",
                                query: {
                                  data:5
                                }
                              }}>
                                    <a className="read-more">
                                     بیشتر بخوانید <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-walker"></span>
                                <h3 style={{fontFamily:'Digikala'}}>مشاوره کسب و کار</h3>
                                <p>راه انداختن یک کسب و کار شخصی همانقدر که وسوسه برانگیز و جذاب است می‌تواند سخت و طاقت فرسا هم باشد. اما برای اینکه در این راه موفق شوید خوب است از توصیه های یک مشاور کسب و کار بهره ببرید. با توجه به وضع اقتصادی فعلی، بسیاری از مشاغل در معرض خطر قرار گرفته‌اند. این بحران‌ها، هم متوجه کسب و کارهای قدیمی شده است و هم گریبان جوانان تشنه موفقیت در کسب و کار را گرفته است.</p>

                                <Link href={{pathname: "/consultingservices",
                                query: {
                                  data:6
                                }
                              }}>
                                    <a className="read-more">
                                    بیشتر بخوانید <i className="bx bx-plus"></i>
                                    </a>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
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

export default Services3;