import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import RegisterController from './controllers/RegisterController';
import LoginController from './controllers/LoginController';
import MyEventsController from './controllers/MyEventsController';
import DetailEventController from './controllers/DetailEventController';
import EventCreatorController from './controllers/EventCreatorController';
import EventsController from './controllers/SearchEventsController';
import Layout from "./components/Layout"
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
                    <Route path='/myevents' element={<MyEventsController />} />
                    <Route path="/event/:id" element={<DetailEventController />} /> 
                    <Route path="/events" element={<EventsController />} /> 
                    <Route path="/createevent" element={<EventCreatorController />} /> 
                </Routes>
            </Layout>
        </Router>
    </>
  )
}

export default App
