import React, { useEffect, useState } from 'react'
import './Profile.css'
import ProfileSwitch from '../../../component/ProfileSwitch/ProfileSwitch';
import Avatar from '../../../component/Avatar/Avatar';
import { VscSaveAs } from 'react-icons/vsc';
import{ MdOutlineCancel, MdWavingHand } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { userService } from '../../../utils/user.service';

export default function Profile() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    userService.getUser()
      .then((res) => {
        let userInfomation = res.result;
        setUserInfo(userInfomation);
      })
  }, [setUserInfo])

  useEffect(() => {
    userService.updateUser([userInfo])
  }, [])

  return (
    <section className="profile-section">
      <section className='profile-form-all'>      
        <h2 className='profile-form-title'>Mi perfil</h2>

        <IconContext.Provider value={{ size: '1.2em', color: '#f4a460' }}>
          <h2 className='profile-form-welcome'><i>Bienvenida {userInfo.name}</i> <MdWavingHand/></h2>
        </IconContext.Provider>
        <section className='profile-form-container'>
          <section>
            <Avatar userAvatar={userInfo.Avatar}/>
            <ProfileSwitch/> 
          </section>
          
          <section className='profile-form'>
            <form className='profile-form-content'>
              <section className='profile-form-l-i'>
                <label htmlFor='name'>Nombre de usuario:</label>
                <input type='text' placeholder='Maria Jose' name='name' id='name' value={userInfo.name} onChange={(e)=> setUserInfo(e.target.value)}/>
              </section>

              <section className='profile-form-l-i'>
                <label htmlFor='email'>Correo electrónico:</label>
                <input type='text' placeholder='ejemplo@email.com' name='email' id='email' value={userInfo.email} onChange={(e)=> setUserInfo(e.target.value)}/>
              </section>

              <IconContext.Provider value={{ size: '1.5em', style: { margin: '0 0.1em' } }}>
                <section className='profile-form-b'>
                  <button type='submit' className='profile-from-b-s'><VscSaveAs/>Guardar</button>
                  <button type='cancel'className='profile-from-b-c'><MdOutlineCancel/>Cancelar</button>
                </section> 
              </IconContext.Provider>
            </form>
          </section>
        </section>
      </section>
    </section>
  )
}