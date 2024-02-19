import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavigationBar from './components/Header';
import Project from './components/Project';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
    </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
