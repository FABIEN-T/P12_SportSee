import { NavLink } from 'react-router-dom'

/**
 * Component creating the navigation menu
 * @returns { JSX.Element } a navbar (Home: only active link)
 */

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Accueil
      </NavLink>
      <p className="navBarLink">Profil</p>
      <p className="navBarLink"> Réglage</p>
      <p className="navBarLink"> Communauté</p>
    </nav>
  )
}

export default Navbar
