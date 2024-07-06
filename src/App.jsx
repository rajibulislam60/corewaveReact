import React from 'react';
import Navbar from './component/Navbar';
import Bannar from './component/Bannar';
import About from './component/About';
import Services from './component/Services';
import Project from './component/Project';
import Achieve from './component/Achieve';

const App = () => {
  return (
    <>
      <Navbar/>
      <Bannar/>
      <About/>
      <Services/>
      <Project/>
      <Achieve/>
    </>
  )
}

export default App