// import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profil from './pages/Profil'
import Error from './pages/Error'

/**
 * The App component create route pages : Home, Profil, Error
 * @returns {JXS.Element} App
 */

export default function App() {
  const [typeData, setTypeData] = useState(false)
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setTypeData={setTypeData} />} />
          <Route
            path="/user/:userId"
            element={<Profil typeData={typeData} />}
          />
          <Route path="/erreurAPI" element={<Error typeError={503} />} />
          <Route path="/*" element={<Error typeError={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
