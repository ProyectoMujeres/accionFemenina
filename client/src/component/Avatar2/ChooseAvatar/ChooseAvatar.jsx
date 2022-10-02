import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';
import './ChooseAvatar.css';

export default function ChooseAvatar({ getImg }){
  const [preview, setPreview] = useState('');

  const onCrop = defaultPreview => {
    setPreview(defaultPreview);
  };

  const onClose = () => {
    setPreview('');
  };

  const onBeforeFileLoad = () => {};

  const onSelectPic = () => {
    getImg(false, preview);
  };

  const onCancelSelect = () => {
    getImg(false, '');
  };
    
  return(
    <section className='choose-avatar-container'>
      <section className='choose-avatar-section'>
        <section className='choose-avatar-view'>
          <Avatar onCrop={onCrop} onClose={onClose} 
          onBeforeFileLoad={onBeforeFileLoad} imageWidth={280} width={'100%'} height={150} className='choose-avatar-view'/>  
        </section>

        <section className='preview-img'>
          {preview && (
            <img src={preview} alt='Preview' className='preview-img-selected'/>
          )}
        </section>
      </section>
        
      <section className='choose-avatar-b'>
        <button type='button' onClick={onCancelSelect} className='choose-avatar-b-c'>Cancelar</button>

        <button type='button' onClick={onSelectPic} disabled={!preview} className='choose-avatar-b-a'>Aceptar</button>
      </section>
    </section>   
  )
}