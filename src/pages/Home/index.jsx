import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <main className="home">
      <div className="menu">
        <h2>Choisir l'utilisateur :</h2>
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
        <p>Mock</p>
        <p>Api</p>
        <p>Switch en construction</p>
      </div>
      {/* <ListData /> */}
    </main>
  )
}

export default Home
