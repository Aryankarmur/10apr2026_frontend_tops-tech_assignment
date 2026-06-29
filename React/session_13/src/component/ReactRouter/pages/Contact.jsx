
import React, { useState } from 'react';

const Contact = () => {
  // Form input state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Thank you for your message!');
    // Reset form fields after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Inline CSS Styles Objects
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#333',
      lineHeight: '1.6'
    },
    heading: {
      textAlign: 'center',
      color: '#1a1a1a',
      marginBottom: '10px',
      fontSize: '2.5rem'
    },
    subheading: {
      textAlign: 'center',
      color: '#666',
      marginBottom: '40px'
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px'
    },
    infoSection: {
      flex: '1 1 300px'
    },
    formSection: {
      flex: '1 1 400px',
      backgroundColor: '#f9f9f9',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    },
    infoBlock: {
      marginBottom: '25px'
    },
    infoTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#0070f3',
      marginBottom: '5px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      fontSize: '0.9rem',
      color: '#444'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '1rem',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.2s'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '1rem',
      minHeight: '150px',
      boxSizing: 'border-box',
      resize: 'vertical',
      outline: 'none'
    },
    button: {
      width: '100%',
      backgroundColor: '#0070f3',
      color: 'white',
      padding: '14px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Get in Touch</h1>
      <p style={styles.subheading}>We would love to hear from you. Please fill out the form below.</p>

      <div style={styles.grid}>
        {/* Left Side: Contact Information */}
        <div style={styles.infoSection}>
          <div style={styles.infoBlock}>
            <div style={styles.infoTitle}>Our Office</div>
            <p style={{ margin: 0 }}>123 Innovation Way, Tech District<br />San Francisco, CA 94105</p>
          </div>
          
          <div style={styles.infoBlock}>
            <div style={styles.infoTitle}>Email Us</div>
            <p style={{ margin: 0 }}>support@example.com<br />info@example.com</p>
          </div>

          <div style={styles.infoBlock}>
            <div style={styles.infoTitle}>Call Us</div>
            <p style={{ margin: 0 }}>+1 (555) 019-2834<br />Mon - Fri, 9am - 5pm PST</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div style={styles.formSection}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                placeholder="John Doe"
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="john@example.com"
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="subject" style={styles.label}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={styles.input}
                placeholder="How can we help?"
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
