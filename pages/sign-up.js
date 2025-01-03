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
                pageTitle="ثبت نام" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="ثبت نام" 
                imgClass="bg-2" 
            />

            <div className="user-area-all-style sign-up-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Create an account!</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-form-action">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <button className="default-btn" type="submit">
                                                Google
                                            </button>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <button className="default-btn" type="submit">
                                                Facebook
                                            </button>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <button className="default-btn" type="submit">
                                                Twitter
                                            </button>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" placeholder="First Name" />
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12 ">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" placeholder="Enter your Username" />
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="password" placeholder="Password" />
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12 ">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="password" placeholder="Confirm Password" />
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                                            <div className="agree-label">
                                                <input type="checkbox" id="chb1" />
                                                <label htmlFor="chb1">
                                                    I agree with Corf <a href="/privacy-policy">Privacy Policy</a> & <a href="/terms-conditions">Terms  Conditions</a>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn btn-two" type="submit">
                                                Sign Up
                                            </button>
                                        </div>
                                        
                                        <div className="col-12">
                                            <p className="account-desc">
                                                Already have an account? <Link href="/log-in"><a>Log In</a></Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="sign-in-img"></div>
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