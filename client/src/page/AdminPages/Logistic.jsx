import React, { useState } from 'react';
import CategoryTypes from '../../component/AdminEdict/Categories/CategoryTypes';
import UsersInfo from '../../component/AdminEdict/UserInfo/UsersInfo';
import UsersPosts from '../../component/AdminEdict/UsersPosts/UsersPosts';

import './Logistic.css'

export default function Logistic(){
    const tables = ['Usuarias', 'Publicaciones', 'Categorías'];
    const [myTables, setMyTables] = useState('');

    return(
        <section  className='logistic-section'>
            <section className='logistic-container'> 
                <section className='logistic-table-switch'>
                    {tables.map((tables, i) =>(
                        <>
                            <button  key={i} className='logistic-table-switch-b' onClick={()=> setMyTables(tables)}>{tables}</button>
                        </>
                    ))}
                </section>

                <section>
                    {myTables === '' && (<UsersInfo/>)}
                    {myTables === 'Usuarias' && (<UsersInfo/>)}
                    {myTables === 'Publicaciones' && (<UsersPosts/>)}
                    {myTables === 'Categorías' &&(<CategoryTypes/>)} 
                </section>  
            </section>
        </section>
    )
}