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
      {/* <NavLink
        to="/profil"
        className="navBarLink"
        // className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      > */}
      <p className="navBarLink">Profil</p>
      {/* </NavLink>
      <NavLink
        to="/setting"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      > */}
      <p className="navBarLink"> Réglage</p>
      {/* </NavLink>
      <NavLink */}
      {/* to="/community"
        className={({ isActive }) => `navBarLink ${isActive && 'active'}`}
      > */}
      <p className="navBarLink"> Communauté</p>
      {/* </NavLink> */}
    </nav>
  )
}

export default Navbar
