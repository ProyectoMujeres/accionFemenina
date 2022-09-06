import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h3>Contactos</h3>
        <p>647956666</p>
        <p>info@casadelamujer.com</p>
      </div>
      <div>
        <IconContext.Provider value={{ size: "3.0em", color: "white",   }}>
          <FaFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </IconContext.Provider>
      </div>
    </footer>
  );
}
