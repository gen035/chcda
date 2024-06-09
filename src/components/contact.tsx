"use client"
import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import emailjs from 'emailjs-com';

const ContactForm: FC = () => {
  const t = useTranslations('contact.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);

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

    const templateParams = {
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message,
      from_email: formData.email,
    };

    setIsSubmitting(true);

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
      <h1 className='text-center text-gradient text-primary mb-4'>Contact</h1>
      {!formSent ? (
        <form className='flex flex-col'>
          <label className={`input input-bordered flex items-center gap-2 mb-4 ${errors.name ? 'input-error' : ''}`}>
            {t('name')}
            <input type="text" className="grow" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label className={`input input-bordered flex items-center gap-2 mb-4 ${errors.email ? 'input-error' : ''}`}>
            {t('email')}
            <input type="text" className="grow" name="email" placeholder="email@email.com" value={formData.email} onChange={handleChange} />
          </label>
          <label className={`input input-bordered flex items-center gap-2 mb-4 ${errors.subject ? 'input-error' : ''}`}>
            {t('subject')}
            <input type="text" className="grow" name="subject" value={formData.subject} onChange={handleChange} />
          </label>
          <textarea placeholder="Message" className={`textarea textarea-bordered textarea-lg w-full mb-4 ${errors.message ? 'textarea-error' : ''}`} name="message" value={formData.message} onChange={handleChange}></textarea>
          <button className={`btn btn-primary btn-gradient w-fit ${isSubmitting ? 'btn-disabled' : ''}`} onClick={(e) => handleSubmit(e)}>
            {!isSubmitting ? t('submit') : <span className="loading loading-dots loading-xs text-primary"></span>}
          </button>
          <div style={{ display: 'none' }}>
            <label htmlFor="honeypot">Honeypot</label>
            <input type="text" id="honeypot" name="honeypot" value={formData.honeypot} onChange={handleChange} />
          </div>
        </form>
      ): (<div className='text-center mt-8'>
        <p>{t('success')}</p>
      </div>)}
    </div>
  );
};

export default ContactForm;
