import PropTypes from 'prop-types'
let unit = 'KCal'

function NutritionCard({ image, typeValue, title }) {
  // console.log('typeof', typeof image, typeof typeValue, typeof title)
  typeValue.includes(',') ? (unit = 'kCal') : (unit = 'g')
  return (
    <div className="nutrition__card">
      <div className="nutrition__card__icon">
        <img src={image} alt={`icône ${title}`} />
      </div>
      <div className="nutrition__card__text">
        <h3>
          {typeValue}
          {unit}
        </h3>
        <p>{title}</p>
      </div>
    </div>
  )
}

NutritionCard.propTypes = {
  image: PropTypes.string,
  typeValue: PropTypes.string,
  title: PropTypes.string,
}

export default NutritionCard
