import React from 'react';
import "./Search.css" ;
import { FaSearch } from 'react-icons/fa'
import {GrFormClose} from 'react-icons/gr';
export default function Search ({ search, searchInput, handleSearch } ) {
  return (
    <section className='search-container'>
      <input type="text" value={search} ref={searchInput} onChange={handleSearch} placeholder="Buscar..."/>
      
      <button htmlFor='search' type='submit'>
        {!search.length ? < FaSearch /> : <GrFormClose/>}
      </button>  
    </section>
  )
}
