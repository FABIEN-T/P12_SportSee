class ModelDataSessions {
  constructor(data) {
    this._day = Number(data.day.slice(8))
    this._kilogram = data.kilogram
    this._calories = data.calories
  }
  // get day() {
  //   return this._day && Number(this._day.slice(8))
  // }
  // get kilogram() {
  //   return this._kilogram
  // }
  // get calories() {
  //   return this._calories
  // }
}

export default class ModelActivy {
  constructor(data) {
    this._userId = data.userId
    this._dataActivity = data.sessions.map(
      (element) => new ModelDataSessions(element)
    )
  }
}
