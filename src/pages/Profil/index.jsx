import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import HeaderLogo from '../../components/HeaderLogo'
import Header from '../../components/Header'
import NavSide from '../../components/NavSide'
import ProfilHeader from '../../components/ProfilHeader'

import ChartLine from '../../components/Charts/ChartLineAverage'
import ChartRadar from '../../components/Charts/ChartRadarPerformance'
import ChartBarsHeader from '../../components/Charts/ChartBarsHeader'
import ChartBars from '../../components/Charts/ChartBarsActivity'
import ChartRadialBar from '../../components/Charts/ChartRadialBarScore'
import NutritionAside from '../../components/NutritionAside'

import {
  getDataMain,
  getPerformance,
  getAverageSessions,
  getActivy,
} from '../../service/getData'

/**
 * Component retrieving user data (Mock or API)
 * and displaying them as graphs through components using rechart
 * @returns { JSX.Element } Profil Page
 */

function Profil({ typeData }) {
  const navigate = useNavigate()
  const { userId } = useParams()
  const currentUserId = Number(userId)

  const [dataMain, setDataMain] = useState({})
  const [dataActivity, setDataActivity] = useState({})
  const [dataAverage, setDataAverage] = useState({})
  const [dataPerformance, setDataPerformance] = useState({})

  const [isLoading, setIsLoading] = useState(true)
  getDataMain(typeData, currentUserId)

  useEffect(() => {
    async function getAllDatas() {
      try {
        const [dataMain, dataActivity, dataAverage, dataPerformance] =
          await Promise.all([
            getDataMain(typeData, currentUserId),
            getActivy(typeData, currentUserId),
            getAverageSessions(typeData, currentUserId),
            getPerformance(typeData, currentUserId),
          ])

        setDataMain(dataMain)
        setDataActivity(dataActivity._dataActivity)
        setDataAverage(dataAverage._dataAverage)
        setDataPerformance(dataPerformance._dataPerformance)
        setIsLoading(false)
        // console.log('Profil dataMain._calorie', dataMain._calorie)
      } catch (error) {
        console.log(
          '****Profil-Error****',
          error.message.includes('fetch'),
          error.message
        )
        if (error.message.includes('fetch')) {
          navigate('/erreurAPI')
        }
        if (error.message.includes('null')) {
          navigate('/*')
        }
      }
    }

    getAllDatas()
  }, [navigate, currentUserId, typeData])
  // dataActivity.map((el) => console.log('Profil', el.day))
  // console.log('Profil', dataActivity.day)

  return isLoading ? (
    <div className="loader">
      <HeaderLogo />
      <h2>Données en chargement...</h2>
    </div>
  ) : (
    <>
      <Header />
      <NavSide />
      <div className="profil">
        <ProfilHeader firstName={dataMain._firstName} />

        <div className="profil__dashboard">
          <div className="profil__dashboard__charts">
            <div className="profil__dashboard__charts__activity">
              <ChartBarsHeader />
              <ChartBars dataActivity={dataActivity} />
            </div>

            <div className="profil__dashboard__charts__threeCharts">
              <ChartLine dataAverage={dataAverage} />
              <ChartRadar dataPerformance={dataPerformance} />
              <ChartRadialBar score={dataMain._score} />
            </div>
          </div>

          <NutritionAside dataMain={dataMain} />
        </div>
      </div>
    </>
  )
}

Profil.propTypes = {
  typeData: PropTypes.bool,
}

export default Profil
