import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer'; 
import Link from 'next/link';
import BlogSidebar from '../components/Blog/BlogSidebar';

const BlogLeftSidebar = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Blog Left Sidebar" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="Blog Left Sidebar" 
                imgClass="bg-3" 
            />  

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="blog-left-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/img/blog/blog2.jpg" alt="Image" />
                                                </a>
                                            </Link>

                                            <span>11 May 2020</span>
                                            <div className="blog-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">Treatment</a>
                                                    </li>
                                                </ul>

                                                <Link href="/blog-details">
                                                    <a>
                                                        <h3>What Can I Do To Prevent Myself & prevent Disease</h3>
                                                    </a>
                                                </Link>

                                                <Link href="/blog-details">
                                                    <a className="read-more">
                                                        Read More <i className="bx bx-plus"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/img/blog/blog3.jpg" alt="Image" />
                                                </a>
                                            </Link>
                                            <span>13 May 2020</span>
                                            <div className="blog-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">COVID-19</a>
                                                    </li>
                                                </ul>

                                                <Link href="/blog-details">
                                                    <a>
                                                        <h3>CCU For Emergency  Services  & Medical support</h3>
                                                    </a>
                                                </Link>

                                                <Link href="/blog-details">
                                                    <a className="read-more">
                                                        Read More <i className="bx bx-plus"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/img/blog/blog4.jpg" alt="Image" />
                                                </a>
                                            </Link>
                                            
                                            <div className="blog-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">Admin</a>
                                                    </li>
                                                    <li>
                                                        Date: 14/05/2020
                                                    </li>
                                                </ul>

                                                <Link href="/blog-details">
                                                    <a>
                                                        <h3>The blood sample</h3>
                                                    </a>
                                                </Link>

                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, iusto. In, impedit ab quidem harum consectetur aut elit</p>

                                                <Link href="/blog-details">
                                                    <a className="read-more">
                                                        Read More <i className="bx bx-plus"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/img/blog/blog5.jpg" alt="Image" />
                                                </a>
                                            </Link>

                                            <div className="blog-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">Admin</a>
                                                    </li>
                                                    <li>
                                                        Date: 15/05/2020
                                                    </li>
                                                </ul>

                                                <Link href="/blog-details">
                                                    <a>
                                                        <h3>Stethoscope and notepad</h3>
                                                    </a>
                                                </Link>

                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, iusto. In, impedit ab quidem harum consectetur aut elit</p>

                                                <Link href="/blog-details">
                                                    <a className="read-more">
                                                        Read More <i className="bx bx-plus"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/img/blog/blog6.jpg" alt="Image" />
                                                </a>
                                            </Link>
                                        
                                            <div className="blog-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">Admin</a>
                                                    </li>
                                                    <li>
                                                        Date: 16/05/2020
                                                    </li>
                                                </ul>

                                                <Link href="/blog-details">
                                                    <a>
                                                        <h3>Doctor is scanning</h3>
                                                    </a>
                                                </Link>

                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, iusto. In, impedit ab quidem harum consectetur aut elit</p>

                                                <Link href="/blog-details">
                                                    <a className="read-more">
                                                        Read More <i className="bx bx-plus"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/img/blog/blog7.jpg" alt="Image" />
                                                </a>
                                            </Link>
                                        
                                            <div className="blog-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">Admin</a>
                                                    </li>
                                                    <li>
                                                        Date: 17/05/2020
                                                    </li>
                                                </ul>

                                                <Link href="/blog-details">
                                                    <a>
                                                        <h3>The ENT specialist</h3>
                                                    </a>
                                                </Link>

                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, iusto. In, impedit ab quidem harum consectetur aut elit</p>

                                                <Link href="/blog-details">
                                                    <a className="read-more">
                                                        Read More <i className="bx bx-plus"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/img/blog/blog8.jpg" alt="Image" />
                                                </a>
                                            </Link>
                                            
                                            <div className="blog-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">Admin</a>
                                                    </li>
                                                    <li>
                                                        Date: 18/05/2020
                                                    </li>
                                                </ul>

                                                <Link href="/blog-details">
                                                    <a>
                                                        <h3>Monitoring the pulse</h3>
                                                    </a>
                                                </Link>

                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, iusto. In, impedit ab quidem harum consectetur aut elit</p>

                                                <Link href="/blog-details">
                                                    <a className="read-more">
                                                        Read More <i className="bx bx-plus"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/img/blog/blog9.jpg" alt="Image" />
                                                </a>
                                            </Link>
                                            
                                            <div className="blog-content">
                                                <ul>
                                                    <li>
                                                        <a href="#">Admin</a>
                                                    </li>
                                                    <li>
                                                        Date: 19/05/2020
                                                    </li>
                                                </ul>

                                                <Link href="/blog-details">
                                                    <a>
                                                        <h3>Admission wristband</h3>
                                                    </a>
                                                </Link>

                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, iusto. In, impedit ab quidem harum consectetur aut elit</p>

                                                <Link href="/blog-details">
                                                    <a className="read-more">
                                                        Read More <i className="bx bx-plus"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="page-navigation-area">
                                            <nav aria-label="Page navigation example text-center">
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <a className="page-link page-links" href="#">
                                                            <i className='bx bx-chevrons-left'></i>
                                                        </a>
                                                    </li>
                                                    <li className="page-item active">
                                                        <a className="page-link" href="#">1</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">2</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">3</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">
                                                            <i className='bx bx-chevrons-right'></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
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

export default BlogLeftSidebar;