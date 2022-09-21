
import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from './component/Footer/Footer';
import './App.css';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import Profile from './page/Profile/Profile';
import Comment from './page/Comments/Comment';
import Home from './page/Home/Home';


export default function App() {
  return (
    <>
      <Navbar/>
        <Home/>
        <Login/>
        <Register/>
        <Comment/>
        <Profile/>
      <Footer/>
    </>
  );
}

