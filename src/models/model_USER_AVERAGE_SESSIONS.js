export default class ModelUserAverageSessions {
  constructor(data) {
    this._userId = data.userId
    this._dataAverage = data.sessions.map((element) => new Model())
  }
  get userId() {
    return this._userId
  }
}
