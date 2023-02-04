/**
 * User performance (value) data formatting
 * @class
 * @param { Object } data
 * @param { Number } data.value
 * @param { Number } data.kind
 */

class ModelDataPerformance {
  constructor(data) {
    this._value = data.value
    this._kind = data.kind
  }
  get value() {
    return this._value
  }

  /**
   * Method converting kind numbers to categories in French
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

/**
 * User peformances data formatting
 * @class
 * @param { Object } data
 * @param { Number } data.kind
 * @param { Object[] } data.data - array
 */

export default class ModelPerformance {
  constructor(data) {
    this._kind = data.kind
    this._dataPerformance = data.data.map(
      (element) => new ModelDataPerformance(element)
    )
  }
}
