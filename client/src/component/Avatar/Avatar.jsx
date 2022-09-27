import { useState } from 'react';
import './Avatar.css'
import { TbWorldUpload } from 'react-icons/tb'
import { IconContext } from 'react-icons/lib';
import ChooseAvatar from './ChooseImage/ChooseAvatar';


export default function Avatar(){  
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg:
    '../../assets/iconNavbar.png'
  });

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
      <section className='avatar-img'>
        <img src={picture.croppedImg} alt='Avatar'/>
      </section>
         
      <label htmlFor='search-avatar' className='search-avatar'>
        <IconContext.Provider value={{ size: '1.5rem' }}>
          <TbWorldUpload/> 
        </IconContext.Provider>

        <p>Selecciona una imagen</p>

        <input type='file' accept='image/*' onChange={handleFileChange}  id='search-avatar'/>
      </label>

      <ChooseAvatar picture={picture} setPicture={setPicture}/>
    </section>
  );
}