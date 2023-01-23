import mockUserMainData from '../data/mock_USER_MAIN_DATA.json'
import mock_UserPerformance from '../data/mock_USER_PERFORMANCE.json'
import ModelUserData from '../models/model_USER_MAIN_DATA'
import ModelUserPerformance from '../models/model_USER_PERFORMANCE'

const fetchUserMainData = async (userId) => {
  const user = mockUserMainData.find((user) => user.id === userId)
  return new ModelUserData(user)
}

// export default fetch_USER_MAIN_DATA

const fetchUserPerformance = async (userId) => {
  const user = mock_UserPerformance.find((user) => user.userId === userId)
  return new ModelUserPerformance(user)
}

// export default fetch_USER_PERFORMANCE

export { fetchUserMainData, fetchUserPerformance }
