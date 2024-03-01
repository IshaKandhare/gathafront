import React from "react";
import first from '../Database/Main.png'
import second from '../Database/se.png'
import community from '../Database/Comm.png'

import './Carousel.css'
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide ms-20 "
        
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          class="carousel-inner "
         
        >
          <div class="carousel-item active">
            <img
              src={first}
              class="d-block w-100 imag"
              alt="Image"
            />
          { /*<div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>*/}
          </div>
          <div class="carousel-item">
          <Link className="nav-link ms-10" to="/community">
            <img
              src={community}
              class="d-block w-100 imag"
              alt="Image"
              height={800}
            /> </Link>
            {/*<div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
          </div>*/}
          </div>
          <div class="carousel-item">
          <Link className="nav-link ms-10" to="/jobs">
            <img
              src={second}
              class="d-block w-100 imag"
              alt="Image"
            /> </Link>
           {/*<div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
        </div>*/}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
