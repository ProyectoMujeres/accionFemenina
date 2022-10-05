import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Comment.css' ;
import Search from '../../component/Search/Search';
import Category from '../../component/Category/Category';
import { CgHello } from 'react-icons/cg';
import { IoCreate } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { postService } from '../../utils/post.service';
import { categoryService } from "../../utils/categories.service";

export default function Comment() {
  const [postsPublished, setPostsPublished] = useState([]);
  const [search, setSearch] = useState(''); 
  const searchInput = useRef();
  
  useEffect(() => {
    postService.getPosts()
      .then((res) => { 
        let publish = res;
        setPostsPublished(publish);
      })
  }, [setPostsPublished]);

  const handleSearch = useCallback(() => { 
    setSearch(searchInput.current.value); 
  }, []); 

  const filterPosts = useMemo(() => 
      postsPublished.filter((pp) => {
        let ppContent = pp.content.toLowerCase().includes(search.toLocaleLowerCase()); 
        let ppType = pp.type.toLowerCase().includes(search.toLocaleLowerCase());
        let ppName = pp.name.toLowerCase().includes(search.toLocaleLowerCase()); 
        return ppContent + ppType + ppName;
      }), 
  [postsPublished, search]);

  const [categories, setCategories] = useState([]);
  
  useEffect(()=>{
    categoryService.getCategories()
      .then((res)=>{ 
        let tag = res.result;
        setCategories(tag)
      })
  }, [setCategories])


  return (
    <section className='comment-container'>
      <section className='comment-search-create-section'>
        <Link to='/crear-publicacion' className='comment-link'> 
          <button className='comment-create'> 
            <IconContext.Provider value={{size: '2.5em'}}>
              <IoCreate/>
            </IconContext.Provider>
            Crear publicación
          </button>
        </Link>

        <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/> 
      </section>

      <section className='comment-filter-post-section'>
        <Category categories={categories}/>

        {filterPosts.length > 0 ?
          <section>
            {filterPosts.map((pp, i) =>
              <section key={i} className='comment-post'>
                <img src ={pp.avatar} alt= 'avatar'/>

                <section className='comment-post-info'>
                  <p className='comment-post-name-date'>{pp.name} - {pp.date}</p>
                  <p className='comment-post-content'>{pp.content}</p>
                  <p className='comment-post-tags'>Tema(s) relacionado(s): <span>{pp.type}</span></p>
                </section>
              </section>
            )}
          </section>
          :
          <IconContext.Provider value={{ size: '5em', style: { margin: '0 1em', color: '#A02C7D' } }}>
            <p className='comment-post-empty'><CgHello/>Lo sentimos, no se ha encontrado ninguna publicación relacionada.</p>
          </IconContext.Provider>  
        }
      </section>
    </section>
  )
}
