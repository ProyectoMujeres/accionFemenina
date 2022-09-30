import React, { useState } from 'react';
import { HiUser } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'

export default function AvatarImg({ getImg, imageSrc }){
  const [toggle, setToggle] = useState(null);

  const handleToggleClick = () => {
    setToggle(true);
    getImg(true, imageSrc);
  };

  const deletePic = () => {
    setToggle(false);
    getImg(false, '');
  };

  return(
    <section className='avatar-img-container'>
      <button onClick={handleToggleClick} className='avatar-img-bust'>
        {(!toggle || !imageSrc) ?
          <HiUser/>
          : 
          (
          <img  src={imageSrc} alt='avatar' className='avatar-img-rounded' />
          )
        }
      </button>

      {toggle && imageSrc && (
        <button onClick={deletePic} className='avatar-img-remove'>
          <IoMdTrash/>
        </button>
      )}
    </section>
  )
}