/**
 * User activity data formatting
 * @class
 */

class ModelActivity {
  /**
   * @param { Object } data
   * @param { Object[] } data.sessions - day, kilogram, calories
   */
  constructor(data) {
    this._dataActivity = data.sessions.map(
      (element) => new ModelActivitySessions(element)
    )
  }
}

export { ModelActivity }

/**
 * User sessions data formatting (Activity)
 * @class
 */

class ModelActivitySessions {
  /**
   * @param { Object } data
   * @param { String } data.day
   * @param { Number } data.kilogram
   * @param { Number } data.calories
   */
  constructor(data) {
    this._day = Number(data.day.slice(8))
    // data.day is in date format
    // Number (data.day.slice(8)) :
    // keep the last digit of '2020-07-02' and return a number : 2
    // keep the last two digits '2020-07-12' and return a number : 12
    this._kilogram = data.kilogram
    this._calories = data.calories
  }
}
