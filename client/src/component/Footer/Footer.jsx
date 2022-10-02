import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <section className='footer-info'>
        <h3>Contactos</h3>
        <p>Tlf: +34 647 95 66 66</p>
        <p>info@accionfemenina.com</p>
      </section>

      <Link to='preguntas-frecuentes' className='link'><h3>Preguntas frecuentes</h3></Link>

      <section>
        <IconContext.Provider value={{ size: '3.0em', color: '#f4a460' }}>
          <FaFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </IconContext.Provider>
      </section>
    </footer>
  );
}
