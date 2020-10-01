import Home from './pages/indexpage';
import About from './pages/aboutpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-typist/dist/standalone/Typist';
import 'react-typist/dist/Typist';
import React from 'react';
import Skills from './pages/skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Skills />
    </div>
  );
}

export default App;
