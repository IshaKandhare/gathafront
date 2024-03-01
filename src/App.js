import React from "react";
import "./App.css";
import Home from "./Screen/Home";
import Login from "./Screen/Login";
import Articles from "./Screen/Articles";
import News from "./Screen/News";

import Form from "./Compoents/Form";
import Gallery from "./Screen/Gallery";
import Community from "./Screen/Community";
import Contact from "./Screen/Contact";

import MainPage from "./pages/MainPage";
import JobInfoPage from "./pages/JobInfoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/community" element={<Community />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/articles" element={<Articles />}></Route>
          <Route exact path="/news" element={<News />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>

          <Route exact path="/jobs" element={<MainPage />}></Route>
          <Route exact path="/job-info" element={<JobInfoPage />} />
          <Route exact path="/form" element={<Form />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
