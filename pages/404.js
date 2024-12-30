import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="error-area" style={{fontFamily:'Digikala'}}>
			<div className="d-table">
				<div className="d-table-cell">
					<div className="error-content-wrap">
						<h1><span className="a">4</span> <span className="red">0</span> <span className="b">4</span> </h1>
						<h3>صفحه جاری در دسترس نمی باشد</h3>
						<p>صفحه مورد نظر پیدا نشد.</p>

                        <Link href="/">
                            <a className="default-btn page-btn active">
                                بازگشت به صفحه اصلی
                            </a>
                        </Link>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Custom404;