import React from 'react';
import './Navbar.css';
import logowomen from '../../assets/logowomen.png';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import {BsFillPatchQuestionFill} from 'react-icons/bs'
import { IconContext } from 'react-icons';

export default function Navbar() {
  return (
    <nav className='navigation'>
      <Link to='/'><img src={logowomen} alt='logowomen' className='logo'/></Link>

      <h1>Acción Femenina</h1>
      
      <section className='navigation-section'>
        <Menu/>

        <IconContext.Provider value={{ size: '3rem', color: '#f4a460' }}>
          <Link to='preguntas-frecuentes'><BsFillPatchQuestionFill/></Link>
        </IconContext.Provider> 
      </section>  
    </nav>
  );
}
