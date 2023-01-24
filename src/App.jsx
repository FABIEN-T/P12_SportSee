import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavSide from './components/NavSide'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Setting from './pages/Setting'
import Community from './pages/Community'
import Error from './pages/Error'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <NavSide />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// export default App
