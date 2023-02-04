import PropTypes from 'prop-types'
import NutritionCard from '../NutritionCard'

import IconCalories from '../../assets/iconNutriCalories.svg'
import IconProtein from '../../assets/iconNutriProtein.svg'
import IconCarbs from '../../assets/iconNutriCarbs.svg'
import IconFat from '../../assets/iconNutriFat.svg'

/**
 * Component generating the cards of the energetic substrates,
 * by formatting the user data necessary for their creation.
 * @param { Object } dataMain - data of the user
 * @param { Number } dataMain._calorie
 * @param { Number } dataMain._protein
 * @param { Number } dataMain._carbohydrate
 * @param { Number } dataMain._lipid
 * @returns { JSX.Element } a div with 4 cards of the energetic substrats
 */

function NutritionAside({ dataMain }) {
  const nutritionData = [
    {
      nameImage: IconCalories,
      energeticValue: dataMain._calorie,
      name: 'Calories',
    },
    {
      nameImage: IconProtein,
      energeticValue: dataMain._protein,
      name: 'Protéines',
    },
    {
      nameImage: IconCarbs,
      energeticValue: dataMain._carbohydrate,
      name: 'Glucides',
    },
    {
      nameImage: IconFat,
      energeticValue: dataMain._lipid,
      name: 'Lipides',
    },
  ]

  return (
    <div className="nutrition">
      {nutritionData.map((object) => {
        return (
          <NutritionCard
            key={object.name}
            nameImage={object.nameImage}
            energeticValue={object.energeticValue}
            name={object.name}
          />
        )
      })}
    </div>
  )
}

NutritionAside.propTypes = {
  dataMain: PropTypes.shape({
    _calorie: PropTypes.number,
    _protein: PropTypes.number,
    _carbohydrate: PropTypes.number,
    _lipid: PropTypes.number,
  }),
}

export default NutritionAside
