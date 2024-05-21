"use client"
import React, { FC, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    subject: false,
    message: false,
    email: false,
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return !!value;
      case 'subject':
        return !!value;
      case 'message':
        return !!value;
      case 'email':
        return validateEmail(value);
      default:
        return true;
    }
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const isValid = validateField(name, value);
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: !isValid });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = {
      name: !validateField('name', formData.name),
      subject: !validateField('subject', formData.subject),
      message: !validateField('message', formData.message),
      email: !validateField('email', formData.email),
    };
    setErrors(validationErrors);

    const isFormValid = Object.values(validationErrors).every((error) => !error);

    if (!isFormValid || formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message,
      from_email: formData.email,
    };

    emailjs
      .send(process.env.NEXT_PUBLIC_EMAIL_SERVICE!, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!, templateParams, process.env.NEXT_PUBLIC_EMAIL_TOKEN)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormSent(true);
        // Handle success
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        // Handle error
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
    
  return (
    <div className="max-w-screen-md mx-auto p-4 z-10">
      <h1>Contact</h1>
      {!formSent ? (
        <form className='flex flex-col'>
          <label className={`input input-bordered flex items-center gap-2 mb-4 ${errors.name ? 'input-error' : ''}`}>
            Name
            <input type="text" className="grow" name="name" placeholder="Daisy" value={formData.name} onChange={handleChange} />
          </label>
          <label className={`input input-bordered flex items-center gap-2 mb-4 ${errors.email ? 'input-error' : ''}`}>
            Email
            <input type="text" className="grow" name="email" placeholder="daisy@site.com" value={formData.email} onChange={handleChange} />
          </label>
          <label className={`input input-bordered flex items-center gap-2 mb-4 ${errors.subject ? 'input-error' : ''}`}>
            Sujets
            <input type="text" className="grow" name="subject" placeholder="daisy@site.com" value={formData.subject} onChange={handleChange} />
          </label>
          <textarea placeholder="Bio" className={`textarea textarea-bordered textarea-lg w-full mb-4 ${errors.message ? 'textarea-error' : ''}`} name="message" value={formData.message} onChange={handleChange}></textarea>
          <button className={`btn btn-primary ${isSubmitting ? 'btn-disabled' : ''}`} onClick={(e) => handleSubmit(e)}>
            {!isSubmitting ? 'Submit': <span className="loading loading-dots loading-xs"></span>}
          </button>
          <div style={{ display: 'none' }}>
            <label htmlFor="honeypot">Honeypot</label>
            <input type="text" id="honeypot" name="honeypot" value={formData.honeypot} onChange={handleChange} />
          </div>
        </form>
      ): (<div className='text-center mt-8'>
        <h2>Sent</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lacinia orci. Cras in mi auctor, vulputate orci eget, interdum urna. Quisque at massa enim. Phasellus consectetur tincidunt augue at vestibulum. Praesent at ligula nibh. Suspendisse posuere est nunc, ut finibus neque auctor in.</p>
      </div>)}
    </div>
  );
};

export default ContactForm;
