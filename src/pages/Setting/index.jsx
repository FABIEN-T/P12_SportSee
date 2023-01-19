// import React from 'react'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../data/mockData'
import ChartLine from '../../components/Charts/ChartLine'
import ChartRadar from '../../components/Charts/ChartRadar'
import ChartBars from '../../components/Charts/ChartBars'
import ChartRadialBar from '../../components/Charts/ChartRadialBar'

function Setting() {
  // function extractData(userData) {
  //   return userData.find((user) => user.userId === currentUserId)
  // }
  // const currentUserAverage = extractData(USER_AVERAGE_SESSIONS)
  const currentUserId = 12

  const currentUserAverage = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === currentUserId
  )
  const currentUserPerformance = USER_PERFORMANCE.find(
    (user) => user.userId === currentUserId
  )
  const currentUserActivity = USER_ACTIVITY.find(
    (user) => user.userId === currentUserId
  )
  const currentUserMain = USER_MAIN_DATA.find(
    (user) => user.id === currentUserId
  )
  // console.log('currentUserActivity', currentUserActivity.sessions)
  // const temp = currentUserActivity.sessions
  // console.log('temp', temp)
  // temp.map((obj) => (obj.day = Number(obj.day.slice(8))))
  // console.log('temp2', temp)
  // const activityFormatDate = temp
  // console.log('ActivityFormatDate', activityFormatDate)

  // console.log('Setting main', currentUserMain.score)
  // console.log('AVERAGE', currentUserAverage.sessions)
  // currentUserAverage.sessions.forEach((prop) => {
  //   console.log('day', prop.day)
  //   console.log('sessionLength', prop.sessionLength)
  // })
  return (
    <div className="setting">
      <ChartBars activity={currentUserActivity.sessions} />
      {/* <ChartLine average={currentUserAverage.sessions} /> */}
      {/* <ChartRadar performance={currentUserPerformance} /> */}
      {/* <ChartRadialBar score={currentUserMain.score} /> */}
    </div>
  )
}

export default Setting
