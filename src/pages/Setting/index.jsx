import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'
import {
  // USER_MAIN_DATA,
  // USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  // USER_PERFORMANCE,
} from '../../data/mockData'
import GraphicsA from '../../components/GraphicA'

function Setting() {
  // function extractData(userData) {
  //   return userData.find((user) => user.userId === currentUserId)
  // }
  // const currentUserAverage = extractData(USER_AVERAGE_SESSIONS)
  const currentUserId = 12

  const currentUserAverage = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === currentUserId
  )

  // console.log('AVERAGE', currentUserAverage.sessions)
  // currentUserAverage.sessions.forEach((prop) => {
  //   console.log('day', prop.day)
  //   console.log('sessionLength', prop.sessionLength)
  // })
  return (
    <div className="setting">
      {/* <h2>Réglage</h2> */}
      <GraphicsA data={currentUserAverage.sessions} />
    </div>
  )
}

export default Setting
