import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer'; 
import Link from 'next/link';

const SignUp = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="بازیابی رمز عبور!" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="بازیابی رمز عبور!" 
                imgClass="bg-3" 
            />

            <div className="user-area-all-style recover-password-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form-action">
                                <div className="form-heading text-center">
                                    <h3 className="form-title">بازیابی رمز عبور!</h3>
                                    <p className="reset-desc">ایمیل خود را برای بازیابی رمز عبور وارد کنید. در صورت مشکل  <Link href="/contact"><a>با ما تماس بگیرید.</a></Link></p>
                                </div>
                                <form method="post">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" placeholder="Enter Email Address" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <Link href="/sign-in">
                                                <a className="now-log-in font-q">ورود به اکونت</a>
                                            </Link>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <p className="now-register">
                                               عضو نیستید? <Link href="/sign-up"><a className="font-q">ثبت نام</a></Link>
                                            </p>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn btn-two" type="submit">
                                                بازیابی رمز عبور
                                            </button>
                                        </div>
                                    </div>
                                </form>
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

export default SignUp;  