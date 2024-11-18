import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import Moviedetails from './pages/Moviedetails';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/movie/:id" element={<Moviedetails/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
