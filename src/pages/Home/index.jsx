import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Home({ setSwitchData }) {
  const [activeButton, setActiveButton] = useState('1')
  return (
    <main className="home">
      <div className="menu">
        <h2>Choix de l'utilisateur :</h2>
        <nav className="menu__navUser">
          <NavLink
            to="/user/12"
            className={({ isActive }) =>
              `menu__navUser__link ${isActive && 'active'}`
            }
          >
            KARL
          </NavLink>
          <NavLink
            to="/user/18"
            className={({ isActive }) =>
              `menu__navUser__link ${isActive && 'active'}`
            }
          >
            CECILIA
          </NavLink>
        </nav>
      </div>

      <div className="switchData">
        <h2>Choix du type de données : </h2>
        <div className="switchData__groupButtons">
          <button
            // className=${`btn {activeButton === "1" && 'active'}`}
            className="btn"
            onClick={() => {
              setActiveButton(true)
              setSwitchData(false)
              console.log('bouton Mock')
            }}
          >
            MOCK
          </button>
          <button
            className="btn"
            // className={({ isActive }) => `btn ${isActive && 'active'}`}
            onClick={() => {
              setSwitchData(true)
              console.log('bouton API')
            }}
          >
            API
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home
