import React from 'react'
import Home from './Home'
import Searched from './Searched'
import Login from './Login'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import styled from "styled-components";
// import { AuthProvider } from '../context/AuthContext'

function Pages() {
  return (
    <Router>
      <Sidebar />
      <MainWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/search/:q" element={<Searched />}/>
        </Routes>
      </MainWrapper>
    </Router>
  )
}

export default Pages

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
` 