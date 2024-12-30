import React from 'react';

const Facilities = () => {
    return (      
        <div className="first-facility-emergency pt-100 pb-70">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
						<div className="first-facility-item">
						<i className="flaticon-care"></i>
					<h3>هدایت</h3>
					<p>ارائه راهکارهای تخصصی</p>
						</div>
					</div>
	
					<div className="col-lg-4 col-sm-6">
						<div className="first-facility-item">
						<i className="flaticon-online-learning"></i>
					<h3>حمایت</h3>
					<p>حفظ منافع ذینفعان</p>
						</div>
					</div>
					
					<div className="col-lg-4 col-sm-6">
						<div className="first-facility-item">
						<i className="flaticon-support"></i>
					<h3>پشتیبانی</h3>
					<p>تنوع در خدمات مالی </p>
						</div>
					</div>
				</div>
			</div>
		</div>

    )
}

export default Facilities;