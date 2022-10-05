import React, { useEffect, useState } from 'react';
import { postService } from '../../../utils/post.service';
import './UsersPosts.css';
import { MdEdit, MdDelete } from 'react-icons/md';

export default function UsersPosts(){
    //El primer valor uPosts tendrá por defecto un array vacio, o lo que se traiga su "modificador" setUPosts
    const [uPosts, setUPosts] = useState([]);
    
     //UserEffect que utiliza el indicador .get para obtener la información de la tabla "Posts" de nuestra base de datos
    useEffect(() => {
      postService.getPosts()
        .then((res) => { 
          let posts = res;
          setUPosts(posts); //El setUPosts toma los datos obtenidos de la base de datos
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
                    {/* Crea una fila por cada bloque de información */}
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