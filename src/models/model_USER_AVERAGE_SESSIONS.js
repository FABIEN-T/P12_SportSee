/**
 * User session data formatting
 * @class
 * @param { Object } data
 * @param { Number } data.day
 * @param { Number } data.sessionLength
 */

class ModelDataSessions {
  constructor(data) {
    this._day = data.day
    this._sessionLength = data.sessionLength
  }

  /**
   * Method converting numbers to initials of days of the week
   * @returns { String } a initial of a day ('L')
   */

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

/**
 * User session averages data formatting
 * @class
 * @param { Object } data
 * @param { Number } data.userId
 * @param { Object[] } data.sessions - array
 */

export default class ModelAverageSessions {
  constructor(data) {
    this._userId = data.userId
    this._dataAverage = data.sessions.map(
      (element) => new ModelDataSessions(element)
    )
  }
}
