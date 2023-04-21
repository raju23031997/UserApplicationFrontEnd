import React from 'react'
import logo from './logo.svg';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import RegistrationForm from './Pages/RegistrationForm'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import LogOut from './Pages/LogOut'
import ApplicationView from './Pages/ApplicationView'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './Styles/Home.css'

function App() {
  return <>
    <BrowserRouter>
        <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/RegistrationForm' element={<RegistrationForm />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/ApplicationView' element={<ApplicationView />} />
          <Route path='/logout' element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
