import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const BlogGrid = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="راهنمایی" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="راهنمایی" 
                imgClass="bg-2" 
            />  

            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        {/* <span className="top-title">راهنمایی</span> */}
                        {/* <h2>Our Latest News</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/blog1.jpg" alt="Image" />
                                    </a>
                                </Link>

                                {/* <span>10 May 2020</span> */}
                                <div className="blog-content">
                                    {/* <ul>
                                        <li><a href="#">Medical</a></li>
                                    </ul> */}

                                    <Link href="/blog-details">
                                        <a>
                                            <h3>راهنمای مشاوره متنی</h3>
                                        </a>
                                    </Link>

                                    <Link href="/blog-details">
                                        <a className="read-more">
                                            بیشتر بخوانید <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/blog2.jpg" alt="Image" />
                                    </a>
                                </Link>

                                {/* <span>11 May 2020</span> */}
                                <div className="blog-content">
                                    {/* <ul>
                                        <li>
                                            <a href="#">Treatment</a>
                                        </li>
                                    </ul> */}

                                    <Link href="/blog-details">
                                        <a>
                                            <h3>راهنمای مشاوره تلفنی</h3>
                                        </a>
                                    </Link>

                                    <Link href="/blog-details">
                                        <a className="read-more">
                                        بیشتر بخوانید <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/blog3.jpg" alt="Image" />
                                    </a>
                                </Link>
                                {/* <span>13 May 2020</span> */}
                                <div className="blog-content">
                                    {/* <ul>
                                        <li>
                                            <a href="#">COVID-19</a>
                                        </li>
                                    </ul> */}

                                    <Link href="/blog-details">
                                        <a>
                                            <h3>راهنمای مشاوره تصویری</h3>
                                        </a>
                                    </Link>

                                    <Link href="/blog-details">
                                        <a className="read-more">
                                        بیشتر بخوانید  <i className="bx bx-plus"></i>
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
            
            <Subscribe />
            
            <Footer /> 
        </>
    )
}

export default BlogGrid;