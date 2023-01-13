function NutritionContent({ image, altText, data, text, title }) {
  return (
    <div className="nutrition__content">
      <div className="nutrition__content__icon">
        <img src={image} alt={altText} />
      </div>
      <div className="nutrition__content__text">
        <h3>
          {data}
          {text}
        </h3>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default NutritionContent
