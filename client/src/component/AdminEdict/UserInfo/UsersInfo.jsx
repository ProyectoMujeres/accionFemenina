import React, { useEffect, useState } from 'react';
import './UsersInfo.css';
import { MdEdit, MdDelete } from 'react-icons/md';
import { userService } from '../../../utils/user.service';

export default function UsersInfo(){
    //El primer valor uInfo tendrá por defecto un array vacio, o lo que se traiga su "modificador" setUInfo
    const [uInfo, setUInfo] = useState([]);
  
    //UserEffect que utiliza el indicador .get para obtener la información de la tabla "Users" de nuestra base de datos
    useEffect(()=>{
        userService.getUsers()
        .then((res)=>{ 
            let tag = res.result;
            setUInfo(tag) //El setUInfo toma los datos obtenidos de la base de datos
        })
    }, [setUInfo])
  
    return (
      <section>
        <section>
            <table className='users-info-table'>
                <tr className='users-info-titles'>
                    <th>Id</th>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Correo electrónico</th>
                    <th>Role</th> 
                    <th>Editar/Borrar</th> 
                </tr>

                <tbody>
                      {/* Crea una fila por cada bloque de información */}
                    {uInfo.map((ui, i) =>
                        <tr key={i} className='users-info-info'>
                            <td>{ui.user_id}</td>
                            <td><img src ={ui.avatar} alt= 'avatar' className='users-info-img'/></td>
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