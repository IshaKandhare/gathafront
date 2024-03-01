import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo  from '../Database/logo.png'

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <nav className="navbar  fixed-top navbar-expand-lg  fs-5">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo"  width="80" height="60" />
            </Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                
                <Link className="nav-link " to="/articles">
                  Articles
                </Link>
                <Link className="nav-link " to="/news">
                  News
                </Link>
               
                <Link className="nav-link " to="/jobs">
                  Jobs
                </Link>

                <Link
                  className="nav-link   "
                  aria-current="page"
                  to="/community"
                >
                  Community
                </Link>
                <Link className="nav-link " to="/contact">
                 Contact 
                </Link>
                <Link className="nav-link " to="/gallery">
                  Gallery
                </Link>
                <Link className="nav-link log " to="/login">
                  <i class="fa-solid fa-user " style={{ color: "#3e1939" }}></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
