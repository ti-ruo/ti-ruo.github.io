import React from 'react';
import logo from './svg/logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import { Router, Route, Routes, Link } from 'react-router-dom';
// open in new tab use '_blank' in target, else use '_self'
// use MUI library
// https://mui.com/core
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
      </Routes>
    </div>
  );
}

export default App;
