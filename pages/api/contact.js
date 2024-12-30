import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        // Use SendGrid API key here
        api_key: '...'
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
    console.log(req.body)
    const {name, email, number, subject, text} = req.body;

    const data = {
        // Update your email here
        to: {email},
        from: email,
        subject: 'سلام',
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Text:</b> ${text} 
        ` 
    };
    try {
        const response = await mailer.sendMail(data);
        console.log(response)
        res.status(200).send("ایمیل با موفقیت ارسال شد")
    } catch (error) {
        console.log(error);
        res.status(500).send("ارور در زمان ارسال ایمیل");
    }
}
