import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryTypes from '../Categories/CategoryTypes';
import UsersInfo from '../UserInfo/UsersInfo';
import UsersPosts from '../UsersPosts/UsersPosts';
import './Logistic.css'

export default function Logistic(){
    const [showTableUsers, setShowTableUsers] = useState(false);
    const [showTablePosts, setShowTablePosts] = useState(false);
    const [showTableCategories, setShowTableCatories] = useState(false);

    const handleClick = () => {
        
    }

    return(
        <section className='logistic-container'>
            <section className='logistic-table-switch'>
                <button className='logistic-table-switch-b' onClick={()=> setShowTableUsers((showTableUsers) => !showTableUsers)}>Usuarias</button>
                <button  className='logistic-table-switch-b'onClick={()=> setShowTablePosts((showTablePosts) => !showTablePosts)}>Publicaciones</button>
                <button  className='logistic-table-switch-b'onClick={()=> setShowTableCatories((showTableCategories) => !showTableCategories)}>Categorías</button>
            </section>

            <section>
                <UsersPosts/>
                <CategoryTypes/>
                <UsersInfo/>
            </section>  
        </section>
    )
}