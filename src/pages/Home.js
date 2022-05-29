import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../style/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Chef Mael </h1>
        <p> Le Gout de Chez Nous </p>
        <Link to="/menu">
          <button> Commandez vos envies </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
