import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './../pages/home/Home'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Routers