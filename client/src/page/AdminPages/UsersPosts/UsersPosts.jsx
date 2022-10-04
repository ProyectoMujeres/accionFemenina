import React, { useEffect, useState } from 'react';
import { postService } from '../../../utils/post.service';
import './UsersPosts.css';
import { MdEdit, MdDelete } from 'react-icons/md';

export default function UsersPosts(){
    const [uPosts, setUPosts] = useState([]);
    
    useEffect(() => {
      postService.getPosts()
        .then((res) => { 
          let posts = res;
          setUPosts(posts);
        })
    }, [setUPosts]);  
  
    return (
      <section>
        <section>
            <table className='users-posts-table'>
                <tr className='users-posts-titles'>
                    <th>Id</th>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Publicación</th>
                    <th>Fecha</th>
                    <th>Categoría</th>
                    <th>Editar/Borrar</th>
                </tr>

                <tbody>
                    {uPosts.map((up, i) =>
                        <tr key={i} className='users-posts-info'>
                            <td>{up.post_id}</td>
                            <td><img src ={up.avatar} alt= 'avatarUser' className='users-posts-img'/></td>
                            <td>{up.name}</td>
                            <td>{up.content}</td>
                            <td>{up.date}</td>
                            <td>{up.type}</td>
                            <td><MdEdit/> <MdDelete/></td>
                        </tr>
                    )}
                </tbody>
          </table>
        </section>
      </section>
    )
}