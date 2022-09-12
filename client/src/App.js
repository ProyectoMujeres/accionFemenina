
import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from './component/Footer/Footer';
import Login from './page/Login/Login';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar/>
      <Login/>
      <Footer/>
    </>
  );
}

