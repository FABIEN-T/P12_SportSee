class ModelDataPerformance {
  constructor(data) {
    this._value = data.value
    this._kind = data.kind
  }
  get value() {
    // console.log('CLASS value', this._value)
    return this._value
  }
  get kind() {
    const categoriesFrench = (item) => {
      // console.log('item', item)
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
    // console.log('typeof', typeof categoriesFrench(this._kind))
    return categoriesFrench(this._kind)
    // return this._kind
  }
}

export default class ModelPerformance {
  constructor(data) {
    this._kind = data.kind
    // this._dataPerformance = data.data
    this._dataPerformance = data.data.map(
      (element) => new ModelDataPerformance(element)
    )
  }
}
