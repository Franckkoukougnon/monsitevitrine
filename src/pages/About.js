import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../style/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
          et est at mattis. Morbi nec massa dictum, semper tellus id, laoreet
          enim. Nullam a orci eu odio volutpat vestibulum id quis erat. Fusce
          accumsan odio sit amet nisi tempor, sit amet suscipit ante lacinia.
          Aliquam in cursus elit, ut posuere nibh. Donec velit neque, varius sed
          dignissim sed, efficitur in urna. Etiam vitae dictum odio. Fusce
          auctor volutpat odio at varius. Nunc viverra leo non neque fermentum
          gravida. Aenean a posuere dolor. Curabitur a congue nunc. Nam et lacus
          consectetur, pretium sapien at, tempor tortor. Aenean facilisis
          iaculis faucibus. Cras id egestas neque.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
