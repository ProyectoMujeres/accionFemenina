import React, { useState } from 'react'
import ChangeForm from '../../component/ChangeForm/ChangeForm'
import './Register.css'
import { IoClose } from 'react-icons/io5';
import { IconContext } from "react-icons";

export default function Register() {
  const [name, setName] = useState([]);
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="register-section">
      <section className='register-form-all'>
        <IconContext.Provider value={{size: "2.5em", style:{float: "right", margin: "0 0.5em"}}}>
          <IoClose/>
        </IconContext.Provider>
      
        <h2 className='register-form-title'>Formulario para Registrarse</h2>
        
        <section className='register-form-container'>
          <ChangeForm/>

          <section className='register-form'>
            <form className='register-form-content'>
              <section className='register-form-l-i'>
                <label htmlFor='name'>Nombre:</label>
                <input type='text' placeholder='Maria Contee' name='name' id='name' value={name} onChange={(e)=> setName(e.target.value)}/>
              </section>

              <section className='register-form-l-i'>
                <label htmlFor='email'>Correo electrónico:</label>
                <input type='email' placeholder='ejemplo@email.com' name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </section>

              <section className='register-form-l-i'>
                <label htmlFor='password'>Contraseña:</label>
                <input type='password' placeholder='123abc*' name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
              </section>

              <section className='register-form-l-i'>
                <label htmlFor='date'>Fecha de nacimiento:</label>
                <input type='date' placeholder='Fecha' name='date' id='date' value={date} onChange={(e)=> setDate(e.target.value)}/>
              </section>

              <section className='register-form-b'>
                <button type='submit' className='register-form-b-a'>Aceptar</button>
                <button type='reset' className='register-form-b-r'>Refrescar</button>
                <button type='cancel' className='register-form-b-c'>Cancelar</button>
              </section> 
            </form>
          </section>
        </section>
      </section>
    </section>
  )
}
