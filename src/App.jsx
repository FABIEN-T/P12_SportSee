import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BarVertical from './components/BarVertical'
// import Footer from './components/Footer'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Setting from './pages/Setting'
import Community from './pages/Community'
import Error from './pages/Error'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <BarVertical />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/community" element={<Community />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
