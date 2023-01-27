export default class ModelUserData {
  constructor(data) {
    this._firstName = data.userInfos.firstName
    this._lastName = data.userInfos.lastName
    this._age = data.userInfos.age
    this._score = data.todayScore ? data.todayScore : data.score
    this._calorieCount = data.keyData.calorieCount
    this._proteinCount = data.keyData.proteinCount
    this._carbohydrateCount = data.keyData.carbohydrateCount
    this._lipidCount = data.keyData.lipidCount
  }
  get firstName() {
    return this._firstName
  }
  get lastName() {
    return this._lastName
  }
  get age() {
    return this._age
  }
  get score() {
    return this._score * 100
  }
  get calorie() {
    // const calorieParse = (this._calorieCount / 1000)
    //   .toFixed(3)
    //   .replace('.', ',')
    // return calorieParse
    return this._calorieCount
  }
  get protein() {
    return this._proteinCount
  }
  get carbohydrate() {
    return this._carbohydrateCount
  }
  get lipid() {
    return this._lipidCount
  }
}
