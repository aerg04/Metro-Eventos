import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import RegisterController from './controllers/RegisterController';
import LoginController from './controllers/LoginController';
import MyEventsController from './controllers/MyEventsController';
import DetailEventController from './controllers/DetailEventController';
import EventCreatorController from './controllers/EventCreatorController';
import EventsController from './controllers/SearchEventsController';
import Layout from "./components/Layout"
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
            <Layout>
                <Routes>
                <Route path='/' element={<Navigate to='/login' />} />
            <Route path='/home' element={<div>Home</div>} />
            <Route path='/register' element={<RegisterController />} />
            <Route path='/login' element={<LoginController />} />
            <Route path='/myevents' element={<PrivateRoute><MyEventsController /></PrivateRoute>} />
            <Route path="/event/:id" element={<PrivateRoute><DetailEventController /></PrivateRoute>} />
            <Route path="/events" element={<PrivateRoute><EventsController /></PrivateRoute>} />
            <Route path="/createevent" element={<PrivateRoute><EventCreatorController /></PrivateRoute>} />
                </Routes>
            </Layout>
        </Router>
    </>
  )
}

export default App
