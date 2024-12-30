import React from 'react';

const Subscribe = () => {
    return (      
        <div className="subscribe-area" style={{fontFamily:'Digikala'}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6" >
						<h2 style={{fontFamily:'Digikala'}}>هم اکنون مشترک شوید</h2>
						<p>با ایجاد اشتراک در   سگال ونچرز از آخرین اخبار و بروز رسانی های ما مطلع شوید</p>
					</div>

					<div className="col-lg-6">
						<form className="newsletter-form">
							<input type="email" className="form-control" placeholder="ایمیل خود را وارد کنید" name="EMAIL" required />

							<button className="default-btn" type="submit">
								ایجاد اشتراک
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Subscribe;