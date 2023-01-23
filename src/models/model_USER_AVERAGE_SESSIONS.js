class ModelSessions {
  constructor(data) {
    this._day = data.day
    this._sessionLength = data.sessionLength
  }
  get day() {
    return this._day
  }
  get sessionLength() {
    return this._sessionLength
  }
}

export default class ModelUserAverageSessions {
  constructor(data) {
    this._userId = data.userId
    this._dataAverage = data.sessions.map(
      (element) => new ModelSessions(element)
    )
  }
  get userId() {
    return this._userId
  }
  get dataAverage() {
    return this._dataAverage
  }
}
