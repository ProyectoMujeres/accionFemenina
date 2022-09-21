import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from './component/Footer/Footer';
import './App.css';
import Home from './page/Home/Home';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Home/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

