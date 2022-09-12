
import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from './component/Footer/Footer';
import './App.css';
import Register from './page/Register/Register';

export default function App() {
  return (
    <>
      <Navbar/>
      <Register/>
      <Footer/>
    </>
  );
}

