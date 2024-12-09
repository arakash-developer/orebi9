import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'

const RootLayOut = () => {
  return (
    <div>
        <Navbar />
        <Searchbar />
        
        <Outlet />

        <Footer />
    </div>
  )
}

export default RootLayOut