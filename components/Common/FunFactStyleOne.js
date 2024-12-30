import React from 'react';

const FunFactStyleOne = () => {
    return (      
        <div className="counter-area pt-100 pb-70" style={{fontFamily:'Digikala'}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-man"></i>

							<h2>
                                40 <span className="target">+</span>
							</h2>

							<p>مشاوران متخصص</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-tick"></i>

							<h2>
                                165 <span className="target">+</span>
							</h2>

							<p>مشاوره موفق</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-trophy"></i>

							<h2>
                                87 <span className="traget">+</span>
							</h2>

							<p>کاربران</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-experience"></i>

							<h2>
                                4 <span className="traget">+</span>
							</h2>

							<p>گواهینامه ها</p>
						</div>
					</div>
				</div>
			</div>

			<div className="shape-wrap">
				<div className="shape-1">
					<img src="/img/shape/counter-shape.png" alt="Image" />
				</div>
				<div className="shape-2">
					<img src="/img/shape/counter-shape.png" alt="Image" />
				</div>
			</div>
		</div>
    )
}

export default FunFactStyleOne;