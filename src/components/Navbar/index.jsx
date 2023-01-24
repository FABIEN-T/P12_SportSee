import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/profil"
        className="navBarLink"
        // className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Profil
      </NavLink>
      <NavLink
        to="/setting"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Réglage
      </NavLink>
      <NavLink
        to="/community"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      >
        Communauté
      </NavLink>
    </nav>
  )
}

export default Navbar
