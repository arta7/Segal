import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };
  
    return (
        <div className="main-contact-area contact ptb-100" style={{fontFamily:'Digikala'}}>
			<div className="container">
				{/* <div className="section-title">
					<span className="top-title">درباره ما</span>
					<h2>Drop us a message for any query</h2>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam.</p>
				</div> */}

                <div className="contact-wrap contact-pages mb-0">
                    <div className="contact-form">
                        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>نام</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            className="form-control" 
                                            placeholder="نام شما" 
                                            value={contact.name}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.name && 'نام ضروری هست.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>ایمیل</label>
                                        <input 
                                            type="text" 
                                            name="email" 
                                            className="form-control" 
                                            placeholder="ایمیل شما" 
                                            value={contact.email}
                                            onChange={handleChange}
                                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.email && 'ایمیل ضروری هست.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>شماره تماس</label>
                                        <input 
                                            type="text" 
                                            name="number" 
                                            className="form-control" 
                                            placeholder="تلفن شما" 
                                            value={contact.number}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.number && 'شماره تماس ضروری هست.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>عنوان</label>
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            className="form-control" 
                                            placeholder="عنوان" 
                                            value={contact.subject}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.subject && 'عنوان ضروری هست.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <label>متن پیام</label>
                                        <textarea 
                                            name="text" 
                                            className="form-control" 
                                            cols="30" 
                                            rows="5" 
                                            placeholder="متن پیام" 
                                            value={contact.text}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.text && 'متن ضروری هست.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    {/* <div className="contact-num">
                                        <h3>ارتباط داخل کشور</h3>
                                        <span><a href="tel:+442-456a-789">91307292 – 021</a></span>
                                    </div>
                                    <div className="contact-num">
                                        <h3>ارتباط ایرانیان خارج از کشور</h3>
                                        <span><a href="tel:+442-456a-789">00989397711770</a></span>
                                    </div> */}
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <button type="submit" className="default-btn btn-two">ارسال پیام</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
		</div>
    );
}

export default ContactForm;