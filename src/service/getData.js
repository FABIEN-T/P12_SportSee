import mock_UserMainData from '../data/mock_USER_MAIN_DATA.json'
import mock_UserActivity from '../data/mock_USER_ACTIVITY.json'
import mock_UserAverageSessions from '../data/mock_USER_AVERAGE_SESSIONS.json'
import mock_UserPerformance from '../data/mock_USER_PERFORMANCE.json'

import { ModelMain } from '../models/model_USER_MAIN_DATA'
import { ModelActivity } from '../models/model_USER_ACTIVITY'
import { ModelAverageSessions } from '../models/model_USER_AVERAGE_SESSIONS'
import { ModelPerformance } from '../models/model_USER_PERFORMANCE'

/**
 * Function allowing to fetch the main data (API or mock)
 * and return it via a modeling class that formats the data.
 * @param {Boolean} typeData - if true : data from Api else from Mock
 * @param {Number} userId - allows to select the data of the user
 * @returns {(?Object)} ModelMain(data) - formate the datas
 */

const getMain = async (typeData, userId) => {
  if (typeData) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`)
      const data = await response.json()
      return new ModelMain(data.data)
    } catch (error) {
      return error
    }
  } else {
    const data = mock_UserMainData.find((user) => user.id === userId)
    return data ? new ModelMain(data) : null
  }
}

/**
 * Function allowing to fetch the data of activity (API or mock)
 * and return it via a modeling class that formats the data.
 * @param {Boolean} typeData - if true : data from Api else from Mock
 * @param {Number} userId - allows to select the data of the user
 * @returns {(?Object)} ModelActivity(data) - formate the datas
 */

const getActivy = async (typeData, userId) => {
  if (typeData) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    )
    const data = await response.json()
    return new ModelActivity(data.data)
  } else {
    const data = mock_UserActivity.find((user) => user.userId === userId)
    return data ? new ModelActivity(data) : null
  }
}

/**
 * Function allowing to fetch the data of average sessions (API or mock)
 * and return it via a modeling class that formats the data.
 * @param {Boolean} typeData - if true : data from Api else from Mock
 * @param {Number} userId - allows to select the data of the user
 * @returns {(?Object)} ModelAverageSessions(data) - formate the datas
 */

const getAverageSessions = async (typeData, userId) => {
  if (typeData) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    )
    const data = await response.json()
    return new ModelAverageSessions(data.data)
  } else {
    const data = mock_UserAverageSessions.find((user) => user.userId === userId)
    return data ? new ModelAverageSessions(data) : null
  }
}

/**
 * Function allowing to fetch the data of performance (API or mock)
 * and return it via a modeling class that formats the data.
 * @param {Boolean} typeData - if true : data from Api else from Mock
 * @param {Number} userId - allows to select the data of the user
 * @returns {(?Object)} ModelPerformance(data) - formate the datas
 */

const getPerformance = async (typeData, userId) => {
  if (typeData) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    )
    const data = await response.json()
    return new ModelPerformance(data.data)
  } else {
    const data = mock_UserPerformance.find((user) => user.userId === userId)
    return data ? new ModelPerformance(data) : null
  }
}

export { getMain, getActivy, getAverageSessions, getPerformance }
