import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeForm.css'

export default function ChangeForm () {
    return(
        <section className='btn-switch-form'>
            <button><Link to='/registro'>Registro</Link></button>
            <button><Link to='/iniciar-sesión'>Iniciar sesión</Link></button>
        </section>
    )
}