import React from "react";
import "../styles/intro.css";
import Image from "../assets/Image.jpeg";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sai Nikhil Podduturi</span> <br /> Web
          Developer
        </span>
        <p className="introPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum
          quidem veritatis nihil. Cum dignissimos velit sequi atque repellendus,
          unde iusto aliquam totam quos sed saepe nulla quasi blanditiis
          necessitatibus quam! Ipsam praesentium quis totam reiciendis accusamus
          consequuntur nisi labore.
        </p>
        <Link>
          <button className="introBtn">Hire Me</button>
        </Link>
      </div>
      <img src={Image} alt="" className="introImg" />
    </section>
  );
};

export default Intro;
