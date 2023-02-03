import PropTypes from 'prop-types'
import NutritionCard from '../NutritionCard'

import IconCalories from '../../assets/iconNutriCalories.svg'
import IconProtein from '../../assets/iconNutriProtein.svg'
import IconCarbs from '../../assets/iconNutriCarbs.svg'
import IconFat from '../../assets/iconNutriFat.svg'

function NutritionAside({ dataMain }) {
  // console.log('dataMain', typeof dataMain._calorie, typeof dataMain._protein)
  const nutritionData = [
    {
      image: IconCalories,
      energeticValue: dataMain._calorie,
      title: 'Calories',
    },
    {
      image: IconProtein,
      energeticValue: dataMain._protein,
      title: 'Protéines',
    },
    {
      image: IconCarbs,
      energeticValue: dataMain._carbohydrate,
      title: 'Glucides',
    },
    {
      image: IconFat,
      energeticValue: dataMain._lipid,
      title: 'Lipides',
    },
  ]
  // nutritionData.map((el) => console.log(el.image, el.typeValue, el.title))
  // nutritionData.map((el) => console.log(el.typeValue))
  return (
    <div className="nutrition">
      {nutritionData.map((object) => {
        return (
          <NutritionCard
            key={object.title}
            image={object.image}
            energeticValue={object.energeticValue}
            title={object.title}
          />
        )
      })}
    </div>
  )
}

NutritionAside.propTypes = {
  dataMain: PropTypes.object,
  datMain: PropTypes.shape({
    _calorie: PropTypes.number,
    _protein: PropTypes.number,
    _carbohydrate: PropTypes.number,
    _lipid: PropTypes.number,
  }),
}

export default NutritionAside
