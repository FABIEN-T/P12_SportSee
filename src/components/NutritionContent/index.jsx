import PropTypes from 'prop-types'

function NutritionContent({ image, altText, data, text, title }) {
  return (
    <div className="nutrition__content">
      <div className="nutrition__content__icon">
        <img src={image} alt={altText} />
      </div>
      <div className="nutrition__content__text">
        <h3>
          {text === 'kCal' && data >= 1000
            ? (data / 1000).toFixed(3).replace('.', ',')
            : data}
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

// function numStr(a) {
// a = '' + a
// // console.log("a = '' + a", '' + a)
// b = b || ' '
// // console.log('b', b)
// let c = '',
//   d = 0
// // while (a.match(/^0[0-9]/)) {
// //   console.log('a', a.substring(1))
// //   a = a.substring(1)
// // }
// // console.log('a', a)
// for (let i = a.length - 1; i >= 0; i--) {
//   console.log('c', c)
//   console.log('d', d)
//   c = d !== 0 && d % 3 === 0 ? a[i] + b + c : a[i] + c
//   d++
// }
// return c
// if (a >= 1000) {
//   console.log('a', a.substring(1))
// }
// }
//   console.log(numStr(1000, ','))
