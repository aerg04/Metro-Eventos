import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/register' />} />
        <Route path='/home' element={<div>Home</div>} />
        <Route path='/register' element={ <Register></Register>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
