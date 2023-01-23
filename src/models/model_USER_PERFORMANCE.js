class ModelDataPerformance {
  constructor(data) {
    this._value = data.value
    this._kind = data.kind
  }
  get value() {
    return this._value
  }
  get kind() {
    return this._kind
  }
}

export default class ModelUserPerformance {
  constructor(data) {
    // this._userId = data.userId
    this._kind = data.kind
    this._dataPerformance = data.data.map(
      (element) => new ModelDataPerformance(element)
    )
  }
  // get userId() {
  //   return this._userId
  // }
  get kind() {
    return this._kind
  }

  get dataPerformance() {
    return this._dataPerformance
  }
}
