import nodemailer from 'nodemailer'
// import { google } from 'googleapis'
// import config from '../config/config.js'

// const { OAuth2 } = google.auth
// const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'
// const { gClientId, gClientSecret, gRefreshToken, adminEmail } = config

// const oauth2client = new OAuth2(
// 	gClientId,
// 	gClientSecret,
// 	gRefreshToken,
// 	OAUTH_PLAYGROUND
// )

const sendEmailRegister = (to, url, text) => {
  // Nodemailer
  const smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'minhchiu.it@gmail.com',
      pass: 'Minh.it.01',
    },
  })

  const mailOptions = {
    from: 'minhchiu.it@gmail.com',
    to: to,
    subject: 'ACTIVATE YOUR ACCOUNT',
    html: `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <title>Account Activation</title>
        <style>
          body {
            background-color: #333333;
            height: 100vh;
            font-family: "Roboto", sans-serif;
            color: #fff;
            position: relative;
            text-align: center;
          }
          .container {
            max-width: 700px;
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }
          .wrapper {
            padding: 0 15px;
          }
          .card {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
          }
          span {
            color: #ffc107;
          }
          button {
            padding: 1em 6em;
            border-radius: 5px;
            border: 0;
            background-color: hsl(45, 100%, 51%);
            transition: all 0.3s ease-in;
            cursor: pointer;
          }
          button:hover {
            background-color: hsl(45, 70%, 51%);
            transition: all 0.3s ease-in;
          }
          .spacing {
            margin-top: 5rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="wrapper">
            <div class="card">
              <h1><span>Welcome !</span> And thank you for registering !</h1>
              <p>Please validate your email by clicking the button below 🙂</p>
              <a href=${url}><button>${text}</button></a>
              <p class="spacing">
                If the button above does not work, please navigate to the link
                provided below 👇🏻
              </p>
              <div>${url}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `,
  }

  smtpTransport.sendMail(mailOptions, (err, info) => {
    if (err) {
      return { err }
    }
    return info
  })
}

const sendEmailReset = (to, url, text, name) => {
  // Nodemailer
  const smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'minhchiu.it@gmail.com',
      pass: 'Minh.it.01',
    },
  })

  const mailOptions = {
    from: 'minhchiu.it@gmail.com',
    to: to,
    subject: 'ACTIVATE YOUR ACCOUNT',
    html: `
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
          <title>Account Activation</title>
          <style>
            body {
              background-color: #333333;
              height: 100vh;
              font-family: "Roboto", sans-serif;
              color: #fff;
              position: relative;
              text-align: center;
            }
            .container {
              max-width: 700px;
              width: 100%;
              height: 100%;
              margin: 0 auto;
            }
            .wrapper {
              padding: 0 15px;
            }
            .card {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
            }
            span {
              color: #ffc107;
            }
            button {
              padding: 1em 6em;
              border-radius: 5px;
              border: 0;
              background-color: hsl(45, 100%, 51%);
              transition: all 0.3s ease-in;
              cursor: pointer;
            }
            button:hover {
              background-color: hsl(45, 70%, 51%);
              transition: all 0.3s ease-in;
            }
            .spacing {
              margin-top: 5rem;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="wrapper">
              <div class="card">
                <h1><span>Hey</span> ${name}</h1>
                <p>Please click the button below to reset your password. 🙂</p>
                <a href=${url}><button>${text}</button></a>
                <p class="spacing">
                  If the button above does not work, please navigate to the link
                  provided below 👇🏻
                </p>
                <div>${url}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  smtpTransport.sendMail(mailOptions, (err, info) => {
    if (err) {
      return { err }
    }
    return info
  })
}

export default { sendEmailRegister, sendEmailReset }
