import Navbar from '../../components/Navbar'
import LogoSportSee from '../../assets/logoSportSee.svg'

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
