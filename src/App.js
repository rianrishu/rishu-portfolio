import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() {
  return (
    <div >
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
