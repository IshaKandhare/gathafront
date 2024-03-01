import React, { useState, useEffect } from "react";
import Navbar from "../Compoents/Navbar";
import Footer from "../Compoents/Footer";
import axios from "axios";
import "./News.css";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?q=women&apiKey=aa3c035514be426c9143c449e960bec4"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h1 className="text-center my-10 headline">Enjoy Daily Top - Headlines...</h1>
      <div className="news">
        {news.map((val) => {
          return (
            <div
              className="card"
              style={{
                marginTop: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <img
                src={
                  val.urlToImage == null
                    ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"
                    : val.urlToImage
                }
                className="card-img-top"
                alt="Image"
              />
              <div className="card-body">
                <h5 class="card-title">
                  {val.author === "" ? "Janelle Ash" : val.author}
                </h5>
                <p class="card-text">{val.title}</p>
                <a href={val.url} class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
