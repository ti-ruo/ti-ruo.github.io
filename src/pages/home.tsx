import React from 'react';
import logo from '../svg/logo.svg';
import Button from '@mui/material/Button';

function Home(){
    return(
        <div>
        <header className="App-header">
        <Button>Hello World</Button>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Welcome!
            </p>
            <a
                className="App-link"
                href="/about"
                target="_self"
                rel="noopener noreferrer"
            >
            Link
            </a>
        </header>
      </div>
    )
}

export default Home;