import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library
import './ContactMe.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactMe = () => {
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const handleSendMessage = async () => {
    try {
      // Make a POST request to your Node.js backend
      const response = await axios.post('http://localhost:3000/send-email', {
        senderName,
        senderEmail,
        message,
      });

      console.log('Email sent successfully!', response.data);
    //   alert('Email sent successfully!');
      // Use toast to display a notification
      toast.success('Email sent successfully!', { autoClose: 2000 });

      // After sending the email, you can clear the form
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
    //   alert('Error sending email. Please try again.');
      // Use toast to display an error notification
      toast.error('Error sending email. Please try again.', { autoClose: 2000 });
    }
  };

  const handleScheduleMeeting = () => {
    // Open a link to your Outlook calendar or scheduling tool
    window.open('https://outlook.office.com/calendar/');
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <div>
          <h3>Lets build something great together</h3>
          <p>Email: <a className = "MailLink"  href='mailto:janwale.i@northeastern.edu'> janwale.i@northeastern.edu </a></p>
          <p>Phone: <a className = "MailLink" href="tel:+18573969001">+1(857) 396 9001</a></p>
          <p>Address: 1209 Boylston Street, Boston, MA</p>
        </div>
      </div>
      

      <div className="contact-form">
       
        <label className="label">Your Name:</label>
        <input
          type="text"
          className="input-field"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
        />

        <label className="label">Your Email:</label>
        <input
          type="email"
          className="input-field"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />

        <label className="label">Message:</label>
        <textarea
          className="textarea-field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="btn-primary1" onClick={handleSendMessage}>
          Send Message
        </button>
        <button className="btn-secondary" onClick={handleScheduleMeeting}>
          Schedule Meeting
        </button>
        <ToastContainer />
      </div>
      
    </div>
    
  );
};

export default ContactMe;
