import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
        <Routes>
          <Route path="/" element={<Home setTypeGetData={setTypeGetData} />} />
          <Route
            path="/user/:userId"
            element={<Profil typeGetData={typeGetData} />}
          />
          <Route path="/erreurAPI" element={<ErrorAPI />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
