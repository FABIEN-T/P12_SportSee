class ModelDataPerformance {
  constructor(data) {
    this._value = data.value
    this._kind = data.kind
  }
  get value() {
    return this._value
  }
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

export default class ModelPerformance {
  constructor(data) {
    this._kind = data.kind
    this._dataPerformance = data.data.map(
      (element) => new ModelDataPerformance(element)
    )
  }
}
