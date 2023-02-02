import { Link } from 'react-router-dom'

import HeaderLogo from '../../components/HeaderLogo'

function Error({ typeError }) {
  const text =
    typeError === 404
      ? "Oups! La page que vous demandez n'existe pas"
      : "Oups! L'Api n'est pas disponible."
  return (
    <>
      <HeaderLogo />
      <main className="error">
        <h2 className="error__titleError">{typeError}</h2>
        <p className="error__paragraph">{text}</p>
        <Link to="/" className="error__errorLink">
          Retourner sur la page d’accueil
        </Link>
      </main>
    </>
  )
}

export default Error
