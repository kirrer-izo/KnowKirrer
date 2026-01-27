require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

console.log('User:', process.env.MAIL_USER || 'Not set');
console.log('Pass:', process.env.MAIL_PASS ? 'Set (hidden)' : 'Not set');

transporter.verify(function (error, success) {
  if (error) {
    console.log('Server connection error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: 'Contact Us Message',
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });

    res.json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3000, () => console.log('📧 Mailer running on port 3000'));
