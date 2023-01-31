import { Link } from 'react-router-dom'

import HeaderLogo from '../../components/HeaderLogo'

function Error() {
  return (
    <>
      <HeaderLogo />
      <main className="error">
        <h2 className="error__titleError">404</h2>
        <p className="error__paragraph">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error__errorLink">
          Retourner sur la page d’accueil
        </Link>
      </main>
    </>
  )
}

export default Error
