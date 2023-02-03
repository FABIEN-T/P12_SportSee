import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import HeaderLogo from '../../components/HeaderLogo'

/**
 * The Error component displays a page indicating
 * that a web page does not exist (404) or a server error (503).
 * @param { Number } typeError
 * @returns {JXS.Element} Error
 */

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

Error.propTypes = {
  typeError: PropTypes.number,
}

export default Error
