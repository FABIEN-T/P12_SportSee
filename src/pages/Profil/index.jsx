import {
  USER_MAIN_DATA,
  // USER_ACTIVITY,
  // USER_AVERAGE_SESSIONS,
  // USER_PERFORMANCE,
} from '../../data/mockData'

function Profil() {
  const currentUserId = 12
  const currentUserMain = USER_MAIN_DATA.find(
    (userPerf) => userPerf.id === currentUserId
  )
  // const firstname = currentUserMain.userInfos.firstName
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h2>
          Bonjour <span>{currentUserMain.userInfos.firstName}</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="dashboard__graphics">
        <div className="graphics__left">
          <div className="activity"></div>
          <div className="square">
            <div className="objectifsAverageSessions"></div>
            <div className="radarPerformance"></div>
            <div className="kpiScore"></div>
          </div>
        </div>
        <div className="graphics__right">
          <div className="nutrition__calories">
            <div className="nutrition__icon"></div>
            <div className="nutrition__text">{/* <p></p> */}</div>
          </div>
          <div className="nutrition__proteines"></div>
          <div className="nutrition__fat"></div>
          <div className="nutrition__lipides"></div>
        </div>
      </div>
    </div>
  )
}

export default Profil
