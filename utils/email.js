const nodemalier = require('nodemailer');


const sendEmail = async options => {
    // 1) Create a transporter
    const transporter = nodemalier.createTransport({
        //service: 'Gmail',
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
        // Activate in gmail "less secure app" option
    });

    // 2) Define the email options
    const mailOption = {
        form: 'admin <admin@vijay.io>',
        to: options.email,
        subject: options.subject,
        text: options.message
        // html:
    };

    // 3) Actually send the email
    await transporter.sendMail(mailOption);
};

module.exports = sendEmail;