import React from 'react'
import Home from './Home'
import Searched from './Searched'
import Login from './Login'
import Navbar from '../components/Navbar'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'

function Pages() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/search/:q" element={<Searched />}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default Pages