import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../style/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      t
      <div className="headerContainer">
        <h1> Mael Restaurant</h1>
        <p> Bienvenue dans notre restaurant </p>
        <Link to="/menu">
          <button> Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
