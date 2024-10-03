import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css'

import Rooms from './hotel-component/rooms';
import Room from './hotel-component/room';
import BookingForm from './hotel-component/bookingForm';
import Home from './home/homepage';


function App(){

  return (
    <Router>
      <Routes>
            <Route path="" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
