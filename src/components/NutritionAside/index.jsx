import PropTypes from 'prop-types'
import NutritionCard from '../NutritionCard'

import IconCalories from '../../assets/iconNutriCalories.svg'
import IconProtein from '../../assets/iconNutriProtein.svg'
import IconCarbs from '../../assets/iconNutriCarbs.svg'
import IconFat from '../../assets/iconNutriFat.svg'

function NutritionAside({ dataMain }) {
  // const nutritionData = [
  //   ['IconCalories', dataMain._calorie, 'Calories'],
  //   ['IconProtein', dataMain._protein, 'Protéines'],
  // ]
  const nutritionData = [
    {
      image: IconCalories,
      typeValue: dataMain._calorie,
      title: 'Calories',
    },
    {
      image: IconProtein,
      typeValue: dataMain._protein,
      title: 'Protéines',
    },
    {
      image: IconCarbs,
      typeValue: dataMain._carbohydrate,
      title: 'Glucides',
    },
    {
      image: IconFat,
      typeValue: dataMain._lipid,
      title: 'Lipides',
    },
  ]
  // nutritionData.map((el) => console.log(el.image, el.type, el.title))
  return (
    <div className="nutrition">
      {nutritionData.map((object) => {
        return (
          <NutritionCard
            key={object.title}
            image={object.image}
            typeValue={object.typeValue}
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
    _calorie: PropTypes.string,
    _protein: PropTypes.string,
    _carbohydrate: PropTypes.string,
    _lipid: PropTypes.string,
  }),
}

export default NutritionAside
