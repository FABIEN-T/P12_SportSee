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

import ChartBarsHeader from '../../components/Charts/ChartBarsHeader'
import NutritionAside from '../../components/NutritionAside'

import {
  getDataMain,
  getPerformance,
  getAverageSessions,
  getActivy,
} from '../../service/getData'

function Profil({ typeData }) {
  const navigate = useNavigate()
  const { userId } = useParams()
  const currentUserId = Number(userId)

  const [dataMain, setDataMain] = useState({})
  const [dataPerformance, setDataPerformance] = useState({})
  const [dataAverage, setDataAverage] = useState({})
  const [dataActivity, setDataActivity] = useState({})

  const [isLoading, setIsLoading] = useState(true)
  getDataMain(typeData, currentUserId)

  useEffect(() => {
    async function getAllDatas() {
      try {
        const [dataMain, dataPerformance, dataAverage, dataActivity] =
          await Promise.all([
            getDataMain(typeData, currentUserId),
            getPerformance(typeData, currentUserId),
            getAverageSessions(typeData, currentUserId),
            getActivy(typeData, currentUserId),
          ])

        setDataMain(dataMain)
        setDataPerformance(dataPerformance._dataPerformance)
        setDataAverage(dataAverage._dataAverage)
        setDataActivity(dataActivity._dataActivity)
        setIsLoading(false)
        // console.log('Profil dataMain._calorie', dataMain._calorie)
      } catch (error) {
        console.log(
          '****Profil-error****',
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
        <div className="profil__header">
          <h2>
            Bonjour <span>{dataMain._firstName}</span>
          </h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>

        <div className="profil__dashboard">
          <div className="profil__dashboard__charts">
            <div className="profil__dashboard__charts__activity">
              <ChartBarsHeader />
              <ChartBars dataActivity={dataActivity} />
            </div>

            <div className="profil__dashboard__charts__threeCharts">
              <ChartLine dataAverage={dataAverage} />
              {/* <ChartRadar dataPerformance={dataPerformance} /> */}
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
