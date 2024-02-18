import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import Project from './components/Project';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home count={count} setCount={setCount}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
