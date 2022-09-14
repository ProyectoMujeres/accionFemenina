import React, { useCallback, useRef, useState } from 'react';
import "./Comment.css" ;
import Search from '../../component/Search/Search';
import Category from '../../component/Category/Category';



export default function Comment() {
  const [search, setSearch] = useState(""); 
  const searchInput = useRef();
  const handleSearch = useCallback(() => { setSearch(searchInput.current.value); }, []); 
  
  return (
    <section className="comment-container">
    <section>
    <button>Crear publicación</button>
    <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/> 
    </section>
    <section>
 <Category/><section>
  <img src ="" alt= ""/>
  <p></p>

 </section>
</section>

    </section>
  )
}
