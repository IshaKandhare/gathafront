import React, { useRef , useState } from "react";
import Footer from "../Compoents/Footer";
import Navbar from "../Compoents/Navbar";
import Carousel from "../Compoents/Carousel";
import Jcards from "../Compoents/Jcards";
import artgallery from "../Database/artgallery.png"
import "./Home.css";
import { Link } from "react-router-dom";
import about from "../Database/knowus.png";
import carrier from "../Database/carrier.png";
import emailjs from "@emailjs/browser";
import ChatBot from 'react-simple-chatbot';
import Job from "../Database/Jobs.png"
import join from "../Database/join.png";

import helpline from "../Database/helpline.png"

export default function Home() {
  const steps = [
    {
      id: "0",
      message: "Hey",
      trigger: "1",
    },
    {
      id: "1",
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: " hi {previousValue}, how can I help you?",
      trigger: 4,
    },
    {
      id: "4",
      user: true,
      trigger: 5,
    },
    {
      id: "5",
      message:
        "Gatha is platform for the Womens , It works for the women empowernment...",
      trigger: 6,
    },
    {
      id: "6",
      user: true,
      trigger: 7,
    },
    {
      id: "7",
      message: "Welcome...!!",
    },
  ];

 
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFailureModalOpen, setIsFailureModalOpen] = useState(false);
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zi9vl6i", "template_ezyyieq", form.current, {
        publicKey: "_hdKPzlkI58xAggZq",
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
        }
      );
  };
  const closeModals = () => {
    setIsSuccessModalOpen(false);
    setIsFailureModalOpen(false);
  };
  return (
    <>
       <div>
      <ChatBot steps={steps} floating={true} />
    </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      

      
       
        <div style={{display:'flex', marginTop:"50px",backgroundImage: `url(${Job})`, width:'100%', height: '500px', backgroundRepeat: 'no-repeat', marginLeft:'10px', backgroundSize:'cover'}}>
        <Link to="/jobs" style={{textDecoration:"None" , marginTop:"27%" , marginLeft:"18rem"}}> <button type="button" class="btn btn-dark">See more</button></Link>
        </div>
            
        
       
      
      <div style={{marginBottom:"100px" }}>
      <div >
      <img src={about} style={{width:"100%" , marginTop:"5%"}}/>
      
      </div>
     
      <Link className="article " to="/articles"></Link></div>
      <Jcards />

      <div style={{display:'flex', marginTop:"50px",backgroundImage: `url(${artgallery})`, width:'100%', height: '500px', backgroundRepeat: 'no-repeat', marginLeft:'10px', backgroundSize:'cover'}}>
        <Link to="/gallery" style={{textDecoration:"None" , marginTop:"25%" , marginLeft:"57rem"}}> <button type="button" class="btn btn-dark">See more</button></Link>
        </div>
      
    
          <div style={{display:'flex', marginTop:"50px",backgroundImage: `url(${join})`, width:'100%', height: '500px', backgroundRepeat: 'no-repeat', marginLeft:'10px', backgroundSize:'cover'}}>
          <div className="communityform">
        <form ref={form} onSubmit={sendEmail} className="formc">
         
          <label className="labelc">Username</label>
          <input type="text" name="User_name" className="inputc"/>
          
          <label className="labelc">Email</label>
          <input type="email" name="email" className="inputc"/>
         
          <input type="submit" value="Send" className="inputc"/>
        </form>
      </div>
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
      <div>
   
        <Footer />
      </div>
    </>
  );
}
