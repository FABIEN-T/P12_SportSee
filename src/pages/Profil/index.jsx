import {
  USER_MAIN_DATA,
  // USER_ACTIVITY,
  // USER_AVERAGE_SESSIONS,
  // USER_PERFORMANCE,
} from '../../data/mockData'
import OvalBlack from '../../assets/ovalBlack.svg'
import OvalRed from '../../assets/ovalRed.svg'
import IconCalories from '../../assets/iconNutriCalories.svg'
import IconProtein from '../../assets/iconNutriProtein.svg'
import IconCarbs from '../../assets/iconNutriCarbs.svg'
import IconFat from '../../assets/iconNutriFat.svg'
// import ConsoleData from '../../consoleData'

function Profil() {
  const currentUserId = 12
  const currentUserMain = USER_MAIN_DATA.find(
    (userPerf) => userPerf.id === currentUserId
  )
  // const currentUserActivity = USER_ACTIVITY.find(
  //   (user) => user.userId === currentUserId
  // )
  return (
    <div className="dashboard">
      {/* <ConsoleData /> */}
      <div className="dashboard__header">
        <h2>
          Bonjour <span>{currentUserMain.userInfos.firstName}</span>
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
            <div className="activity__main"></div>
          </div>
          <div className="graphics__various">
            <div className="graphics__various__square">
              objectifsAverageSessions
            </div>
            <div className="graphics__various__square">radarPerformance</div>
            <div className="graphics__various__square">kpiScore</div>

            {/* <div className="objectifsAverageSessions"></div>
            <div className="radarPerformance"></div>
            <div className="kpiScore"></div> */}
          </div>
        </div>
        <aside className="nutrition">
          {/* <NutritionContent /> */}
          <div className="nutrition__content">
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
              <p>Glucides</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Profil
