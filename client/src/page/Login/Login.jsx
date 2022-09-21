import React, { useState } from 'react'
import ChangeForm from '../../component/ChangeForm/ChangeForm'
import './Login.css'
import { IoClose } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../utils/auth.service';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState({ email, password });
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    authService
      .login(user)
      .then((res) => {
        setUser(res.data.token);
        localStorage.setItem('user', res.data.token);
        if (res.data.token) {
          navigation('/mi-perfil', { replace: true })
        }
      })
      .catch(() => setError('Hubo un error'));
  }

  return (
    <section className='login-section'>
      <section className='login-form-all'>
        <IconContext.Provider value={{size: '2.5em', style:{float: 'right', margin: '0 0.5em'}}}>
          <IoClose/>
        </IconContext.Provider>
      
        <h2 className='login-form-title'>Formulario para Iniciar sesión</h2>
        
        <section className='login-form-container'>
          <ChangeForm/>

          <section className='login-form'>
            <form className='login-form-content'>
              <section className='login-form-l-i'>
                <label htmlFor='email'>Correo electrónico:</label>
                <input type='email' placeholder='ejemplo@email.com' name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </section>

              <section className='login-form-l-i'>
                <label htmlFor='password'>Contraseña:</label>
                <input type='password' placeholder='123abc*' name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
              </section>

              <section className='login-form-b'>
                <button onClick={handleSubmit} className='login-form-b-a'>Aceptar</button>
                <button type='cancel' className='login-form-b-c'>Cancelar</button>
              </section> 
            </form>
          </section>
        </section>
      </section>
      {error}
    </section>
  )
}
