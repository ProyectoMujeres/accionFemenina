import React, { useEffect, useState } from 'react';
import './CategoryTypes.css';
import { MdEdit, MdDelete } from 'react-icons/md';
import { categoryService } from '../../../utils/categories.service';

export default function CategoryTypes(){
    const [cTypes, setCTypes] = useState([]);
  
    useEffect(()=>{
        categoryService.getCategories()
        .then((res)=>{ 
            let tag = res.result;
            setCTypes(tag)
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