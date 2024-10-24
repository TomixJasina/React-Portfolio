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
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Project" element={<Project/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
