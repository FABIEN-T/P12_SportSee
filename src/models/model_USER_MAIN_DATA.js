/**
 * User main data formatting
 * @class
 */

class ModelMain {
  /**
   * @param { Object } data
   * @param { String } data.userInfos.firstName
   * @param { Number } data.userInfos.age
   * @param { Number } data.score
   * @param { Number } data.keyData.calorieCount
   * @param { Number } data.keyData.proteinCount
   * @param { Number } data.keyData.carbohydrateCount
   * @param { Number } data.keyData.lipidCount
   */
  constructor(data) {
    this.data = data
    this._firstName = data.userInfos.firstName
    this._age = data.userInfos.age
    // Using a ternary condition to solve the problem of changing
    // the name of the property from one object to another("todayScore" vs "score").
    this._score = data.todayScore ? data.todayScore * 100 : data.score * 100
    this._calorie = data.keyData.calorieCount / 1000
    this._protein = data.keyData.proteinCount
    this._carbohydrate = data.keyData.carbohydrateCount
    this._lipid = data.keyData.lipidCount
  }
}

export { ModelMain }
