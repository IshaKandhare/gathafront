//Login.jsx
import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { authActions } from "../redux/store";

export default function Login() {
  const dispatch=useDispatch();
   const [credentials , setCredentials]=useState({username:"", email:"", password:""});
   const[author ,setAuthor]=useState({email:"", password:""});

   const navigate=useNavigate();

  const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("https://gathaback-1.onrender.com//api/createUser",{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({username:credentials.username , email:credentials.email , password:credentials.password})
        }
        )
        const json=await response.json()
        console.log(json);

        if (!json.success) {
          alert("Enter valid Email and Password");
        }
        if (json.success) {
           alert("You have Successfully Sign up!!");
        }

  }
  const handleEvent=async (e)=>{
    e.preventDefault();
    const response = await fetch("https://gathaback-1.onrender.com//api/loginUser",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ email:author.email , password:author.password})
    }
    )
    const json=await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid Email and Password");
    }
    if(json.success){
      dispatch(authActions.login());
      navigate("/");
     localStorage.setItem("authtoken", json.authtoken);
     console.log(localStorage.getItem("authtoken"));
    }
}

  const onchange=(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
  }

  const somechange=(event)=>{
    setAuthor({...author,[event.target.name]:event.target.value})
  }

  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    const container = document.getElementById("container");

    if (container) {
      if (isSignIn) {
        container.classList.add("sign-in");
        container.classList.remove("sign-up");
      } else {
        container.classList.remove("sign-in");
        container.classList.add("sign-up");
      }
    }
  }, [isSignIn]);

  const toggle = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };
  return (
    <div>
      <div id="container" className="container">
        <div className="row11">
         
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="Username" name="username" value={credentials.username} onChange={onchange} />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input type="email" placeholder="Email" name="email" value={credentials.email} onChange={onchange} />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password"  name="password" value={credentials.password} onChange={onchange} />
                </div>
                
                <Link to="/login"> <button onClick={handleSubmit}>Sign up</button></Link>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={() => toggle()} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
 
 
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="email" placeholder="email" name="email" value={author.email} onChange={somechange} />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" name="password" value={author.password}  onChange={somechange} />
                </div>
                <button onClick={handleEvent}>Sign in</button>
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={() => toggle()} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>

        <div className="row11 content-row11">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>

          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
