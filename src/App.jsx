
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Layouts/Navbar'
import Home from './Pages/Home'
import Footer from './Layouts/Footer'
import CheckOut from './Pages/CheckOut'
import SignUp from "./auth/SignUp"
import SignIn from "./auth/SignIn"
import { useState } from 'react'
import Error from './Pages/Error'
function App() {
  const [cartItem, setCartItem]= useState([1])
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route element= { <> <Navbar cartItem ={cartItem}/> <Footer/>  </> }>
         <Route path='/' element= {<Home/>}/>
        <Route path='CheckOut' element= {<CheckOut/>}/>
        </Route>
        <Route path='SignUp' element= {<SignUp/>}/>
        <Route path='SignIn' element= {<SignIn/>}/>
        <Route path='*' element= {<Error/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
