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
// ******************************************²*****

const getDataMain = async (typeGetData, userId) => {
  // console.log('typeGetData', typeGetData)
  if (typeGetData) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`)
      if (response.ok) {
        console.log(response.ok)
        const data = await response.json()
        const user = data.data
        return new ModelMain(user)
      }
      // else {
      //   console.log('response.ok', response.ok)
      //   // throw new Error(`HTTP error! status: ${response.status response.ok}`)
      // }
    } catch (errorData) {
      return errorData
      // alert('Erreur 503 : le serveur est déconnecté')
    }
  } else {
    const user = mockUserMainData.find((user) => user.id === userId)
    return user ? new ModelMain(user) : null
    // return new ModelMain(user)
  }
}

const getPerformance = async (typeGetData, userId) => {
  // console.log('Perf TYPE_GET_DATA')
  if (typeGetData) {
    // try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    )
    if (response.ok) {
      const data = await response.json()
      const user = data.data
      // console.log('API Performance', data.data)
      return new ModelPerformance(user)
      // } else {
      //   throw new Error(`HTTP error! status: ${response.status}`)
    }
    // } catch (errorData) {
    //   // console.error('Erreur :', error)
    //   // alert('Erreur 503 : The serveur is en panne')
    //   // throw error
    //   // return error
    // }
  } else {
    const user = mock_UserPerformance.find((user) => user.userId === userId)
    // console.log('mock Performance', user)
    return user ? new ModelPerformance(user) : null
  }
}

const getAverageSessions = async (typeGetData, userId) => {
  if (typeGetData) {
    // try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    )
    if (response.ok) {
      const data = await response.json()
      const user = data.data
      // console.log('API Average')
      return new ModelAverageSessions(user)
    }
    //   else {
    //     throw new Error(`HTTP error! status: ${response.status}`)
    //   }
    // } catch (errorData) {
    //   console.log('errorData.message', errorData.message)
    //   // alert('Erreur 503 : serveur déconnecté')
    //   // throw error
    //   return 'errorData'
    // }
  } else {
    const user = mock_UserAverageSessions.find((user) => user.userId === userId)
    // console.log('mock Average')
    return user ? new ModelAverageSessions(user) : null
  }
}

const getActivy = async (typeGetData, userId) => {
  if (typeGetData) {
    // try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    )
    if (response.ok) {
      const data = await response.json()
      const user = data.data
      // console.log('API Activity')
      return new ModelActivy(user)
    }
    //   else {
    //     throw new Error(`HTTP error! status: ${response.status}`)
    //   }
    // } catch (errorData) {
    //   // alert('Erreur 503 : The serveur is en panne')
    //   // throw error
    //   // return error
    // }
  } else {
    const user = mock_UserActivity.find((user) => user.userId === userId)
    // console.log('mock Activity')
    return user ? new ModelActivy(user) : null
  }
}

export { getDataMain, getPerformance, getAverageSessions, getActivy }
