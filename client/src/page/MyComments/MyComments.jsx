import React from 'react'
import './MyComments.css'
import ProfileSwitch from '../../component/ProfileSwitch/ProfileSwitch';
import Avatar from '../../component/Avatar/Avatar';

import { IoCreate } from 'react-icons/io5'
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

export default function MyComments() {
  return (
    <>
    <section className="MyComments-all">
      <section className='MyComments-section'>      
        <h2 className='MyComments-title'>Mis comentarios</h2>
        
      <section className='MyComments-content'>

      <section className='MyComments-avatar'>
          <section>
            <Avatar/>
            <ProfileSwitch/> 
          </section>
      </section>
      
    




    
    <section className="MyComments-container">
          <section className='MyComments-create-section'>
            <Link to='/crear-publicacion' className='MyComments-link'> 
              <button className='MyComments-create'> 
                <IconContext.Provider value={{size: "2.5em"}}>
                  <IoCreate/>
                </IconContext.Provider>
                Crear publicación
              </button>
            </Link>
          </section>
    </section>





    <section className='MyComments-post'>
          <img src ="" alt= ""/>

          <section>
            <p className='MyComments-post-name-date'></p>
            <p className='MyComments-post-content'></p>
          </section>
    </section>


      </section>     {/* se refiere: mycomments-content */}
      </section>      {/* se refiere: mycomments-section */}
    </section>         {/* se refiere: mycomments-all */}
    </>
)
}