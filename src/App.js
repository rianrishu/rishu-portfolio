import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';

function App() {
  return (
    <div >
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
