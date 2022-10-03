import React from 'react'
import './MyComments.css'
import ProfileSwitch from '../../../component/ProfileSwitch/ProfileSwitch';
import Avatar from '../../../component/Avatar/Avatar';

import { IoCreate } from 'react-icons/io5'
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

export default function MyComments() {
  return (
    <section>
      <section className='my-comments-all'>
        <h2 className='my-comments-title'>Mis publicaciones</h2>

        <section className='my-comments-content'>
          <section className='my-coments-avatar'>   
                <Avatar/>
                <ProfileSwitch/>     
          </section>

          <section className='my-commets-posts-section'> 
            <section>
              <Link to='/crear-publicacion' className='my-comments-link'> 
                <button className='my-comments-posts-create-b'> 
                  <IconContext.Provider value={{size: '2.5em'}}>
                    <IoCreate/>
                    </IconContext.Provider>
                    Crear publicación
                  </button>
              </Link>
            </section>
            
            <section className='my-comments-post'>
              <img src ='' alt= ''/>

              <section>
                <p className='my-comments-post-name-date'></p>
                <p className='my-comments-post-content'></p>
              </section>
            </section>
          </section> 
        </section>{/* se refiere: mycomments-content */}
      </section>{/* se refiere: mycomments-all */}
    </section>
)
}