const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.OUTLOOK_EMAIL,
    pass: process.env.OUTLOOK_PASSWORD,
  },
});

app.post('/send-email', async (req, res) => {
    console.log('Request Body:', req.body);
  
    const { senderName, senderEmail, message } = req.body;

  try {
    if (!senderEmail || !message) {
      return res.status(400).json({ success: false, message: 'Invalid request. Missing senderEmail or message.' });
    }

    const info = await transporter.sendMail({
      from: process.env.OUTLOOK_EMAIL,
      to: 'janwale.i@northeastern.edu',
      subject: 'New Message from Portfolio',
      html: `

            <h2>Email: ${senderEmail}</h2>
            <p> Hello! You have a new message from your portfolio.</p>
             <h4>Name: ${senderName}</h4>
            <p>Message: ${message}</p>`,
    });

    console.log('Message sent: %s', info.messageId);
    res.json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
