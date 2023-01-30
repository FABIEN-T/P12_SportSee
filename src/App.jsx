import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import NavSide from './components/NavSide'
import Home from './pages/Home'
import Profil from './pages/Profil'
// import Setting from './pages/Setting'
// import Community from './pages/Community'
import Error from './pages/Error'
import ErrorAPI from './pages/ErrorAPI'

export default function App() {
  const [typeGetData, setTypeGetData] = useState(false)
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <NavSide />
        <Routes>
          <Route path="/" element={<Home setTypeGetData={setTypeGetData} />} />
          <Route
            path="/user/:userId"
            element={<Profil typeGetData={typeGetData} />}
          />
          {/* <Route path="/setting" element={<Setting />} />
          <Route path="/community" element={<Community />} /> */}
          <Route path="/erreurAPI" element={<ErrorAPI />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
