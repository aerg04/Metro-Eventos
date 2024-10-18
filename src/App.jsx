import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/home' element={<div>Home</div>} />
        <Route path='/register' element={ <Register></Register>} />
        <Route path='/login' element={ <Login/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
