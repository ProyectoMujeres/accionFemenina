import React from "react";
import "./Category.css";

export default function Category({ categories }) {
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