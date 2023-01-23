class ModelSessions {
  constructor(data) {
    this._day = data.day
    this._kilogram = data.kilogram
    this._calories = data.calories
  }
  get day() {
    return this._day
  }
  get kilogram() {
    return this._kilogram
  }
  get calories() {
    return this._calories
  }
}

export default class ModelUserActivy {
  constructor(data) {
    this._userId = data.userId
    this._dataActivity = data.sessions.map(
      (element) => new ModelSessions(element)
    )
  }
  get userId() {
    return this._userId
  }
  get dataActivity() {
    return this._dataActivity
  }
}
