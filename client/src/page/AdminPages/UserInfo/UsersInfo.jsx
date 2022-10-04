import React, { useEffect, useState } from 'react';
import './UsersInfo.css';
import { MdEdit, MdDelete } from 'react-icons/md';
import { userService } from '../../../utils/user.service';

export default function UsersInfo(){
    const [uInfo, setUInfo] = useState([]);
  
    useEffect(()=>{
        userService.getUsers()
        .then((res)=>{ 
            let tag = res.result;
            setUInfo(tag)
        })
    }, [setUInfo])
  
    return (
      <section>
        <section>
            <table className='category-types-table'>
                <tr className='category-types-titles'>
                    <th>Id</th>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Correo electrónico</th>
                    <th>Role</th> 
                    <th>Editar/Borrar</th> 
                </tr>

                <tbody>
                    {uInfo.map((ui, i) =>
                        <tr key={i} className='category-types-info'>
                            <td>{ui.user_id}</td>
                            <td><img src ={ui.avatar} alt= 'avatarUser' className='category-types-img'/></td>
                            <td>{ui.name}</td>
                            <td>{ui.email}</td>
                            <td>{ui.role}</td>
                            <td><MdEdit/> <MdDelete/></td>
                        </tr>
                    )}
                </tbody>
          </table>
        </section>
      </section>
    )
}