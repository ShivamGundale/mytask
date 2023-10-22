
import './App.css';
import React from 'react';
import Slidebar from './components/Slidebar';
import Header from './components/Header';
import Lowerheader from './components/Lowerheader';
import Middle from './components/Middle';
import Last from './components/Last';
import Progressbar from './components/Progressbar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
    
  
  return (
    <div className='App'>
      <Slidebar/>
      <div className='elements'>
        <div className='header'> <Header/> </div>
        <Lowerheader/>
        <Middle/>
        <div className='arrange'>
        <Last/>
       < Progressbar/>
       </div>
      </div>
      
     </div>
 );
 }

 export default App;