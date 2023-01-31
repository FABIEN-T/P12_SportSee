import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import HeaderLogo from '../../components/HeaderLogo'
import Header from '../../components/Header'
import NavSide from '../../components/NavSide'

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
  getDataMain,
  getPerformance,
  getAverageSessions,
  getActivy,
} from '../../service/getData'

function Profil({ typeGetData }) {
  const navigate = useNavigate()
  const { userId } = useParams()
  const currentUserId = Number(userId)

  // const [allDatas, setAllDatas] = useState({})
  const [dataMain, setDataMain] = useState({})
  const [dataPerformance, setDataPerformance] = useState({})
  const [dataAverage, setDataAverage] = useState({})
  const [dataActivity, setDataActivity] = useState({})

  const [isLoading, setIsLoading] = useState(true)
  // const typeGetData = switchData
  getDataMain(typeGetData, currentUserId)

  useEffect(() => {
    // async function getAllDatas() {
    const getAllDatas = async () => {
      try {
        const [dataMain, dataPerformance, dataAverage, dataActivity] =
          await Promise.all([
            getDataMain(typeGetData, currentUserId),
            getPerformance(typeGetData, currentUserId),
            getAverageSessions(typeGetData, currentUserId),
            getActivy(typeGetData, currentUserId),
          ])

        // const allDatas = {
        //   dataMain,
        //   dataPerformance,
        //   dataAverage,
        //   dataActivity,
        // }

        // setAllDatas(allDatas)
        // console.log('allDatas', allDatas)
        setDataMain(dataMain)
        setDataPerformance(dataPerformance.dataPerformance)
        setDataAverage(dataAverage.dataAverage)
        setDataActivity(dataActivity.dataActivity)
        setIsLoading(false)
      } catch (errorServeur) {
        console.log('****Profil-error****', errorServeur.message)
        if (
          // errorServeur.message.includes(
          //   'Failed to fetch' ||
          //     'NetworkError when attempting to fetch resource.'
          // )
          errorServeur.message.includes('fetch')
        ) {
          // console.log('error.message', errorServeur.message)
          console.log(errorServeur.message.includes('fetch'))
          navigate('/erreurAPI')
        }
        if (
          // errorServeur.message.includes(
          //   'Cannot read properties of null' || 'dataPerformance is null'
          // )
          errorServeur.message.includes('null')
        ) {
          console.log(
            // errorServeur.message.includes(
            //   'Cannot read properties of null' || 'dataPerformance is null'
            // )
            errorServeur.message.includes('null')
          )
          navigate('/*')
        }
        // else {
        //   navigate('/*')
        // }
      }
    }
    getAllDatas()
  }, [navigate, currentUserId, typeGetData])

  // console.log('allDatas2', allDatas)
  // return isLoading && allDatas ? (
  return isLoading ? (
    <div className="loader">
      <HeaderLogo />
      <h2>Données en chargement...</h2>
    </div>
  ) : (
    <>
      <Header />
      <NavSide />
      <div className="dashboard">
        <div className="dashboard__header">
          <h2>
            Bonjour <span>{dataMain.firstName}</span>
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
              </div>
            </div>
            <div className="graphics__various">
              <div className="graphics__various__square">
                <ChartLine dataAverage={dataAverage} />
              </div>
              <div className="graphics__various__square">
                <ChartRadar dataPerformance={dataPerformance} />
              </div>
              <div className="graphics__various__square">
                <ChartRadialBar score={dataMain.score} />
              </div>
            </div>
          </div>
          <aside className="nutrition">
            <NutritionContent
              image={IconCalories}
              altText={'icône Calories'}
              data={dataMain.calorie}
              text={'kCal'}
              title={'Calories'}
            />

            <NutritionContent
              image={IconProtein}
              altText={'icône Protéines'}
              data={dataMain.protein}
              text={'g'}
              title={'Protéines'}
            />

            <NutritionContent
              image={IconCarbs}
              altText={'icône Glucides'}
              data={dataMain.carbohydrate}
              text={'g'}
              title={'Glucides'}
            />

            <NutritionContent
              image={IconFat}
              altText={'icône Lipides'}
              data={dataMain.lipid}
              text={'g'}
              title={'Lipides'}
            />
          </aside>
        </div>
      </div>
    </>
  )
}

Profil.propTypes = {
  typeGetData: PropTypes.bool,
}

export default Profil
