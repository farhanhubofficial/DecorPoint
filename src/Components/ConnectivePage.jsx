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
        </Routes>
        <Footer/>
    </div>
  )
}

export default ConnectivePage