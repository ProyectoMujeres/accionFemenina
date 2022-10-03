import React, { useState } from 'react';
import './MyComments.css';
import ProfileSwitch from '../../../component/ProfileSwitch/ProfileSwitch';
import Avatar from '../../../component/Avatar/Avatar';
import { CgHello } from 'react-icons/cg'
import { IoCreate } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { postService } from '../../../utils/post.service';

export default function MyComments() {
  const [getUserPosts, setGetUserPosts] = useState([]);

  useEffect(() => {
    postService.getPostByUser()
    .then((res) =>{
      let usersPost= res;
      setGetUserPosts(usersPost);
    })
  }, [setGetUserPosts]);

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
            <section className='my-comments-create-section'>
              <Link to='/crear-publicacion' className='my-comments-link'> 
                <button className='my-comments-posts-create-b'> 
                  <IconContext.Provider value={{size: '2.5em'}}>
                    <IoCreate/>
                    </IconContext.Provider>
                    Crear publicación
                  </button>
              </Link>
            </section>

            {getUserPosts.length > 0 ?
              <section>
                { getUserPosts.map((post, i) => 
                  <section key={i} className='my-comments-post'>
                    <img src ={post.avatar} alt= 'avatarUser'/>

                    <section className='my-comments-post-info'>
                      <p className='my-comments-post-name-date'>{post.name} - {post.date}</p>
                      <p className='my-comments-post-content'>{post.content}</p>
                      <p className='my-comments-post-tags'>Tema(s) relacionado(s): <span>{post.type}</span></p>
                    </section>
                  </section>
                )}
              </section> 
              :
              <IconContext.Provider value={{ size: '5em', style: { margin: '0 1em', color: '#A02C7D' } }}>
                <p className='my-coments-empty'><CgHello/>No tiene ninguna publicación hecha.</p>
              </IconContext.Provider>  
            }
          </section> 
        </section>
      </section>
    </section>
)
}