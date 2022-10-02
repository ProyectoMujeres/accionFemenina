import React, { useState } from 'react';
import AvatarImg from './AvatarImg/AvatarImg';
import ChooseAvatar from './ChooseAvatar/ChooseAvatar';

export default function Avatar() {
    const [isOpen, setIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
  
    const getImg = (isOpened, imageSrc) => {
      setIsOpen(isOpened);
      setImageSrc(imageSrc);
    };
  
    return(
        <section>
            <AvatarImg getImg={getImg} imageSrc={imageSrc}/>
                {isOpen && !imageSrc && (
                        <section className='create-avatar-content'>
                            <ChooseAvatar getImg={getImg} />
                        </section>
                )}
            <AvatarImg/>
        </section>       
    )
}