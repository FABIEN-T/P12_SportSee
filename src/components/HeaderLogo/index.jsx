import LogoSportSee from '../../assets/logoSportSee.svg'

/**
 * Component creating the application header,
 * including the logo of SportSee but without the navbar
 * @returns {JSX.Element} a Header with the logo
 */

function HeaderLogo() {
  return (
    <header>
      <h1>
        <img
          src={LogoSportSee}
          alt="Logo de l'entreprise SportSee"
          className="headerLogo"
        />
      </h1>
    </header>
  )
}

export default HeaderLogo
