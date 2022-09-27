import React, { useState } from 'react'
import './Profile.css'
import ProfileSwitch from '../../component/ProfileSwitch/ProfileSwitch';
import Avatar from '../../component/Avatar/Avatar';

export default function Profile() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <section className="profile-section">
      <section className='profile-form-all'>      
        <h2 className='profile-form-title'>Mi perfil</h2>

        <h2 className='profile-form-welcome'>Bienvenida</h2>
        
        <section className='profile-form-container'>
          <section>
            <Avatar/>
            <ProfileSwitch/> 
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
                <button type='submit' className='profile-from-b-s'>Guardar</button>
                <button type='cancel' className='profile-from-b-c'>Cancelar</button>
              </section> 
            </form>
          </section>
        </section>
      </section>
    </section>
  )
}