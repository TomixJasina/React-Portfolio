import { useState } from 'react'
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
    </Routes>
    </Router>
    </>
  )
}

export default App
