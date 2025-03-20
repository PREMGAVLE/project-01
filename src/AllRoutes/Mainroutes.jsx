import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Service from '../Pages/Service'
import Contact from '../Pages/Contact'
import Dishes from '../Pages/Dishes'
import Login from '../Pages/Login'
import PrivateRoutes from './PrivateRoutes'
import NotFound from '../Pages/NotFound'


function Mainroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dishes' element={
          <PrivateRoutes>
            <Dishes />
          </PrivateRoutes>  } />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound/>}   />
      </Routes>
    </div>
  )
}

export default Mainroutes
