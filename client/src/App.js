import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from './component/Footer/Footer';

import NewPost from './component/NewPost/NewPost'; 
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>    
      <Router/>
       
    
      <Footer/>
    </BrowserRouter>
    </>
  );
}

