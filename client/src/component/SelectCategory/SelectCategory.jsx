import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import GetInfo from '../../utils/GetInfo';
import './SelectCategory.css'

export default function SelectCategory(){
  const [showTags, setShowTags] = useState(false);
  const [categories, setCategories] = useState([]);
  
  useEffect(()=>{
    GetInfo.getCategories()
      .then((res)=>{ 
        let tag = res.result;
        setCategories(tag)
      })
  }, [setCategories])
  
    return(
      <section className='select-category-container'>
        <IconContext.Provider value={{ size: '2.5em' }}>
          <section className='select-category-dropdown'>
            <button onClick={()=> setShowTags((showTags) => !showTags)}>
              <MdOutlineKeyboardArrowDown/><h3>Seleccione la categoría:</h3>
            </button>
          </section>

          <section className='select-category-item'>
            {showTags ? 
              (
                <section className='select-category-check'>
                  {categories.map((op, i)=>
                    <section key={i} className='select-category-type'>
                      <input type="checkbox" id={op.category_id} name={op.category_id} value={op.type}/>

                      <label htmlFor={op.category_id}>{op.type}</label>

                      <img src={op.icon} alt=''/>
                    </section>
                  )}
                </section>
              )
              :
              null
            }
          </section>   
        </IconContext.Provider>
      </section>
    )
}