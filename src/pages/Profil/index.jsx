import {
  // USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  // USER_PERFORMANCE,
} from '../../data/mockData'

import { useState } from 'react'

import { fetchUserMainData } from '../../service/mockFetch'
import { fetchUserPerformance } from '../../service/mockFetch'

import ChartLine from '../../components/Charts/ChartLine'
import ChartRadar from '../../components/Charts/ChartRadar'
import ChartBars from '../../components/Charts/ChartBars'
import ChartRadialBar from '../../components/Charts/ChartRadialBar'

import OvalBlack from '../../assets/ovalBlack.svg'
import OvalRed from '../../assets/ovalRed.svg'
import IconCalories from '../../assets/iconNutriCalories.svg'
import IconProtein from '../../assets/iconNutriProtein.svg'
import IconCarbs from '../../assets/iconNutriCarbs.svg'
import IconFat from '../../assets/iconNutriFat.svg'

import NutritionContent from '../../components/NutritionContent'

function Profil() {
  const currentUserId = 12

  const [firstName, setFirstName] = useState('')
  const [score, setScore] = useState(0)
  const [calorie, setCalorie] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carbohydrate, setCarbohydrate] = useState(0)
  const [lipid, setLipid] = useState(0)

  const [kind, setKind] = useState(0)
  const [dataPerformance, setdataPerformance] = useState(0)

  // const [kind, setKind] = useState(0)

  fetchUserMainData(currentUserId).then((data) => {
    const { firstName, score, calorie, protein, carbohydrate, lipid } = data
    setFirstName(firstName)
    setScore(score)
    setCalorie(calorie)
    setProtein(protein)
    setCarbohydrate(carbohydrate)
    setLipid(lipid)
    // console.log(
    //   'firstName2',
    //   firstName,
    //   score,
    //   protein,
    //   calorie,
    //   carbohydrate,
    //   lipid
    // )
  })

  fetchUserPerformance(currentUserId).then((data) => {
    const { kind, dataPerformance } = data
    setKind(kind)
    setdataPerformance(dataPerformance)
    // console.log('value', kind)
    // setValue(value)
    // setKind(kind)
  })

  const currentUserAverage = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === currentUserId
  )
  // const currentUserPerformance = USER_PERFORMANCE.find(
  //   (user) => user.userId === currentUserId
  // )
  const currentUserActivity = USER_ACTIVITY.find(
    (user) => user.userId === currentUserId
  )
  // const currentUserMain = USER_MAIN_DATA.find(
  //   (user) => user.id === currentUserId
  // )

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h2>
          Bonjour <span>{firstName}</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="dashboard__main">
        <div className="graphics">
          <div className="graphics__activity">
            <div className="graphics__activity__header">
              <h3>Activité quotidienne</h3>
              <div className="legend">
                <div className="legend__poids">
                  <div>
                    <img src={OvalBlack} alt="point noir" />
                  </div>
                  <div className="legend__poids__text">Poids (kg)</div>
                </div>
                <div className="legend__poids">
                  <div>
                    <img src={OvalRed} alt="point rouge" />
                  </div>
                  <div className="legend__poids__text">
                    Calories brûlées (kCal)
                  </div>
                </div>
              </div>
            </div>
            <div className="graphics__activity__main">
              <ChartBars activity={currentUserActivity.sessions} />
            </div>
          </div>
          <div className="graphics__various">
            <div className="graphics__various__square">
              <ChartLine average={currentUserAverage.sessions} />
            </div>
            <div className="graphics__various__square">
              <ChartRadar performance={dataPerformance} />
            </div>
            <div className="graphics__various__square">
              <ChartRadialBar score={score} />
            </div>

            {/* <div className="objectifsAverageSessions"></div>
            <div className="radarPerformance"></div>
            <div className="kpiScore"></div> */}
          </div>
        </div>
        <aside className="nutrition">
          <NutritionContent
            image={IconCalories}
            altText={'icône Calories'}
            data={calorie}
            text={'kCal'}
            title={'Calories'}
          />

          <NutritionContent
            image={IconProtein}
            altText={'icône Protéines'}
            data={protein}
            text={'g'}
            title={'Protéines'}
          />

          <NutritionContent
            image={IconCarbs}
            altText={'icône Glucides'}
            data={carbohydrate}
            text={'g'}
            title={'Glucides'}
          />

          <NutritionContent
            image={IconFat}
            altText={'icône Lipides'}
            data={lipid}
            text={'g'}
            title={'Lipides'}
          />
        </aside>
      </div>
    </div>
  )
}

export default Profil

/* <div className="nutrition__content">
            <div className="nutrition__content__icon">
              <img src={IconCalories} alt="icône Calories" />
            </div>
            <div className="nutrition__content__text">
              <h3>{currentUserMain.keyData.calorieCount}kCal</h3>
              <p>Calories</p>
            </div>
          </div> 
          
           <div className="nutrition__content">
            <div className="nutrition__content__icon">
              <img src={IconProtein} alt="icône Protéines" />
            </div>
            <div className="nutrition__content__text">
              <h3>{currentUserMain.keyData.proteinCount}g</h3>
              <p>Protéines</p>
            </div>
          </div> 
         
           <div className="nutrition__content">
            <div className="nutrition__content__icon">
              <img src={IconCarbs} alt="icône Glucides" />
            </div>
            <div className="nutrition__content__text">
              <h3>{currentUserMain.keyData.carbohydrateCount}g</h3>
              <p>Glucides</p>
            </div>
          </div> 
          
          <div className="nutrition__content">
            <div className="nutrition__content__icon">
              <img src={IconFat} alt="icône Lipides" />
            </div>
            <div className="nutrition__content__text">
              <h3>{currentUserMain.keyData.lipidCount}g</h3>
              <p>Lipides</p>
            </div>
          </div> */
