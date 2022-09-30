import React, { useCallback, useRef, useState } from 'react';
import "./Comment.css" ;
import Search from '../../component/Search/Search';
import Category from '../../component/Category/Category';
import { IoCreate } from 'react-icons/io5'
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

export default function Comment() {
  const [search, setSearch] = useState(""); 
  const searchInput = useRef();
  const handleSearch = useCallback(() => { setSearch(searchInput.current.value); }, []); 
  
  return (
    <section className="comment-container">
      <section className='comment-search-create-section'>
        <Link to='/crear-publicacion' className='comment-link'> 
          <button className='comment-create'> 
            <IconContext.Provider value={{size: "2.5em"}}>
              <IoCreate/>
            </IconContext.Provider>
            Crear publicación
          </button>
        </Link>

        <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/> 
      </section>

      <section className='comment-filter-post-section'>
        <Category/>

        <section className='comment-post'>
          <img src ="" alt= ""/>

          <section>
            <p className='comment-post-name-date'></p>
            <p className='comment-post-content'></p>
          </section>
        </section>
      </section>
    </section>
  )
}
