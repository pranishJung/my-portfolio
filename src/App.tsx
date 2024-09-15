import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default App;
