import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Dasboard from './Pages/Dasboard'
import Request from './Pages/Request'
import Hero from './Components/Hero'
import SignInPage from './Pages/SignInPage'
import SignUpPage from './Pages/SignUpPage'
import ResetPassword from './Pages/ResetPassword'
import OtpVerification from './Pages/OtpVerification'
import Reciept from './Pages/Reciept'
import History from './Pages/History'


const App = () => {
  return (
    <>
      <Router>
      <Header />
      
        <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/otp" element={<OtpVerification />} />
          <Route path="/dashboard" element={<>  <Hero/><Dasboard /></>} />
          <Route path="/request" element={<><Hero/><Request /></>} />
          <Route path="/reciept" element={<><Hero/><Reciept /></>} />
          <Route path="/history" element={<><Hero/><History /></>} />
        </Routes>
      </Router>
    </>
  )
}

export default App