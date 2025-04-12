import React from 'react'
import './App.css'; 
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Fab from './components/Fab/Fab';



const App = () => {
  return (
    <main>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Fab />
    </main>
  );
}

export default App;