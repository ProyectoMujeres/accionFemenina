import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeForm.css'

export default function ChangeForm () {
    return(
        <section className='btn-switch-form' id='btn-switch-form'>
            <Link to='/registro'><button className='btn-switch-form-b' id='btn-switch-form-b'>Registro</button></Link>
            <Link to='/iniciar-sesion'><button className='btn-switch-form-b' id='btn-switch-form-b'>Iniciar sesión</button></Link>
        </section>
    )
}