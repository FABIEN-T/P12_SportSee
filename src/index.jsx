import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App'

/**
 * @file index.js –
 * @author Fabien_Varlet
 * @see <a href="https://github.com/FABIEN-T/P12_SportSee/tree/main">Repo git</a>
 */

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
