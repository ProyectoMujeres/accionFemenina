import React from 'react';
import iconNavbar from'../../assets/iconNavbar.png';
import MenuAdmin from './MenuAdmin/MenuAdmin';
import MenuUser from './MenuUser/MenuUser';
import { Link } from 'react-router-dom';

export const Menu = () => {
    //Condicional que retornara un menu en función del estado (logeado o no) del usuario y su role 
    if (localStorage.getItem("user") && localStorage.getItem("role").includes("admin")){
        return  <><MenuAdmin/> <MenuUser/></>
    } else if (localStorage.getItem("user")) {
        return <MenuUser/>
    } else{
        return(
            <button className='menu-profile'>
                <Link to='/registro'>
                    <img src={iconNavbar} alt='mujer de perfil' className='icon-Navbar'/>
                </Link>
            </button>
        )
    }
}