import React,{useEffect} from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import BlogSidebar from '../components/Blog/BlogSidebar';


const BlogGrid = () => {
  

    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="صفحه اصلی" 
                activePageText="Blog Details" 
                imgClass="bg-3" 
            />  

            <div className="blog-details-area ptb-100" style={{fontFamily:'Digikala'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/img/blog-details/blog-details.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                  

                                    <h3>What Can I Do To Prevent Myself & prevent Disease</h3>

                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit, consectetur qui ratione voluptatem sequi nesciunt.</p>

                                    {/* <blockquote className="flaticon-quote">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid praesentium eveniet illum asperiores, quidem, ipsum voluptatum numquam ducimus nisi exercitationem dolorum facilis Repellendus aliquid praesentium eveniet illum asperiores.</p>
                                    </blockquote> */}
                                    
                                
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span><i className='bx bx-share-alt'></i></span>
                                        <a href="#">اشتراک گذاری</a>
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className='bx bxl-facebook'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className='bx bxl-twitter'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className='bx bxl-linkedin'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className='bx bxl-pinterest-alt'></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="post-navigation">
                                    <div className="navigation-links">
                                        <div className="nav-previous">
                                            <a href="#"><i className='bx bx-left-arrow-alt'></i> پست قبلی</a>
                                        </div>

                                        <div className="nav-next">
                                            <a href="#">پست بعدی <i className='bx bx-right-arrow-alt'></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    <h3 className="comments-title">2 پست:</h3>

                                    <ol className="comment-list">
                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/img/blog-details/comment-img-1.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Jones</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        <a href="#">
                                                            <span>April  24, 2020 at 10:59 am</span>
                                                        </a>
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                                </div>

                                                <div className="reply">
                                                    <a href="#" className="comment-reply-link">Reply</a>
                                                </div>
                                            </div>

                                            <ol className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/img/blog-details/comment-img-2.jpg" className="avatar" alt="image" />
                                                                <b className="fn">Steven Smith</b>
                                                                <span className="says">says:</span>
                                                            </div>
                
                                                            <div className="comment-metadata">
                                                                <a href="#">
                                                                    <span>April  24, 2020 at 10:59 am</span>
                                                                </a>
                                                            </div>
                                                        </footer>
                
                                                        <div className="comment-content">
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim</p>
                                                        </div>
                
                                                        <div className="reply">
                                                            <Link href="#">
                                                                <a className="comment-reply-link">Reply</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>

                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/img/blog-details/comment-img-3.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Doe</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        <a href="#">
                                                            <span>April  24, 2020 at 10:59 am</span>
                                                        </a>
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                                </div>

                                                <div className="reply">
                                                    <Link href="#">
                                                        <a className="comment-reply-link">Reply</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>

                                    <div className="comment-respond">
                                        {/* <h3 className="comment-reply-title">Leave a Reply</h3> */}

                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">ایمیل شما نمایش داده نمی شود.</span>
                                               فیلدهای ضروری مشخص شده هستند. 
                                                <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>نام <span className="required">*</span></label>
                                                <input type="text" id="author" name="author" required="required" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>ایمیل <span className="required">*</span></label>
                                                <input type="email" id="email" name="email" required="required" />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>وبسایت</label>
                                                <input type="url" id="url" name="url" />
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>نظر</label>
                                                <textarea name="comment" id="comment" cols="45" rows="5" required="required"></textarea>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="ارسال نظر" />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-12">
                            <div className="blog-right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
 
            <Subscribe />
            
            <Footer /> 
        </>
    )
}

export default BlogGrid;