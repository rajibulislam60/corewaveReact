import React from 'react';
import Navbar from './component/Navbar';
import Bannar from './component/Bannar';
import About from './component/About';
import Services from './component/Services';
import Project from './component/Project';
import Achieve from './component/Achieve';
import Client from './component/Client';
import Trail from './component/Trail';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <Bannar/>
      <About/>
      <Services/>
      <Project/>
      <Achieve/>
      <Client/>
      <Trail/>
      <Footer/>
    </>
  )
}

export default App