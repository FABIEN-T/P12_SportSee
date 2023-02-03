import Navbar from '../../components/Navbar'
import LogoSportSee from '../../assets/logoSportSee.svg'

/**
 * Component creating the application header,
 * including the logo of SportSee and a navbar
 * @returns {JSX.Element} a Header with a navbar
 */

function Header() {
  return (
    <header>
      <h1>
        <img
          src={LogoSportSee}
          alt="Logo de l'entreprise SportSee"
          className="headerLogo"
        />
      </h1>
      <Navbar />
    </header>
  )
}

export default Header
