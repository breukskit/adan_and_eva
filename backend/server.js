const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(express.json());

const dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(dirname, '/frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.post('/sendEmail', (req, res) => {
  async function main() {
    console.log(req.body);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'forstendaniel@gmail.com', // sender address
      to: 'daniel.forsten@hotmail.com', // list of receivers
      subject: 'Contact request from the Adan&Eva Website', // Subject line
      text: 'This is the text body', // plain text body
      html: `<h2>From:</h2><h4>Name: ${req.body.name}</h4><h4>Email: ${req.body.email}</h4><h2>Message:</h2><p>${req.body.message}</p>`, // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    res.send(JSON.stringify({ msg: 'Success' }));
    // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
