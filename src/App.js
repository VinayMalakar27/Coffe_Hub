import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import  Home  from './conponent/Home'
import  About  from './conponent/About'
import  Contact  from './conponent/Contact'
import  Navbar  from './conponent/Navbar'
import Service from './conponent/Service';
import Blog from './conponent/Blog';


 function App () {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    </>
  )
 }

export default App;
  
