import React, { Fragment } from 'react';
import "./Search.css" ;


export default function Search ({ search, searchInput, handleSearch } ) {
  return (
    <Fragment>
    <input type="text" value={search} ref={searchInput} onChange={handleSearch} placeholder="Buscar..."/> 

    </Fragment>
  )
}
