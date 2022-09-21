import React from 'react';
import './Navbar.css';
import logowomen from '../../assets/logowomen.png';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';

export default function Navbar() {
  return (
    <nav className='navigation'>
      <Link to='/'><img src={logowomen} alt='logowomen' className='logo'/></Link>

      <h1>Acción Femenina</h1>
      
      <Menu/>
    </nav>
  );
}
