'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '@/components/Contact.module.css';


import { useState } from 'react';
const Contact = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    //   });
    
    //   const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    //     // Add API call or form handling logic here
    //   };
    return (
        <div>
            <Header />
            <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <div className={styles.underline}></div>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.inputField} />
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="text" placeholder="Subject" className={styles.inputField} />
        <textarea placeholder="Message" className={styles.textarea}></textarea>
        <button className={styles.button}>Submit</button>
      </form>
    </div>
            <Footer />
        </div>
    );
};

export default Contact;