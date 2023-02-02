import mock_UserMainData from '../data/mock_USER_MAIN_DATA.json'
import mock_UserPerformance from '../data/mock_USER_PERFORMANCE.json'
import mock_UserAverageSessions from '../data/mock_USER_AVERAGE_SESSIONS.json'
import mock_UserActivity from '../data/mock_USER_ACTIVITY.json'

import ModelMain from '../models/model_USER_MAIN_DATA'
import ModelPerformance from '../models/model_USER_PERFORMANCE'
import ModelAverageSessions from '../models/model_USER_AVERAGE_SESSIONS'
import ModelActivy from '../models/model_USER_ACTIVITY'

const userId = 1
const urlModel = [
  {
    url: `http://localhost:3000/user/${userId}`,
    mock: mock_UserMainData,
    Model: ModelMain,
  },
  {
    url: `http://localhost:3000/user/${userId}/performance`,
    mock: mock_UserPerformance,
    Model: ModelPerformance,
  },
  {
    url: `http://localhost:3000/user/${userId}/average-sessions`,
    mock: mock_UserAverageSessions,
    Model: ModelAverageSessions,
  },
  {
    url: `http://localhost:3000/user/${userId}/activity`,
    mock: mock_UserActivity,
    Model: ModelActivy,
  },
]

async function getDataFunc(userId) {
  urlModel.forEach((el) => {
    // const data = mockUserMainData.find((user) => user.id === userId)
    // console.log(new ModelMain(data))
    // console.log('url', el.url)
    // const data = el.mock.find((user) => user.id === userId)
    // // const bidule = new el.Model(data)
    // console.log('data', data.data)
  })

  // if (typeData) {
  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     return new Model(data.data)
  //   } catch (error) {
  //     // console.log('error getData', error)
  //     return error
  //   }
  // } else {
  //   const data = mockUserMainData.find((user) => user.id === userId)
  //   return data ? new ModelMain(data) : null
  // }
}

getDataFunc(12)

async function getDataMain(typeData, userId) {
  // const getDataMain = async (typeData, userId) => {
  if (typeData) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`)
      const data = await response.json()
      return new ModelMain(data.data)
    } catch (error) {
      // console.log('error getData', error)
      return error
    }
  } else {
    const data = mock_UserMainData.find((user) => user.id === userId)
    return data ? new ModelMain(data) : null
  }
}

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

const getActivy = async (typeData, userId) => {
  if (typeData) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    )
    const data = await response.json()
    return new ModelActivy(data.data)
  } else {
    const data = mock_UserActivity.find((user) => user.userId === userId)
    return data ? new ModelActivy(data) : null
  }
}

export { getDataMain, getPerformance, getAverageSessions, getActivy }
