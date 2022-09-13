
import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from './component/Footer/Footer';
import './App.css';
import Register from './page/Register/Register';
import Profile from './page/Profile/Profile';


export default function App() {
  return (
    <>
      <Navbar/>
      <Register/>
      <Profile/>
      <Footer/>
    </>
  );
}

