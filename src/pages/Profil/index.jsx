import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ChartLine from '../../components/Charts/ChartLineAverage'
import ChartRadar from '../../components/Charts/ChartRadarPerformance'
import ChartBars from '../../components/Charts/ChartBarsActivity'
import ChartRadialBar from '../../components/Charts/ChartRadialBarScore'

import OvalBlack from '../../assets/ovalBlack.svg'
import OvalRed from '../../assets/ovalRed.svg'
import IconCalories from '../../assets/iconNutriCalories.svg'
import IconProtein from '../../assets/iconNutriProtein.svg'
import IconCarbs from '../../assets/iconNutriCarbs.svg'
import IconFat from '../../assets/iconNutriFat.svg'

import NutritionContent from '../../components/NutritionContent'

import {
  getMainData,
  getPerformance,
  getAverageSessions,
  getActivy,
} from '../../service/getData'
// import { getPerformance } from '../../service/getData'
// import { getAverageSessions } from '../../service/getData'
// import { getActivy } from '../../service/getData'

function Profil({ switchData }) {
  // const currentUserId = 12
  // const UserId = useParams()
  const { userId } = useParams()
  const currentUserId = parseInt(userId)
  // console.log('Page Profil ouverte', userId, switchData)

  const [firstName, setFirstName] = useState('')
  const [score, setScore] = useState(0)
  const [calorie, setCalorie] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carbohydrate, setCarbohydrate] = useState(0)
  const [lipid, setLipid] = useState(0)

  const [kind, setKind] = useState(1)
  const [dataPerformance, setDataPerformance] = useState([])

  const [dataAverage, setDataAverage] = useState([])

  const [dataActivity, SetDataActivity] = useState([])

  // const [getDataPerformance, setGetDataPerformance] = useState(false)

  useEffect(() => {
    const typeGetData = switchData
    // console.log('profil switchData', typeGetData)
    getMainData(typeGetData, currentUserId).then((data) => {
      const { firstName, score, calorie, protein, carbohydrate, lipid } = data
      setFirstName(firstName)
      setScore(score)
      setCalorie(calorie)
      setProtein(protein)
      setCarbohydrate(carbohydrate)
      setLipid(lipid)
    })

    getPerformance(typeGetData, currentUserId).then((data) => {
      const { kind, dataPerformance } = data
      // Object.keys(kind).map((el) => console.log('kindPerf', kind.el))
      // console.log('kindPerf', kind)
      setKind(kind)
      setDataPerformance(dataPerformance)
      // setGetDataPerformance(true)
      // console.log('PROFIL getPerf', dataPerformance)
      // console.log('getDataPerformance', getDataPerformance)
    })

    getAverageSessions(typeGetData, currentUserId).then((data) => {
      const { dataAverage } = data
      setDataAverage(dataAverage)
      // console.log('dataAverage', dataAverage)
    })

    getActivy(typeGetData, currentUserId).then((data) => {
      const { dataActivity } = data
      setKind(kind)
      SetDataActivity(dataActivity)
      // console.log('dataActivity', dataActivity)
    })
  }, [switchData, currentUserId])

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
              <ChartBars dataActivity={dataActivity} />
              {/* OK */}
            </div>
          </div>
          <div className="graphics__various">
            <div className="graphics__various__square">
              <ChartLine dataAverage={dataAverage} />
              {/* OK */}
            </div>
            <div className="graphics__various__square">
              <ChartRadar
                // kindP={kind}
                // dataPerformance={dataPerformance ? dataPerformance : null}
                dataPerformance={dataPerformance}
              />
            </div>
            <div className="graphics__various__square">
              <ChartRadialBar score={score} />
              {/* OK */}
            </div>
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
