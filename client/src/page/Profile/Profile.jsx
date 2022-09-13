import React, { useState } from 'react'
import './Profile.css'
import { IoClose } from 'react-icons/io5';
import { IconContext } from "react-icons";

export default function Profile() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="profile-section">

      <section className='profile-form-all'>

        <IconContext.Provider value={{size: "2.5em", style:{float: "right", margin: "0 0.5em"}}}>
          <IoClose/>
        </IconContext.Provider>
        <h2 className='profile-form-title'>Perfil</h2>

        <h2>Bienvenida/o</h2>
        
        <section className='profile-form-container'>

        <section className='btn-switch-form'>
            <button>Editar datos de perfil</button>
            <button>Mis comentarios</button>
            <button>Cerrar sesión</button>
        </section>

          <section className='profile-form'>
            <form className='profile-form-content'>
              <section className='profile-form-l-i'>
                <label htmlFor='name'>Nombre de usuario:</label>
                <input type='text' placeholder='Maria Jose' name='name' id='name' value={name} onChange={(e)=> setName(e.target.value)}/>
              </section>

              <section className='profile-form-l-i'>
                <label htmlFor='email'>Correo electrónico:</label>
                <input type='text' placeholder='ejemplo@email.com' name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </section>

              <section className='profile-form-l-i'>
                <label htmlFor='password'>Contraseña:</label>
                <input type='password' placeholder='123abc*' name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
              </section>

              <section className='profile-form-b'>
                <button>Guardar</button>
                <button>Cancelar</button>
              </section> 
            </form>
          </section>
        </section>
      </section>
    </section>
  )
}