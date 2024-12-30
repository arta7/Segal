import React,{useState} from 'react';
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)
    const [showItem, setshowItem] = React.useState(true)
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      })
    const toggleNavbar = () => {
        setMenu(!menu)  
    }

    let handleResize=()=> {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
    }

    React.useEffect(() => {
      
        window.addEventListener("resize", handleResize);
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                
            } else {
                elementId.classList.remove("is-sticky");
                
            }
        });
        window.scrollTo(0, 0);
        return () => window.removeEventListener("resize", handleResize);
    },[])
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';


    return (
        <>
            <header className="header-area fixed-top" style={{fontFamily:'Digikala'}}>
                
                <TopHeader />
                
                <div className="nav-area" style={{fontFamily:'Digikala',backgroundColor:'white'}}>
                    <div id="navbar" className="navbar-area" style={{fontFamily:'Digikala',backgroundColor:'white'}}>
                        <div className="main-nav" style={{fontFamily:'Digikala',backgroundColor:'white'}}>
                            <nav className="navbar navbar-expand-md navbar-light" style={{fontFamily:'Digikala',backgroundColor:'white'}}>
                                <div className="container">
                                    <Link href="/">
                                        <a onClick={toggleNavbar} className="navbar-brand" >
                                            <img src="/img/logo.png" alt="logo" />
                                        </a>
                                    </Link>

                                    <button 
                                        onClick={toggleNavbar} 
                                        className={classTwo}
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                        aria-expanded="false" 
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon-bar top-bar"></span>
                                        <span className="icon-bar middle-bar"></span>
                                        <span className="icon-bar bottom-bar"></span>
                                    </button>

                                    <div className={classOne} id="navbarSupportedContent">
                                        <ul className="navbar-nav m-auto">
                                            

                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">
                                                        صفحه اصلی 
                                                        {/* <i className='bx bx-plus'></i> */}
                                                    </a>
                                                </Link>
                                            </li>
        
                                            <li className="nav-item">
                                                <Link href="/about">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        درباره ما 
                                                        {/* <i className='bx bx-plus'></i> */}
                                                    </a>
                                                </Link>
                                                {/* <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/about" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">معرفی تامین مالی سگال</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/Companions" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">همراهان تامین مالی سگال</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/terms-conditions" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">قوانین و مقررات</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/certificates" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">مجوزها و گواهینامه</a>
                                                        </Link>
                                                    </li>

                                                   
                                                </ul> */}
                                            </li>
        
                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                    خدمات سگال
                                                        {/* <i className='bx bx-plus'></i> */}
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/services-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">خدمات مشاوره مدیریت</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">خدمات مدیریت دارایی</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/service-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">خدمات تامین مالی شرکتی</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/service-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">خدمات اعتبار مالیاتی</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                    
                                            {/* <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        فرصت های شغلی 
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/moshaverExpert" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">مشاور متخصص</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/moshavershow" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">مشاور شو</a>
                                                        </Link>
                                                    </li>

                                                   
                                                </ul>
                                            </li> */}




<li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                    سرمایه گذاری 
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                  
                                            <li className="nav-item">
                                                <Link href="/blog-grid" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">
                                                صندوق سرمایه گذاری خصوصی
                                                    </a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="/blog-right-sidebar" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">
                                                صندوق سرمایه گذاری نوآوری
                                                    </a>
                                                </Link>
                                            </li>
                                                </ul>
                                            </li>








                                            <li className="nav-item">
                                                <Link href="" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">اعتبار مالیاتی</a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/blog-grid2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">اعتبار مالیاتی تحقیق و توسعه</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/contact" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">اعتبار مالیاتی سرمایه گذاری</a>
                                                        </Link>
                                                    </li>

                                                </ul>


                                            </li>

                                            <li className="nav-item">
                                                <Link href="" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">ارتباط با ما</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* <div className="others-option" >
                                        <div className="subscribe" style={{display : windowSize.width < 500
                                             ?'none':'flex'}}>
                                            <Link href="/contact" >
                                                <a className="default-btn">
                                                   ورود به سامانه
                                                </a>
                                            </Link>
                                        </div>
                                    </div> */}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
