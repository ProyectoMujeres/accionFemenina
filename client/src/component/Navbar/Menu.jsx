import React from 'react';
import iconNavbar from'../../assets/iconNavbar.png';
import MenuAdmin from './MenuAdmin/MenuAdmin';
import MenuUser from './MenuUser/MenuUser';
import { Link } from 'react-router-dom';

export const Menu = ({ user }) => {
    if (user && user.roles.includes("admin")){
        return  <MenuAdmin/>
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