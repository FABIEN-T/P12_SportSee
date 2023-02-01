import PropTypes from 'prop-types'

function NutritionCard({ image, altText, data, text, title }) {
  // console.log('typeof', data, typeof data)
  return (
    <div className="nutrition__card">
      <div className="nutrition__card__icon">
        <img src={image} alt={altText} />
      </div>
      <div className="nutrition__card__text">
        <h3>
          {text === 'kCal' ? (data / 1000).toFixed(3).replace('.', ',') : data}
          {/* {text === 'kCal' ? data.toFixed(3).replace('.', ',') : data} */}
          {/* {data} */}
          {text}
        </h3>
        <p>{title}</p>
      </div>
    </div>
  )
}

NutritionCard.propTypes = {
  image: PropTypes.string,
  altText: PropTypes.string,
  data: PropTypes.number,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default NutritionCard
