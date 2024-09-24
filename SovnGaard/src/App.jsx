import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css'

import Header from './base-components/header';
import Room from './hotel-component/room';


function App(){

  return (
    <>
    <Header />
    <Room />
    
    </>
  )
}


export default App
