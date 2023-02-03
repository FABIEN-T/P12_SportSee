import PropTypes from 'prop-types'

/**
 * Component displaying the hello message with the firstname of the user
 * @param { string } firstName - data displayed
 * @returns {JSX.Element} a div with the message hello and the firstname of the user
 */

function ProfilHeader({ firstName }) {
  return (
    <div className="profil__header">
      <h2>
        Bonjour <span>{firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

ProfilHeader.propTypes = {
  firstName: PropTypes.string,
}

export default ProfilHeader
