/* eslint-disable no-unused-vars */
import React from 'react'
import AllRoutes from './Routes/AllRoutes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Membership from './Pages/Membership'
import Individual from './Components/modals/Individual'
import Corporate from './Components/modals/Corporate'


const App = () => {

  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/membership' element={<Membership/>}/>


        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App