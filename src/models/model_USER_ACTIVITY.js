/**
 * User sessions data formatting
 * @class
 * @param { Object } data
 * @param { String } data.day
 * @param { Number } data.kilogram
 * @param { Number } data.calories
 */

class ModelDataActivitySessions {
  constructor(data) {
    this._day = Number(data.day.slice(8))
    // 2020-07-02 : keep the last digit and return a number : 2
    // 2020-07-12 : keep the last two digits and return a number : 12
    this._kilogram = data.kilogram
    this._calories = data.calories
  }
}

/**
 * User activity data formatting
 * @class
 * @param { Object } data
 * @param { Number } data.userId
 * @param { Object[] } data.sessions - array
 */

export default class ModelActivity {
  constructor(data) {
    this._userId = data.userId
    this._dataActivity = data.sessions.map(
      (element) => new ModelDataActivitySessions(element)
    )
  }
}
