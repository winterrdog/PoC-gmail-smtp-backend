// load environment variables
require("dotenv").config();

const nodemailer = require("nodemailer");

const gmailConfig = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.GMAIL_MAIL,
        pass: process.env.GMAIL_PASSWORD,
    },
};

const transporter = nodemailer.createTransport(gmailConfig);

(async function () {
    try {
        // verify connection configuration
        await transporter.verify();
        console.log("-- Ready to send emails!");

        // send mail
        const mailOptions = {
            to: process.env.RECEIVER_EMAIL_ADDR,
            subject: "Test driving Gmail for transactional emails.",
            text: "Hello World! Are u doing great?????",
            html: "<b>Hello World! Are u doing great?????</b>",
        };

        const sent_info = await sendEmail(
            mailOptions.to,
            mailOptions.subject,
            mailOptions.text,
            mailOptions.html
        );

        console.log("-- Email sent: ", sent_info);
    } catch (err) {
        console.log("Error: ", err);
        process.exit(1);
    }
})();

// functions to help with sending emails
function sendEmail(to, subject, text, html) {
    const mail = {
        from: process.env.GMAIL_MAIL,
        to,
        subject,
        text,
        html,
    };

    return transporter.sendMail(mail);
}
