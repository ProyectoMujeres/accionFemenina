import React, { useEffect, useState } from "react";
import "./Category.css";
import GetInfo from '../../utils/GetInfo';

export default function Category() {
  const [categories, setCategories] = useState([]);
  
  useEffect(()=>{
    GetInfo.getCategories()
      .then((res)=>{ 
        let tag = res.result;
        setCategories(tag)
      })
  }, [setCategories])

  return (
    <section className="category-container">
      <ul  className="category-list">
        {categories.map((op, i) => 
          <section key={i} className='category-list-items'>
            <li>{op.type} <img src={op.icon} alt='icon' className='category-list-items-img'/></li>
          </section>
        )}
      </ul>
    </section>
  );
}