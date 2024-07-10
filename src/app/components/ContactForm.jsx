"use client"
// src/ContactForm.js
import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import './ContactForm.css'; // Importamos el archivo CSS

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito');
      }, (error) => {
          console.log(error.text);
          alert('Error al enviar el mensaje');
      });
  };

  return (
    <div className='form-bg'id='contacto'>
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Nombre</label>
      <input type="text" name="name" required placeholder='tu nombre' />
      <label>Correo</label>
      <input type="email" name="email" required  placeholder='correo@'/>
      <label>Teléfono</label>
      <input type="tel" name="phone"  placeholder='lada + numero'/>
      <label>Mensaje</label>
      <textarea name="message" required  placeholder='tu mensaje'/>
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default ContactForm;
