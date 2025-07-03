import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Profile from './Components/Profile';
import Form from './Components/Form';

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<><Navbar/> <About/></>}/>
      <Route path='/profile' element={<><Navbar/> <Profile/></>}/>
      <Route path='/login' element={<><Navbar/> <Form/></>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
