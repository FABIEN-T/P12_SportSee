/**
 * User peformances data formatting
 * @class
 */

class ModelPerformance {
  /**
   * @param { Object } data
   * @param { Object[] } data.data - value and kind
   */
  constructor(data) {
    this._dataPerformance = data.data.map(
      (element) => new ModelPerformanceValue(element)
    )
  }
}

export { ModelPerformance }

/**
 * User performance (value) data formatting
 * @class
 */

class ModelPerformanceValue {
  /**
   * @param { Object } data
   * @param { Number } data.value
   * @param { Number } data.kind
   */
  constructor(data) {
    this._value = data.value
    this._kind = data.kind
  }
  get value() {
    return this._value
  }

  /**
   * @property {Function} kind() - converting kind numbers to categories in French
   * @returns { String } french categorie
   */

  get kind() {
    const categoriesFrench = (item) => {
      let categories = [
        'Intensité',
        'Vitesse',
        'Force',
        'Endurance',
        'Energie',
        'Cardio',
      ]
      return `${categories[item - 1]}`
    }
    return categoriesFrench(this._kind)
  }
}
