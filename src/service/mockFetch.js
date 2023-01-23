import mockUserMainData from '../data/mock_USER_MAIN_DATA.json'
import mock_UserPerformance from '../data/mock_USER_PERFORMANCE.json'
import mock_UserAverageSessions from '../data/mock_USER_AVERAGE_SESSIONS.json'
import mock_UserActivity from '../data/mock_USER_ACTIVITY.json'

import ModelUserData from '../models/model_USER_MAIN_DATA'
import ModelUserPerformance from '../models/model_USER_PERFORMANCE'
import ModelUserAverageSessions from '../models/model_USER_AVERAGE_SESSIONS'
import ModelUserActivy from '../models/model_USER_ACTIVITY'

const getMainData = async (userId) => {
  const user = mockUserMainData.find((user) => user.id === userId)
  return new ModelUserData(user)
}

const getPerformance = async (userId) => {
  const user = mock_UserPerformance.find((user) => user.userId === userId)
  return new ModelUserPerformance(user)
}

const getAverageSessions = async (userId) => {
  const user = mock_UserAverageSessions.find((user) => user.userId === userId)
  return new ModelUserAverageSessions(user)
}

const getActivy = async (userId) => {
  const user = mock_UserActivity.find((user) => user.userId === userId)
  return new ModelUserActivy(user)
}

export { getMainData, getPerformance, getAverageSessions, getActivy }
