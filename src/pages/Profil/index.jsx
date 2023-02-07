import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import HeaderLogo from '../../components/HeaderLogo'
import Header from '../../components/Header'
import NavSide from '../../components/NavSide'
import Hello from '../../components/Hello'

import ChartLine from '../../components/Charts/ChartLineAverage'
import ChartRadar from '../../components/Charts/ChartRadarPerformance'
import ChartBarsHeader from '../../components/Charts/ChartBarsHeader'
import ChartBars from '../../components/Charts/ChartBarsActivity'
import ChartRadialBar from '../../components/Charts/ChartRadialBarScore'
import NutritionAside from '../../components/NutritionAside'

import {
  getMain,
  getPerformance,
  getAverageSessions,
  getActivy,
} from '../../service/getData'

/**
 * Component retrieving user data (Mock or API) and displaying them
 * as graphs through components using Recharts library
 * @param { Boolean } typeData - if true : data from Api else from Mock
 * @returns { JSX.Element } Profil Page with charts
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

  useEffect(() => {
    /**
     * Function recovering all datas
     * @returns the fetched datas
     */
    async function getAllDatas() {
      try {
        const [dataMain, dataActivity, dataAverage, dataPerformance] =
          await Promise.all([
            getMain(typeData, currentUserId),
            getActivy(typeData, currentUserId),
            getAverageSessions(typeData, currentUserId),
            getPerformance(typeData, currentUserId),
          ])

        setDataMain(dataMain)
        setDataActivity(dataActivity._dataActivity)
        setDataAverage(dataAverage._dataAverage)
        setDataPerformance(dataPerformance._dataPerformance)
        setIsLoading(false) // indicates that data loading is complete
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
        <Hello firstName={dataMain._firstName} />

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
