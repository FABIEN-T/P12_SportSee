import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profil from './pages/Profil'
import Error from './pages/Error'

/**
 * Component creating the route pages : Home, Profil, Error
 * @returns {JSX.Element} App
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
          <Route path="/erreurAPI" element={<Error errorNumber={503} />} />
          <Route path="/*" element={<Error errorNumber={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
