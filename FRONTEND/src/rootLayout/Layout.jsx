import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'

const Layout = () => {
  return (
    <div className='w-full flex'>
      <Navbar />
      <Home />
    </div>
  )
}

export default Layout