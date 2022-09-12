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
        <p>Tlf: +34 647 95 66 66</p>
        <p>info@accionfemenina.com</p>
      </div>
      <h3>Preguntas frecuentes</h3>
      <div>
        <IconContext.Provider value={{ size: "3.0em", color: "#f4a460" }}>
          <FaFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </IconContext.Provider>
      </div>
    </footer>
  );
}
