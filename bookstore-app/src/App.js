import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Pages from './components/Pages'

const App = () => {
  return (
     <BrowserRouter>
 
 
      <Navbar/>
      <Pages/>
       </BrowserRouter>
  )
}

export default App
