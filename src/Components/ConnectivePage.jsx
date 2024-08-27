import React from 'react'
import Header from './Header'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Curtains from './Curtains'
import About from './About'
import Footer from './Footer'
import Vision from './Vision'
import Approach from './Approach'
import Navbar from './Navbar'
import AddCurtain from './AddCurtain'
import Cart from './Cart'
import SubproductsPage from './SubproductsPage';
import LoginPage from './LoginPage'
// import SignupPage from "./components/SignupPage"; 
import SignupPage from './SignUpPage'// Import the SignupPage component


function ConnectivePage() {
  return (
    <div className='relative'>
        <div className='sticky top-0 z-50 '>
         <Header/> 
{/* <Navbar/> */}
        </div>
        {/* <Home/> */}
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path="/About" element = {<About/> } />
          <Route path='/curtains' element ={<Curtains/>}/>
          <Route path='/vision' element = {<Vision/>}/>
          <Route path='/Approach' element = {<Approach/>}/>
          <Route path = '/curtains/Addcurtains' element = {<AddCurtain className = "absolute"/>}/>
          <Route path='/Cart' element = {<Cart/>}/>
          <Route path="/subproducts/:productId" element={<SubproductsPage />} />
          <Route path='/Login' element = {<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>} />


        </Routes>
        <Footer/>
    </div>
  )
}

export default ConnectivePage