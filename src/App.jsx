import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavigationBar from './components/Header';
import Project from './components/Project';
import './App.css'
import React from 'react'

function App() {
  return (
    <>
    <Router>
    <NavigationBar/>
    <Routes>
      <Route path="/React-Portfolio" element={<Home/>}/>
      <Route path="/React-Portfolio/about" element={<About/>}/>
      <Route path="/React-Portfolio/contact" element={<Contact/>}/>
      <Route path="/React-Portfolio/project" element={<Project/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
