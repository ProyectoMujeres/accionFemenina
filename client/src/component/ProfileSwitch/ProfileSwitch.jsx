import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileSwitch.css';
import { MdEdit, MdLocalPostOffice} from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

export default function ProfileSwitch(){
    const handleClick = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.removeItem("user_id");
        window.location.reload(false);
    }

    return(
        <section className='btn-switch'>
            <IconContext.Provider value={{ size: '1.5em', style: { margin: '0 0.1em' } }}>
                <Link to='/mi-perfil' className='btn-switch-links'><button className='btn-switch-b' id='btn-switch-edit'><MdEdit/>Editar datos de perfil</button></Link>
                <Link to='/mis-publicaciones' className='btn-switch-links'><button className='btn-switch-b'><MdLocalPostOffice/>Mis publicaciones</button></Link>
                <button className='btn-switch-b' onClick={handleClick}><RiLogoutBoxFill/>Cerrar sesión</button>
            </IconContext.Provider>
        </section>
    )
}