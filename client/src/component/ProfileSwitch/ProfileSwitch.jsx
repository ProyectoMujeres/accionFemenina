import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileSwitch.css';

export default function ProfileSwitch() {
    return(
        <section className='btn-switch'>
            <Link to='/mi-perfil'><button className='btn-switch-b'>Editar datos de perfil</button></Link>
            <Link to='/mis-comentarios'><button className='btn-switch-b'>Mis comentarios</button></Link>
            <button className='btn-switch-b'>Cerrar sesión</button>
        </section>
    )
}