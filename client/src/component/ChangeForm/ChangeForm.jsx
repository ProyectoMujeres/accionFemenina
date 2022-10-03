import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeForm.css';
import { HiUserAdd } from 'react-icons/hi';
import { RiLoginBoxFill} from 'react-icons/ri';
import { IconContext } from 'react-icons';

export default function ChangeForm () {
    return(
        <section className='btn-switch-form' id='btn-switch-form'> 
            <IconContext.Provider value={{ size: '1.5em', style: { margin: '0 0.1em' }}}>
                <Link to='/registro' className='btn-switch-form-links'><button className='btn-switch-form-b' id='btn-switch-form-b'><HiUserAdd/> Registro</button></Link>
                <Link to='/iniciar-sesion' className='btn-switch-form-links'><button className='btn-switch-form-b' id='btn-switch-form-b'><RiLoginBoxFill/>Iniciar sesión</button></Link>
            </IconContext.Provider>
        </section>
    )
}