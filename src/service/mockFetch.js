import mockUserMainData from '../data/mock_USER_MAIN_DATA.json'
import ModelUserData from '../models/model_USER_MAIN_DATA'

const fetch_USER_MAIN_DATA = async (userId) => {
  const user = mockUserMainData.find((user) => user.id === userId)
  return new ModelUserData(user)
}

export default fetch_USER_MAIN_DATA
