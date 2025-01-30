import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-top-area f-bg pt-100 pb-70" style={{ fontFamily: 'Digikala', textAlign: 'justify' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <Link href="">
                                    <a>
                                        <img src="/img/logo-footer.png" alt="Image" />
                                    </a>
                                </Link>

                                <p>سگال ونچرز، شبکه تخصصی مالی می باشد که بر اساس نیاز جامعه متخصصین کشور به ارائه خدمات مالی می پردازد.</p>

                                {/* <div className="social-area">
                                <ul className="header-content-right">
                            <li>
                                <a href="https://Twitter.com/Segalfunding_org" target="_blank">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li>
                            <li>
                            <a href="https://linkedin.com/company/Segalfunding" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/Segalfunding_org" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                            </li>
                            <li>
                                <a href="https://t.me/Segalfunding_org" target="_blank">
                                                <i className="bx bxs-paper-plane"></i>
                                            </a>
                            </li>
                        </ul>
                                </div> */}

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>پیوندها </h3>
                                <ul>
                                    <li>
                                        <a href="https://isti.ir/">
                                            معاونت فناوری ریاست جمهوری
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.seo.ir/">
                                            سازمان بورس اوراق بهادار
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.inif.ir/">
                                            صندوق نوآوری و شکوفایی
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://irvc.ir/">
                                            انجمن سرمایه گذاری خطرپذیر
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="#">
                                            Nuclear Magnetic
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Eye Treatment
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            X-Ray 
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col-lg-2 col-md-6">
                            <div className="single-widget">
                                <h3>پیوندهای خارجی</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Surgery & Radiology
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Children Care
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Orthopedics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Nuclear Magnetic
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Eye Treatment
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            X-Ray 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-widget open-time">
                                <h3>Opening Hours</h3>
                                <ul>
                                    <li>
                                        <span>Mon-Tue:</span>
                                        <span className="right">6:00 AM - 10:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Wed-Thu:</span>
                                        <span className="right">6:00 AM - 10:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Fry:</span>
                                        <span className="right">6:00 AM - 04:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Sun:</span>
                                        <span className="right">Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>ارتباط با ما </h3>
                                <ul>
                                    <li>
                                        <a href="tel:۰۲۱-۸۸۵۰۷۳۶۳">
                                            <i className="bx bx-phone-call"></i>
                                            <span> تلفن:</span>
                                            ۰۲۱-۸۸۵۰۷۳۶۳
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:hello@corf.com">
                                            <i className="bx bx-envelope"></i>
                                            <span>ایمیل:</span>
                                            info@segalventures.ir
                                        </a>
                                    </li>
                                    {/* <li>
                                        <i className="bx bx-location-plus"></i>
                                        <span>آدرس:</span> 
                                        تهران، خیابان شهید بهشتی، خیابان مفتح شمالی، خیابان هشتم، پلاک یک، واحد نهمکد پستی : ۱۵۸۷۸۱۵۴۳۴
                                    </li> */}
                                </ul>
                            </div>


                        </div>

                        <div className="col-lg-3 col-md-6" >


                            <div className="single-widget contact">
                                <h3>مجوزها</h3>
                                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <div >
                                        <Link href="https://logo.samandehi.ir/Verify.aspx?id=376029&p=xlaojyoegvkaobpduiwkpfvl">
                                            <a>
                                                <img src="\img\digitallogo.png" alt="Image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div >

                                        {/* <Link href="https://trustseal.enamad.ir/?id=568362&amp;amp;Code=CWrBfJEyb8ZDn2Ps58yxK0yZmpVjGY0I">
                                    <a>
                                        <img src="\img\inamad.png" alt="Image" />
                                    </a>
                                </Link> */}
                                      
                                        <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=568362&Code=CWrBfJEyb8ZDn2Ps58yxK0yZmpVjGY0I'>
                                        <img referrerpolicy='origin' src='\img\inamad.png' alt=''
                                         code='CWrBfJEyb8ZDn2Ps58yxK0yZmpVjGY0I' />
                                         </a>
                                            
                                 
                                    </div>
                                    <div >

                                        <Link href="https://tehran.irannsr.org/fa/page/104366-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D9%87-%D8%A7%D8%B9%D8%B6%D8%A7.html?ctp_id=1086&id=31324">
                                            <a>
                                                <img src="\img\irannsr.png" alt="Image" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>

            </footer>

            <div className="footer-bottom-area" style={{ fontFamily: 'Digikala' }}>
                <div className="container">
                    <div className="copy-right">
                        <p>Copyright &copy; {currentYear} تمامی حقوق مادی و معنوی  محفوظ و متعلق به،  سگال ونچرز  می باشد</p>
                        {/* Copyright © 2022 تمامی حقوق مادی و معنوی، محفوظ و متعلق به گروه سگال می باشد */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;