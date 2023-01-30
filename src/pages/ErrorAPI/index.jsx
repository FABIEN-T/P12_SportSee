import { Link } from 'react-router-dom'

function ErrorAPI() {
  return (
    <main className="mainError">
      <h2>503</h2>
      <p>Oups! L'Api n'est pas disponible.</p>
      <Link to="/" className="errorLink">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default ErrorAPI
