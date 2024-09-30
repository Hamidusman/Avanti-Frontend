import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css'

import Rooms from './hotel-component/rooms';
import Room from './hotel-component/room';
import Home from './home/homepage';


function App(){

  return (
    <Router>
      <Routes>
            <Route path="/hotel/:id" element={<Room />} />
            <Route path="/hotel" exact element={<Rooms />} /> 
      </Routes>
    </Router>
  )
}

export default App
