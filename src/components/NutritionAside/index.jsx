import PropTypes from 'prop-types'
import NutritionCard from '../NutritionCard'

import IconCalories from '../../assets/iconNutriCalories.svg'
import IconProtein from '../../assets/iconNutriProtein.svg'
import IconCarbs from '../../assets/iconNutriCarbs.svg'
import IconFat from '../../assets/iconNutriFat.svg'

function NutritionAside({ dataMain }) {
  return (
    <div className="nutrition">
      <NutritionCard
        image={IconCalories}
        altText={'icône Calories'}
        data={dataMain.calorie}
        text={'kCal'}
        title={'Calories'}
      />
      <NutritionCard
        image={IconProtein}
        altText={'icône Protéines'}
        data={dataMain.protein}
        text={'g'}
        title={'Protéines'}
      />

      <NutritionCard
        image={IconCarbs}
        altText={'icône Glucides'}
        data={dataMain.carbohydrate}
        text={'g'}
        title={'Glucides'}
      />

      <NutritionCard
        image={IconFat}
        altText={'icône Lipides'}
        data={dataMain.lipid}
        text={'g'}
        title={'Lipides'}
      />
    </div>
  )
}

export default NutritionAside
