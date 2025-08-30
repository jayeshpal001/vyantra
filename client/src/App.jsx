import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signUp' element={<Signup />}></Route>
      <Route path='/logIn' element={<Login />}></Route>
    </Routes>
      
      
    
  )
}

export default App