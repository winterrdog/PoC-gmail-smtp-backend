# PoC-gmail-smtp-backend
PoC to test gmail's ability to send mails from a backend

# requirements
- make sure your gmail account has 2FA activated( _Make sure u do so, otherwise you'll stay wishing_ )
- enable *App passwords* in your Google account
- then create an app, then use the password google will provide u with to setup the smtp config in the nodemailer config.
- rememeber to use the password alongside your email

#usage
- set up these 3 environment variables: `GMAIL_PASSWORD, GMAIL_MAIL, RECEIVER_EMAIL_ADDR`. place them in a `.env` file
- `npm i`
- `npm start`
