
import Home from './pages/Home'
import { Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'



const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signUp' element={<Signup />}></Route>
      <Route path='/logIn' element={<Login />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>






  )
}

export default App