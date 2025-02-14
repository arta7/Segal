import React from 'react'; 

const ContactInfo = () => {
    return (      
        <div className="contact-info-area" style={{fontFamily:'Digikala',textAlign:'justify'}}>
			<div className="container-fluid">
				<div className="row" style={{justifyContent:'center',alignItems:'center'}}>
					<div className="col-lg-3 p-0">
						<div className="single-contact-info" >
							<i className="bx bx-location-plus"></i>
							<h3 style={{fontFamily:'Digikala'}}>ارتباط با واحد مالی و اداری </h3>
							<p>تهران - خیابان شهید بهشتی - خیابان مفتح شمالی - خیابان هشتم - پلاک 1 - واحد 9 کد پستی : ۱۵۸۷۸۱۵۴۳۴</p>
							<span>ایمیل: info@segalventures.ir</span>	
							<span>Tel: ۰۲۱۸۸۵۰۷۳۶۳ </span>	
						</div>
					</div>


					<div className="col-lg-3 p-0">
						<div className="single-contact-info">
							<i className="bx bx-location-plus"></i>
							<h3 style={{fontFamily:'Digikala'}}>ارتباط با واحد سرمایه گذاری</h3>	
							<p>تهران - خیابان شهید بهشتی - خیابان مفتح شمالی - خیابان هشتم - پلاک 1 - واحد 9 کد پستی : ۱۵۸۷۸۱۵۴۳۴</p>
							<p>ایمیل:  finance@segalventures.ir</p>
							<span>Tel: ۰۲۱۸۸۵۰۷۳۶۳ </span>	
						</div>
					</div>

					<div className="col-lg-3 p-0">
						<div className="single-contact-info">
							<i className="bx bx-location-plus"></i>
							<h3 style={{fontFamily:'Digikala'}}> ارتباط با واحد اعتبار مالیاتی </h3>	
							<p> تهران - خیابان شهید بهشتی - خیابان مفتح شمالی - خیابان هشتم - پلاک 1 - واحد 9 کد پستی : ۱۵۸۷۸۱۵۴۳۴</p>
							<p>ایمیل : taxcredit@segalventures.ir</p>
							<span>Tel : ۰۲۱۸۸۵۰۷۳۶۳
								 </span>	
						</div>
					</div>


					{/* <div className="col-lg-3 p-0">
						<div className="single-contact-map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1588019781257!5m2!1sen!2sbd"></iframe>
						</div>
					</div> */}

					{/* <div className="col-lg-3 p-0">
						<div className="single-contact-info">
							<i className="bx bx-location-plus"></i>
							<h3>کرج</h3>
							<p>123, Western Road, Melbourne Australia</p>
							<span>Email: hello@corf.com</span>	
							<span>Tel: +822456975</span>	
						</div>
					</div> */}

					{/* <div className="col-lg-3 p-0">
						<div className="single-contact-map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29624007.58460168!2d115.2297986315677!3d-24.992915938390162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sbd!4v1588020297752!5m2!1sen!2sbd"></iframe>
						</div>
					</div> */}
				</div>
			</div>
		</div>
    )
}

export default ContactInfo;