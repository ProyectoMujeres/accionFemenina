import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileSwitch.css';
import { MdEdit, MdLocalPostOffice} from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

export default function ProfileSwitch() {
    return(
        <section className='btn-switch'>
            <IconContext.Provider value={{ size: '1.5em', style: { margin: '0 0.1em' } }}>
                <Link to='/mi-perfil' className='btn-switch-links'><button className='btn-switch-b' id='btn-switch-edit'><MdEdit/>Editar datos de perfil</button></Link>
                <Link to='/mis-comentarios' className='btn-switch-links'><button className='btn-switch-b'><MdLocalPostOffice/>Mis comentarios</button></Link>
                <button className='btn-switch-b'><RiLogoutBoxFill/>Cerrar sesión</button>
            </IconContext.Provider>
        </section>
    )
}