import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Txt from './components/txt/Txt';
import Info from './components/info/Info';
function App() {

  return (
    <div className="App">
      <Navbar />
      <About />
      <Txt />
      <Info />
    </div>
  );
}

export default App;
