import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from './component/Footer/Footer';
import Home from './page/Home/Home';
import Register from './page/Register/Register';
import Login from './page/Login/Login';
import Profile from './page/Profile/Profile';  
import './App.css';
import Comment from './page/Comments/Comment';
import {BrowserRouter} from 'react-router-dom';
import MenuAdmin from './component/Navbar/MenuAdmin';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>    
        <Comment/>
       <MenuAdmin/> 
        <Login/>
        <Profile/>
        <Register/>
      <Footer/>
    </BrowserRouter>
  );
}

