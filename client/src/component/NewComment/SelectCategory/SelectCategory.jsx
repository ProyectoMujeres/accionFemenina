import React from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './SelectCategory.css';

export default function SelectCategory({ choosedTags, setShowTags, showTags, categories, handleClick }){
    return(
      <section className='select-category-container'>
        {choosedTags ? 
          <section>{choosedTags.map((choose, i) => 
            <ul key={i}>
              <li>{choose}</li>
            </ul>
          )}</section> 
          : 
          null
        }
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
                      <input type="checkbox" id={op.category_id} name={op.category_id} value={op.type} onChange={(e)=> handleClick(e)}/>

                      <label htmlFor={op.category_id}>{op.type}</label>

                      <img src={op.icon} alt=''  className='select-category-type-img'/>
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