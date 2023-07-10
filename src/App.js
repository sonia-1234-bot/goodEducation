import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import ContactUs from './Components/ContactUs'
import WorkIt from './Components/WorkIt'
import Portfolio from './Components/Portfolio'
import Tutorial from './Components/Tutorial'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar></Navbar>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/workit" element={<WorkIt/>}></Route>
<Route path="/portfolio" element={<Portfolio/>}></Route>
<Route path="/tutorial" element={<Tutorial/>}></Route>
<Route path="/contactus" element={<ContactUs/>}></Route>


  </Routes>
  
  </BrowserRouter>

    </>
  )
}

export default App