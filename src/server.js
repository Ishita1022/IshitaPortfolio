const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mailgunTransport = require('nodemailer-mailgun-transport');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const mgTransport = mailgunTransport({
  auth: {
    api_key: '65fcdbc60a9d693b8c42509918428804-4c955d28-ec6a8025',
    domain:'ishitajanwale.me',
  },
});

const transporter = nodemailer.createTransport(mgTransport);

app.post('/send-email', async (req, res) => {
  console.log('Request Body:', req.body);

  const { senderName, senderEmail, message } = req.body;

  try {
    if (!senderEmail || !message) {
      return res.status(400).json({ success: false, message: 'Invalid request. Missing senderEmail or message.' });
    }

    const info = await transporter.sendMail({
      from: 'ishitajanwale22@outlook.com',
      to: 'janwale.i@northeastern.edu',
      subject: 'New Message from Portfolio',
      html: `
       <h2>Contact Information:</h2>
       <p><strong>Name:</strong> ${senderName}</p>
       <p><strong>Email:</strong> ${senderEmail}</p>

       <h3>Message:</h3>
       <p>${message}</p>

       <p>This is a message from your portfolio contact form. Please review the information below:</p>

       <hr>

       <p><em>This email was sent from your portfolio contact form and contains legitimate user inquiries.</em></p>
     `,
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
