import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './rootLayout/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App