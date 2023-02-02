export default class ModelUserData {
  constructor(data) {
    this._id = data.id
    this._firstName = data.userInfos.firstName
    this._lastName = data.userInfos.lastName
    this._age = data.userInfos.age
    this._score = data.todayScore ? data.todayScore * 100 : data.score * 100
    this._calorie = (data.keyData.calorieCount / 1000)
      .toFixed(3)
      .replace('.', ',')
    // .toString()
    this._protein = data.keyData.proteinCount.toString()
    this._carbohydrate = data.keyData.carbohydrateCount.toString()
    this._lipid = data.keyData.lipidCount.toString()
  }
  // get firstName() {
  //   return this._firstName
  // }
  // get lastName() {
  //   return this._lastName
  // }
  // get age() {
  //   return this._age
  // }
  // get score() {
  //   return this._score * 100
  // }
  // get _calorie() {
  //   // const calorieParse = (this._calorieCount / 1000)
  //   //   .toFixed(3)
  //   //   .replace('.', ',')
  //   // return calorieParse
  //   return (this._calorieCount / 1000).toFixed(3).replace('.', ',')
  // }
  // get protein() {
  //   return this._proteinCount
  // }
  // get carbohydrate() {
  //   return this._carbohydrateCount
  // }
  // get lipid() {
  //   return this._lipidCount
  // }
}
