import mockUserMainData from '../data/mock_USER_MAIN_DATA.json'
import mock_UserPerformance from '../data/mock_USER_PERFORMANCE.json'
import mock_UserAverageSessions from '../data/mock_USER_AVERAGE_SESSIONS.json'
import mock_UserActivity from '../data/mock_USER_ACTIVITY.json'

import ModelUserData from '../models/model_USER_MAIN_DATA'
import ModelUserPerformance from '../models/model_USER_PERFORMANCE'
import ModelUserAverageSessions from '../models/model_USER_AVERAGE_SESSIONS'
import ModelUserActivy from '../models/model_USER_ACTIVITY'

// const userId = 18

// async function getId() {
//   let params = new URL(document.location).searchParams
//   let getUserId = params.get('id')
//   console.log('getUserId', getUserId)
// }

// ******CHOIX DU TYPE DE DONNEES : API OU MOCK***
const typeGetData = false
// ***********************************************

const getMainData = async (userId) => {
  console.log('typeGetData', typeGetData)
  if (typeGetData) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`)
      const data = await response.json()
      const user = data.data
      console.log('API Main')
      return new ModelUserData(user)
    } catch (error) {
      throw error
    }
  } else {
    const user = mockUserMainData.find((user) => user.id === userId)
    console.log('mock Main')
    return new ModelUserData(user)
  }
}

const getPerformance = async (userId) => {
  if (typeGetData) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/performance`
      )
      const data = await response.json()
      const user = data.data
      console.log('API Performance')
      return new ModelUserPerformance(user)
    } catch (error) {
      throw error
    }
  } else {
    const user = mock_UserPerformance.find((user) => user.userId === userId)
    console.log('mock Performance')
    return new ModelUserPerformance(user)
  }
}

const getAverageSessions = async (userId) => {
  if (typeGetData) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/average-sessions`
      )
      const data = await response.json()
      const user = data.data
      console.log('API Average')
      return new ModelUserAverageSessions(user)
    } catch (error) {
      throw error
    }
  } else {
    const user = mock_UserAverageSessions.find((user) => user.userId === userId)
    console.log('mock Average')
    return new ModelUserAverageSessions(user)
  }
}

const getActivy = async (userId) => {
  if (typeGetData) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/activity`
      )
      const data = await response.json()
      const user = data.data
      console.log('API Activity')
      return new ModelUserActivy(user)
    } catch (error) {
      throw error
    }
  } else {
    const user = mock_UserActivity.find((user) => user.userId === userId)
    console.log('mock Activity')
    return new ModelUserActivy(user)
  }
}

// export { getMainData, getPerformance, getAverageSessions, getActivy }
export { getMainData }
