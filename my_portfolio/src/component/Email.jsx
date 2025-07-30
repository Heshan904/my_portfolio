import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './email.css';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(
      'Shan200400811273',     // Replace with your actual EmailJS Service ID
      'template_1s69gnj',    // Replace with your Template ID
      templateParams,
      'Pi_WOXbrrPL5Jq4al'      // Replace with your Public Key (User ID)
    )
    .then((response) => {
      alert('Email sent successfully!');
      setFormData({ subject: '', message: '' });
    })
    .catch((err) => {
      alert('Failed to send email. ' + err.text);
    });
  };

  return (
    <form onSubmit={handleSubmit} className='email-form'>
      <h2 className='send'>Send Email</h2>

      <label>Subject:</label><br />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        style={{borderRadius: '10px', width: '100%', padding: '20px',backgroundColor: 'rgba(250,250,250,0.4)',border: 'none'}}
      /><br /><br />

      <label>Description:</label><br />
      <textarea
        name="message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
        style={{borderRadius: '20px', width: '100%', padding: '20px',backgroundColor: 'rgba(250,250,250,0.4)',border: 'none'}}
      /><br /><br />

      <button type="submit" 
      style={{borderRadius: '10px', padding: '10px 40px',border:'1px solid black',width: 'fit-content',alignSelf: 'center',fontFamily: "'Raleway', sans-serif"}}>Send</button>
    </form>
  );
};

export default EmailForm;