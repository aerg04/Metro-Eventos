import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import MyEvents from './pages/MyEvents';
import Layout from "./components/Layout"
function App() {
  return (
    <>
      <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Navigate to='/login' />} />
                    <Route path='/home' element={<div>Home</div>} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/myevents' element={<MyEvents />} />
                </Routes>
            </Layout>
        </Router>
    </>
  )
}

export default App
