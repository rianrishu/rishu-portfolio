import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/skills/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { ThreeCircles } from 'react-loader-spinner'


function App() {
  const [spinner, setSpinner] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, []);

  return (
    <div >
      {spinner ? <div id='parent' className='no-scroll'>
        <ThreeCircles
        id="child"
          height="100"
          width="100"
          color="#6a62d7"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div> :
        <div>
          <NavBar />
          <Banner />
          <Skills />
          <Project />
          <Resume />
          <Contact />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;
