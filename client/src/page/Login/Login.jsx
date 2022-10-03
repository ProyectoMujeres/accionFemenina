import React, { useState } from 'react';
import ChangeForm from '../../component/ChangeForm/ChangeForm';
import './Login.css';
import { IoAlertCircleSharp } from 'react-icons/io5';
import{ MdOutlineCancel, MdOutlineCheckCircle } from 'react-icons/md';
import { BiError } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { authService } from '../../utils/auth.service';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({ email, password });
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    emailError: '',
    passwordError: '',
  });

  const validate = () => {
    let isReq = true;
    if(!email){
      setValues({ ...values, emailError: 'Campo obligatorio' });
      isReq = false;
    } 
    if (!password){
      setValues({ ...values, passwordError: 'Campo obligatorio' });
      isReq = false;
    } 

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();

    if(isReq){
      const user = { 
        email: email, 
        password: password 
      };

      authService
        .login(user)
        .then((res) => {
          setUser(res.data.token);
          localStorage.setItem('user', res.data.token);
          localStorage.setItem('role', res.data.role);
          localStorage.setItem('user_id', res.data.user_id);
          if (res.data.token) {
            window.open('/mi-perfil', '_self');
          }
        })
        .catch(() => 
          setError('*** Correo electrónico o Contraseña invalida, por favor inténtelo de nuevo')
        );
      }
    }

  return (
      <section className='login-form-all'>   
        <h2 className='login-form-title'>Formulario para Iniciar sesión</h2>
        
        <section className='login-form-container'>
          <ChangeForm/>

          <section className='login-form'>
            <form className='login-form-content'>
              <IconContext.Provider value={{ size: '1em', style: { margin: '0 0.1em' } }}>
                <section className='login-form-l-i'>
                  <label htmlFor='email'>Correo electrónico:</label>
                  <input type='email' placeholder='ejemplo@email.com' name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                  { email === '' ? values.emailError && <p className='login-form-error'><IoAlertCircleSharp/>{values.emailError}</p> : null }
                </section>

                <section className='login-form-l-i'>
                  <label htmlFor='password'>Contraseña:</label>
                  <input type='password' placeholder='123abc*' name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                  { password === '' ? values.passwordError && <p className='login-form-error'><IoAlertCircleSharp/>{values.passwordError}</p> : null }
                </section>
              </IconContext.Provider>

              <section className='login-form-b'>
                <IconContext.Provider value={{ size: '1.5em', style:{ margin: '0 0.1em' } }}>
                  <button type='submit' onClick={handleSubmit} className='login-form-b-a'><MdOutlineCheckCircle/>Aceptar</button>
                  <button className='login-form-b-c' onClick={()=>{ window.open('/', '_self') }}><MdOutlineCancel/>Cancelar</button>
                </IconContext.Provider>
              </section> 

              {error ? 
                <section className='login-form-user-invalid'>
                  <IconContext.Provider value={{size: '2.5em', style:{margin: '0 0.5em'}}}>
                    <BiError/>
                    <p>{error}</p>
                  </IconContext.Provider>
                </section> 
                : null
              }
            </form>
          </section>
        </section>
      </section>
  )
}
