export default class ModelUserData {
  constructor(data) {
    this._firstName = data.userInfos.firstName
    this._lastName = data.userInfos.lastName
    this._age = data.userInfos.age
    this._score = data.todayScore ? data.todayScore * 100 : data.score * 100
    this._calorie = data.keyData.calorieCount / 1000
    this._protein = data.keyData.proteinCount
    this._carbohydrate = data.keyData.carbohydrateCount
    this._lipid = data.keyData.lipidCount
  }
}
