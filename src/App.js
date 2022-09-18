import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div >
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
