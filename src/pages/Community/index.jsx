// import React from 'react'
import {
  // USER_MAIN_DATA,
  // USER_ACTIVITY,
  // USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../data/mockData'
// import ChartRadar from '../../components/ChartRadar'

function Community() {
  // function extractData(userData) {
  //   return userData.find((user) => user.userId === currentUserId)
  // }
  // const currentUserAverage = extractData(USER_AVERAGE_SESSIONS)
  const currentUserId = 12

  const currentUserPerformance = USER_PERFORMANCE.find(
    (user) => user.userId === currentUserId
  )

  // console.log('PERFORMANCE', typeof currentUserPerformance)
  // currentUserAverage.sessions.forEach((prop) => {
  //   console.log('day', prop.day)
  //   console.log('sessionLength', prop.sessionLength)
  // })
  return (
    <div className="setting">
      <h2>ChartRadar</h2>
      {/* <ChartRadar dataPerf={currentUserPerformance} /> */}
    </div>
  )
}

export default Community

// <h1>Communauté</h1>
