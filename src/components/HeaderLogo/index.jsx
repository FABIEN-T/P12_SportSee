import LogoSportSee from '../../assets/logoSportSee.svg'

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
