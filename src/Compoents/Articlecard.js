import React from 'react'
import { useState } from 'react';
import './Articlecard.css'





export default function Articlecard({title,description,image,username, time}) {

  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  return (
    <>
   
   <div className="card " style={{
                marginTop: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                
              }} onClick={handleClickOpen}>

  <img src={image} className="card-img-top" alt="..." height={500} width={500} style={{"objectFit": "cover"}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
   
    <h6  className="card-text">{username.username}</h6>
    <p className='card-text'>{time}</p>
    
  </div>
  <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup" style={{height:"auto",width:"400px"}}>
                            <div className="popup-header">
                                <h4>{title}</h4>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div><h6>By: {username.username}</h6></div>
                            <div ><img src={image} className='Image'/></div>
                            
                            <div>
                            <p>{description}</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
</div>
    
    
</>
  )
}
