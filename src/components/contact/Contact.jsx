import React from 'react';
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine}from 'react-icons/ri'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1wp0f68', 'template_zlbf82u', form.current, 'sF-Phoq5I20a1kzWF')
    
    e.target.reset()
    alert("¡¡ Gracias por contactarme, pronto me comunico con usted!!!!!")
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <section id='contact'>
            <h5>Ponerse en contacto</h5>
            <h2>Contactame</h2>

           <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineMail  className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>j_chalo@hotmail.com</h5>
                    <a href="mailto:j_chalo@hotmail.com" target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Chalito Herrera</h5>
                    <a href="https://www.facebook.com/chalito.herrera" target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <SiWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+529931576220</h5>
                    <a href="https://api.whatsapp.com/send?phone=+529931576220" target="_blank">Send a message</a>
                </article>
            </div>

                         {/* end of contact options */}

           <form ref={form} onSubmit={sendEmail}>
             <input type="text" name='name' placeholder='Your Full Name' required/>
             <input type="email" name='email'placeholder='email@sudominio.com' required />
             <textarea name="message" rows="7" placeholder='your message' required></textarea>
             <button type='submit' className='btn btn-primary'>Send Message</button>
           </form>
           </div>
        </section>
    );
};

export default Contact;