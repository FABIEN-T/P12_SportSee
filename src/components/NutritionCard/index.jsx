import PropTypes from 'prop-types'
let unit = 'KCal'

function NutritionCard({ image, energeticValue, title }) {
  // console
  // console.log('typeof', typeof image, typeof typeValue, typeof title)
  Number.isInteger(energeticValue) ? (unit = 'g') : (unit = 'kCal')
  let energeticValueFormat = ''
  Number.isInteger(energeticValue)
    ? (energeticValueFormat = energeticValue)
    : (energeticValueFormat = energeticValue.toFixed(3).replace('.', ','))

  return (
    <div className="nutrition__card">
      <div className="nutrition__card__icon">
        <img src={image} alt={`icône ${title}`} />
      </div>
      <div className="nutrition__card__text">
        <h3>
          {energeticValueFormat}
          {unit}
        </h3>
        <p>{title}</p>
      </div>
    </div>
  )
}

// NutritionCard.propTypes = {
//   image: PropTypes.string,
//   typeValue: PropTypes.string,
//   title: PropTypes.string,
// }

NutritionCard.propTypes = {
  image: PropTypes.string,
  typeValue: PropTypes.number,
  title: PropTypes.string,
}

export default NutritionCard
