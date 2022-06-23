import React from 'react'
import Home from './Home'
import Searched from './Searched'
import Login from './Login'
import ProductPage from './ProductPage'
import Category from './Category'
import Register from './Register'
import Submit from './Submit'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import styled from "styled-components";
import { AuthProvider } from '../context/AuthContext'

function Pages() {
  return (
    <Router>
      <AuthProvider>
        <Sidebar />
        <MainWrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search/:q" element={<Searched />}/>
            <Route path="/signin" element={<Login />}/>
            <Route path="/signup" element={<Register />}/>
            <Route path="/submit" element={<Submit />}/>
            <Route path="/:name" element={<ProductPage />}/>
            <Route path="/category/:name" element={<Category />}/>

        </Routes>
        </MainWrapper>
      </AuthProvider>
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