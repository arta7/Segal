import React from 'react';

const TopHeader = () => {
    return (      
        <div className="top-header-area" style={{fontFamily:'Digikala',borderBottomColor:'gray',borderBottomWidth:0.3,borderBottomStyle:'dotted'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-9 col-sm-6">
                        <ul className="header-content-left">
                            {/* <li>
                                <i className="bx bx-time"></i>
                                شنبه - پنج شنبه 9 صبح تا 7 عصر 
                            </li> */}
                            <li>
                                <a href="tel:۰۲۱-۹۱۳۰۷۲۹۲">
                                    <i className="bx bx-phone-call"></i>
                                    ۰۲۱-۹۱۳۰۷۲۹۲
                                    
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@segalventures.ir">
                                    <i className="bx bxs-envelope"></i>
                                    info@segalventures.ir
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-6">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;