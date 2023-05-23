import { useState } from 'react'

import Navbar from'./Navbar';
import Home from'./Home';

function App() {

  
  return (
    <div classname="app">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
      
    </div>
  )
}

export default App
