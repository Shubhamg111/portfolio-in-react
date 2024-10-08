import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Homepage from './pages/Homepage'

const Myroute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>} />
        </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default Myroute
