/**
 * User session averages data formatting
 * @class
 */

class ModelAverageSessions {
  /**
   * @param { Object } data
   * @param { Object[] } data.sessions - day, sessionLength
   */
  constructor(data) {
    this._dataAverage = data.sessions.map(
      (element) => new ModelAverageSessionsLength(element)
    )
  }
}

export { ModelAverageSessions }

/**
 * User session data formatting (Average sessions)
 * @class
 */
class ModelAverageSessionsLength {
  constructor(data) {
    /**
     * @param { Object } data
     * @param { Number } data.day
     * @param { Number } data.sessionLength
     */
    this._day = data.day
    this._sessionLength = data.sessionLength
  }

  /**
   * @property {Function} day() converting numbers to initials of days of the week
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
