import React, { useState, useEffect, useContext } from "react";
import "./Form.css";
import {  useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {  useSelector } from "react-redux";
import Footer from "./Footer";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

export default function Form() {
  //global state
  
  const isLogin = useSelector((state) => state.isLogin);
  console.log(isLogin);
  const [credentials, setCredentials] = useState({
    title: "",
    description: "",
    image: "",
    username:"",
  });
  const authToken = localStorage.getItem('authtoken');
  const decodedToken = jwtDecode(authToken);
  const id = decodedToken?.user?.id; 
  console.log('User ID:', id);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { data } = await axios.post(
        "http://Localhost:8080/api/createArticle",
        {
          title: credentials.title,
          description: credentials.description,
          image: credentials.image,
          username:id,
        }
      );
      if (data?.success) {
        alert("Articles created Successfully!!");
        navigate("/articles");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onchange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      {isLogin && (
        <div className="articles">
          <img
            src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            style={{ objectFit: "cover", height: "600px", width: "100%" }}
          />

          <form onSubmit={handleSubmit} className="newform">
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL here
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                value={credentials.image}
                onChange={onchange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputtitle" className="form-label">
                Title of the Article
              </label>
              <input
                type="text"
                className="form-control"
                id="inputtitle"
                name="title"
                value={credentials.title}
                aria-describedby="emailHelp"
                onChange={onchange}
                required
              />
            </div>

            <div className="mb-3 ">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="content"
                placeholder="Tell your story..."
                name="description"
                value={credentials.description}
                onChange={onchange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
             
            >
              Publish
            </button>
          </form>
        </div>
      )}
      {!isLogin && alert("Please Login First!!")}
      <div>
        <Footer />
      </div>
    </>
  );
}
