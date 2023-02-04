class ModelDataSessions {
  constructor(data) {
    this._day = data.day
    this._sessionLength = data.sessionLength
  }
  get day() {
    const daysWeek = (item) => {
      let week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
      return `${week[item - 1]}`
    }
    return daysWeek(this._day)
  }
  get sessionLength() {
    return this._sessionLength
  }
}

export default class ModelAverageSessions {
  constructor(data) {
    this._userId = data.userId
    this._dataAverage = data.sessions.map(
      (element) => new ModelDataSessions(element)
    )
  }
  // get userId() {
  //   return this._userId
  // }
  // get dataAverage() {
  //   return this._dataAverage
  // }
}
