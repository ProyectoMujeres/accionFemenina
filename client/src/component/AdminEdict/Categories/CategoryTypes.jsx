import React, { useEffect, useState } from 'react';
import './CategoryTypes.css';
import { MdEdit, MdDelete } from 'react-icons/md';
import { categoryService } from '../../../utils/categories.service';

export default function CategoryTypes(){
    //El primer valor cTypes tendrá por defecto un array vacio, o lo que se traiga su "modificador" setCTypes
    const [cTypes, setCTypes] = useState([]);
  
    //UserEffect que utiliza el indicador .get para obtener la información de la tabla "Categories" de nuestra base de datos
    useEffect(()=>{
        categoryService.getCategories()
        .then((res)=>{ 
            let tag = res.result;
            setCTypes(tag) //El setCTypes toma los datos obtenidos de la base de datos
        })
    }, [setCTypes])
  
    return (
      <section>
        <section>
            <table className='category-types-table'>
                <tr className='category-types-titles'>
                    <th>Id</th>
                    <th>Icono</th>
                    <th>Tipo</th>  
                    <th>Editar/Borrar</th> 
                </tr>

                <tbody>
                    {/* Crea una fila por cada bloque de información */}
                    {cTypes.map((ct, i) =>
                        <tr key={i} className='category-types-info'>
                            <td>{ct.category_id}</td>
                            <td><img src ={ct.icon} alt= 'avatarUser' className='category-types-img'/></td>
                            <td>{ct.type}</td>
                            <td><MdEdit/> <MdDelete/></td>
                        </tr>
                    )}
                </tbody>
          </table>
        </section>
      </section>
    )
}