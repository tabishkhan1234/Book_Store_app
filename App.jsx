import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './home/Home'
import Courses from './courses/Courses'
import { Navigate, Route,  Routes } from "react-router-dom"
import Signup from './Components/Signup'
import Login from './Components/Login'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider'


function App() {
  const [authUser,SetAuthUser]=useAuth()
  const [count, setCount] = useState(0)

  return ( 
    <>
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/course" element={authUser?<Courses></Courses>:<Navigate to="/signup"></Navigate>}></Route>
    <Route path="/about" element={<Courses></Courses>}></Route>
    <Route path="/contact" element={<Courses></Courses>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
   </Routes>
   <Toaster />
    
    </>
  )
}

export default App
