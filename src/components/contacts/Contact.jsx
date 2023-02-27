import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_303ouyo', 'template_yvfpk23', form.current, 'exhRyLsKATkoq5uIM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>horatiu.evu@gmail.com</h5>
            <a href="mailto:horatiu.evu@gmail.com" target="_blank" rel="noreferrer">Send a mail</a>
          </article>
          <article className='contact_option'>
            <AiFillLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Horatiu Evu</h5>
            <a href="https://www.linkedin.com/in/horatiu-evu/" target="_blank" rel="noreferrer">Let's connect</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>...</h5>
            <a href="https://api.whatsapp.com/send?phone=0040722841954" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea type="message" name='message' rows='7' placeholder='Your message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact