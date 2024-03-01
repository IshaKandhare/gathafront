import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Navbar from '../Compoents/Navbar'
import Footer from "../Compoents/Footer";
import contact from '../Database/contact.png';

export default function Contact() {
    const form = useRef();
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isFailureModalOpen, setIsFailureModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ieqjxio', 'template_f4231xf', form.current, {
        publicKey: '_hdKPzlkI58xAggZq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("Message sent!!");
          setIsSuccessModalOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsFailureModalOpen(true);
        },
      );
  };
  const closeModals = () => {
    setIsSuccessModalOpen(false);
    setIsFailureModalOpen(false);
  };
  return (
    <>
    <div><Navbar/></div>
    <div className='ttl'>
      Have any query? Feel free to reach out to us!
    </div>




<div style={{display:'flex' }} className='contact'>



    <div >
     <form style={{paddingRight:'20px'}} ref={form} onSubmit={sendEmail} className='formcr'>
      <label className='labelcr'>Name</label>
      <input type="text" name="from_name"  className='inputcr'/>
      <label className='labelcr'>Email</label>
      <input type="email" name="from_email"  className='inputcr' />
      <label className='labelcr'>Message</label>
      <textarea name="message" rows="6" className='textareacr'/>
      <input type="submit" value="SUBMIT"  className='inputc'/>
    </form>
    </div>

    <img style={{height:'500px', width:'550px', marginLeft:'60px', marginRight:'0px',float: 'right', paddingRight:'0px'}} src={contact} alt="Description" />

    </div>

    
    {/* Success Message */}
    {isSuccessModalOpen && (
        <div className="success-message">
          <p>Thank you for reaching out to us , we will get back to you soon !!</p>
          <span className="close" onClick={closeModals}>&times;</span>
        </div>
      )}

      {/* Failure Modal */}
      {isFailureModalOpen && (
        <div className="modal">
          <div className="modal-content failure">
            <span className="close" onClick={closeModals}>&times;</span>
            <p>Email sending failed. Please try again later.</p>
          </div>
        </div>
      )}
    <div><Footer/></div>
    </>
  )
}