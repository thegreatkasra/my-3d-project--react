import React from 'react'
import './App.css'; 
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Fab from './components/Fab/Fab';
import logo from './logo.svg';


const App = () => {
  return (
    <main>
      <div className="header--logo">
        <img src={logo} alt="logo" />
      </div>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Fab />
    </main>
  );
}

export default App;