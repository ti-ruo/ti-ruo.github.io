import React from 'react';
import './App.css';
// different pages
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import EastCoast from './pages/gallery/east_coast';
import ResponsiveAppBar from './navigation/navi';
import {containerStyle, fullPageBackgroundStyle} from './styles/styles';
// elements from MUI


// React components
import { Route, Routes } from 'react-router-dom';
// open in new tab use '_blank' in target, else use '_self'
// use MUI library
// https://mui.com/core
// material icons
// https://mui.com/material-ui/material-icons/
function App() {



  return (
    <div className="App">
      <div style={fullPageBackgroundStyle}>
        <ResponsiveAppBar/>
        <div style={containerStyle}>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path="/home" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/gallery" Component={Gallery} />
            <Route path="/gallery/east_coast" Component={EastCoast} />
          </Routes>
        </div>
      </div>
      <footer>I have a bottom line :[</footer>
    </div>
  );
}

export default App;
