
import './App.css';
import About from './page/About';
import HomePage from './page/HomePage';
import SkillPage from './page/SkillPage';
import React from 'react';
import Project from './page/Project';
import Contact from './page/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skill" element={<SkillPage/>} />
        <Route path="/project" element={<Project/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
