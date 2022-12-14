import { useState } from 'react';
import './Avatar.css'
import { ImFilePicture } from 'react-icons/im'
import { IconContext } from 'react-icons/lib';
import ChooseAvatar from './ChooseImage/ChooseAvatar';


export default function Avatar(){  
  //Estructura de los valores iniciales
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg:
    '../../assets/iconNavbar.png'
  });

  //Capta y trae los cambios que se efectuan en los valores iniciales
  const handleFileChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setPicture({
      ...picture,
      img: url,
      cropperOpen: true
    });
  };

  return (
    <section className='avatar-container'>
      <img src={picture.croppedImg} alt='Avatar'className='avatar-img'/>
         
      <label htmlFor='search-avatar' className='search-avatar'>
        <IconContext.Provider value={{ size: '1.5rem' }}>
          <ImFilePicture/> 
        </IconContext.Provider>

        <p>Selecciona una imagen</p>

        <input type='file' accept='image/*' onChange={handleFileChange}  id='search-avatar'/>
      </label>

      <ChooseAvatar picture={picture} setPicture={setPicture}/>
    </section>
  );
}