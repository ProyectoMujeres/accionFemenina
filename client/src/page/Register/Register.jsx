import React, { useState } from 'react';
import ChangeForm from '../../component/ChangeForm/ChangeForm';
import './Register.css';
import { BiError } from 'react-icons/bi';
import { IoClose, IoAlertCircleSharp } from 'react-icons/io5';
import{ MdOutlineCancel, MdOutlineCheckCircle, MdOutlineRefresh } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { authService } from '../../utils/auth.service';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigate();
  const [values, setValues] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    dateError: '',
  });

  const validate = () => {
    let isReq = true;
    if(!name){
      setValues({ ...values, nameError: 'Campo obligatorio' });
      isReq = false;
    }
    if(!email){
      setValues({ ...values, emailError: 'Campo obligatorio' });
      isReq = false;
    }
    if(!password){
      setValues({ ...values, passwordError: 'Campo obligatorio' });
      isReq = false;
    }
    if(!date){
      setValues({ ...values, dateError: 'Campo obligatorio' });
      isReq = false;
    }
    
    return isReq;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();

    if(isReq){
      const user = { 
        name: name, 
        email: email, 
        password: password, 
        birthdate: date,
        role:' ', 
        avatar:' '
      };  

      authService
        .register(user)
        .then((res) => {
          if(res){
            navigation('/iniciar-sesion', { replace: true }); 
          }
        })
        .catch(
          setError('*** Hubo un error, por favor inténtelo de nuevo')
        );
    }
  }

  return (
      <section className='register-form-all'>
        <h2 className='register-form-title'>Formulario para Registrarse</h2>
        
        <section className='register-form-container'>
          <ChangeForm/>

          <section className='register-form'>
            <form className='register-form-content'>
              <IconContext.Provider value={{ size: '1em', style: { margin: '0 0.1em' } }}>
                <section className='register-form-l-i'>
                  <label htmlFor='name'>Nombre:</label>
                  <input type='text' placeholder='Maria Contee' name='name' id='name' value={name} onChange={(e)=> setName(e.target.value)} required/>
                  { name === '' ? values.nameError && <p className='register-form-error'><IoAlertCircleSharp/>{values.nameError}</p> : null }
                </section>

                <section className='register-form-l-i'>
                  <label htmlFor='email'>Correo electrónico:</label>
                  <input type='email' placeholder='ejemplo@email.com' name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                  { email === '' ? values.emailError && <p className='register-form-error'><IoAlertCircleSharp/>{values.emailError}</p> : null }
                </section>

                <section className='register-form-l-i'>
                  <label htmlFor='password'>Contraseña:</label>
                  <input type='password' placeholder='123abc*' name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                  { password === '' ? values.passwordError && <p className='register-form-error'><IoAlertCircleSharp/>{values.passwordError}</p> : null }
                </section>

                <section className='register-form-l-i'>
                  <label htmlFor='date'>Fecha de nacimiento:</label>
                  <input type='date' placeholder='Fecha' name='date' id='date' value={date} onChange={(e)=> setDate(e.target.value)} required/>
                  { date === '' ?values.dateError && <p className='register-form-error'><IoAlertCircleSharp/>{values.dateError}</p> : null }
                </section>
              </IconContext.Provider>

              <section className='register-form-b'>
                <IconContext.Provider value={{ size: '1.5em', style:{ margin: '0 0.1em' } }}>
                  <button type='submit' onClick={handleSubmit} className='register-form-b-a'> <MdOutlineCheckCircle/>Aceptar</button>
                  <button type='reset' onClick={() => window.location.reload(false)} className='register-form-b-r'> <MdOutlineRefresh/>Refrescar</button>
                  <button className='register-form-b-c' onClick={()=>{ window.open('/', '_self') }}><MdOutlineCancel/>Cancelar</button>
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
