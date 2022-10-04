import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { BiMessageAltError } from 'react-icons/bi';
import { HiLightBulb } from 'react-icons/hi';
import { IconContext } from 'react-icons';


export default function NotFound(){
    return(
        <section className='not-found-container'>
            <IconContext.Provider value={{ size: '10rem', style: { margin: '0 0.1em', color: '#ff0059' } }}>
                <BiMessageAltError/>
            </IconContext.Provider>
 
                <h3>¡Ups! Esta página no existe</h3>

                <IconContext.Provider value={{ size: '2em', color: '#1d8b1b' }}>
                    <section>
                        <Link to='/' className='not-found-redirect-link'>
                            <button className='not-found-redirect'> <HiLightBulb/> Clica aquí para volver a la página principal.</button>
                        </Link>
                    </section>
                </IconContext.Provider>
        </section>
    )
}