import React, { useEffect, useReducer } from 'react'
import SelectCategory from './SelectCategory/SelectCategory';
import './NewComment.css'
import { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import{ MdOutlineCancel, MdAddComment } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { postService } from '../../utils/post.service';
import { categoryService } from '../../utils/categories.service';

export default function NewComment(){
  const [contentFill, setContentFill] = useState('');
  const [showTags, setShowTags] = useState(false);
  const [categories, setCategories] = useState([]);
  const [choosedTags, setChoosedTags] = useState([]);
  
  useEffect(()=>{
    categoryService.getCategories()
      .then((res)=>{ 
        let tag = res.result;
        setCategories(tag);
      })
  }, [setCategories]);

  const handleClick = (e) => {
     setChoosedTags([e.target.value]);
  }
  
  const handleContentLimit = (e) => {
    let limit = 350;

    setContentFill(e.target.value.slice(0, limit));
  }

  useEffect(() => {
    postService.publishPost()
    .then((res) =>{
      let content = res;
      setContentFill(content);
    })
  }, [])

  return (
    <section className='new-comment-container'>
      <h2>Crear publicación</h2>

      <section className='new-comment-section'>
        <SelectCategory choosedTags={choosedTags} setShowTags={setShowTags} showTags={showTags} categories={categories} handleClick={handleClick}/>
        
        <section className='next-comment-content-b'>
          
          <IconContext.Provider value={{ size: '1.5em', style: { margin: '0 0.1em', color: '#A02C7D' } }}>
            <section>
              <label htmlFor='next-comment-content' className='next-comment-content'>
                <input type='text' id='next-comment-content' value={contentFill} onChange={handleContentLimit} placeholder='Escribe aquí...'/>
                <p>{contentFill.length}/350<FiMoreHorizontal/></p>
              </label>
            </section>
          </IconContext.Provider>

          <IconContext.Provider value={{ size: '1.5em', style: { margin: '0 0.1em' } }}>
            <section className='new-comment-b'>
              <button type='submit' className='new-comment-b-p'><MdAddComment/>Publicar</button>
              <button type='cancel' className='new-comment-b-c'><MdOutlineCancel/>Cancelar</button>
            </section>  
          </IconContext.Provider>
        </section>
      </section>
    </section>
  )
}
