import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from '../../components/Header'
import NavSide from '../../components/NavSide'

/**
 * The Home component allows to choose the user
 * for the Profil page and the type of data (Mock or API)
 * @param { Function(setTypeData<Booleen>) } callback
 * @returns { JXS.Element } Home
 */

function Home({ setTypeData }) {
  return (
    <>
      <Header />
      <NavSide />
      <main className="home">
        <div className="typeData">
          <h2>Choix</h2>
          <h2>du type de données : </h2>
          <div className="typeData__groupButtons">
            <button
              className="btn"
              onClick={() => {
                setTypeData(false)
                console.log('Données Mock')
              }}
            >
              MOCK
            </button>
            <button
              className="btn"
              onClick={() => {
                setTypeData(true)
                console.log('Données API')
              }}
            >
              API
            </button>
          </div>
        </div>

        <div className="menu">
          <h2>Choix</h2>
          <h2>de l'utilisateur :</h2>
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
      </main>
    </>
  )
}

Home.propTypes = {
  setTypeData: PropTypes.func,
}

export default Home
