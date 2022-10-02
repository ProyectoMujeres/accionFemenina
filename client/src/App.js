import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from './component/Footer/Footer';
import Category from './component/Category/Category';
import Comment from './page/Comments/Comment';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

export default function App() {
  return (
    <>
    <BrowserRouter>
     <Category/>
      <Navbar/>  
      <Comment/>  
        <Router/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

