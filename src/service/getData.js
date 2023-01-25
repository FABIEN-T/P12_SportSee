import mockUserMainData from '../data/mock_USER_MAIN_DATA.json'
import mock_UserPerformance from '../data/mock_USER_PERFORMANCE.json'
import mock_UserAverageSessions from '../data/mock_USER_AVERAGE_SESSIONS.json'
import mock_UserActivity from '../data/mock_USER_ACTIVITY.json'

import ModelMain from '../models/model_USER_MAIN_DATA'
import ModelPerformance from '../models/model_USER_PERFORMANCE'
import ModelAverageSessions from '../models/model_USER_AVERAGE_SESSIONS'
import ModelActivy from '../models/model_USER_ACTIVITY'

// ******CHOIX DU TYPE DE DONNEES : API OU MOCK***
// const typeGetData = false
// ***********************************************

const getMainData = async (typeGetData, userId) => {
  // console.log('typeGetData', typeGetData)
  if (typeGetData) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`)
      const data = await response.json()
      const user = data.data
      console.log('API Main')
      return new ModelMain(user)
    } catch (error) {
      throw error
    }
  } else {
    const user = mockUserMainData.find((user) => user.id === userId)
    // console.log('MOCK Main')
    return new ModelMain(user)
  }
}

const getPerformance = async (typeGetData, userId) => {
  // console.log('Perf TYPE_GET_DATA')
  if (typeGetData) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/performance`
      )
      const data = await response.json()
      const user = data.data
      console.log('API Performance', data.data)
      return new ModelPerformance(user)
    } catch (error) {
      throw error
    }
  } else {
    const user = mock_UserPerformance.find((user) => user.userId === userId)
    // console.log('mock Performance', user)
    return new ModelPerformance(user)
  }
}

const getAverageSessions = async (typeGetData, userId) => {
  if (typeGetData) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/average-sessions`
      )
      const data = await response.json()
      const user = data.data
      console.log('API Average')
      return new ModelAverageSessions(user)
    } catch (error) {
      throw error
    }
  } else {
    const user = mock_UserAverageSessions.find((user) => user.userId === userId)
    console.log('mock Average')
    return new ModelAverageSessions(user)
  }
}

const getActivy = async (typeGetData, userId) => {
  if (typeGetData) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/activity`
      )
      const data = await response.json()
      const user = data.data
      console.log('API Activity')
      return new ModelActivy(user)
    } catch (error) {
      throw error
    }
  } else {
    const user = mock_UserActivity.find((user) => user.userId === userId)
    console.log('mock Activity')
    return new ModelActivy(user)
  }
}

export { getMainData, getPerformance, getAverageSessions, getActivy }
// export { getMainData, getPerformance }
