import PropTypes from 'prop-types'
let unit = 'KCal'

/**
 * Component creating the cards of energetic substrates
 * @param { string } nameImage - the name of the imported svg
 * @param { number } energeticValue - the value of the substrat
 * @param { string } name - of the energetic substrat
 * @returns { JSX.Element } a card with a svg, a value, a unit and a name
 */

function NutritionCard({ nameImage, energeticValue, name }) {
  // console
  // console.log('typeof', typeof nameImage, typeof typeValue, typeof name)
  Number.isInteger(energeticValue) ? (unit = 'g') : (unit = 'kCal')
  let energeticValueFormat = ''
  Number.isInteger(energeticValue)
    ? (energeticValueFormat = energeticValue)
    : (energeticValueFormat = energeticValue.toFixed(3).replace('.', ','))

  return (
    <div className="nutrition__card">
      <div className="nutrition__card__icon">
        <img src={nameImage} alt={`icône ${name}`} />
      </div>
      <div className="nutrition__card__text">
        <h3>
          {energeticValueFormat}
          {unit}
        </h3>
        <p>{name}</p>
      </div>
    </div>
  )
}

NutritionCard.propTypes = {
  nameImage: PropTypes.string,
  typeValue: PropTypes.number,
  name: PropTypes.string,
}

export default NutritionCard
