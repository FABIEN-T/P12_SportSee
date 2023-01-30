import PropTypes from 'prop-types'

function NutritionContent({ image, altText, data, text, title }) {
  // console.log('typeof', data, typeof data)
  return (
    <div className="nutrition__content">
      <div className="nutrition__content__icon">
        <img src={image} alt={altText} />
      </div>
      <div className="nutrition__content__text">
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

NutritionContent.propTypes = {
  image: PropTypes.string,
  altText: PropTypes.string,
  data: PropTypes.number,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default NutritionContent
