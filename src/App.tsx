import React from 'react';
import './App.css';
// different pages
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import EastCoast from './pages/gallery/east_coast';
import Cali from './pages/gallery/cali';
import Mid_west from './pages/gallery/mid_west';
import National_parks from './pages/gallery/national_parks';
// other components
import ResponsiveAppBar from './navigation/navi';
import {containerStyle, fullPageBackgroundStyle} from './styles/styles';
// elements from MUI


// React components
import { Route, Routes } from 'react-router-dom';
import Thoughts from './pages/thoughts';
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
            <Route path="/thoughts" Component={Thoughts} />
            <Route path="/about" Component={About} />
            <Route path="/gallery" Component={Gallery} />
            <Route path="/gallery/east_coast" Component={EastCoast} />
            <Route path="/gallery/cali" Component={Cali} />
            <Route path="/gallery/mid_west" Component={Mid_west} />
            <Route path="/gallery/national_parks" Component={National_parks} />
          </Routes>
        </div>
      </div>
      <footer>Sorry, nowthing down here!</footer>
    </div>
  );
}

export default App;
