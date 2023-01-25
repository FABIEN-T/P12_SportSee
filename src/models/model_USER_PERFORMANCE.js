// class ModelDataPerformance {
//   constructor(data) {
//     this._value = data.value
//     this._kind = data.kind
//   }
//   get value() {
//     console.log('CLASS value', this._value)
//     return this._value
//   }
//   get kind() {
//     return this._kind
//   }
// }

// import ModelDataPerformance from './ModelDataPerformance'

export default class ModelPerformance {
  constructor(data) {
    this._kind = data.kind
    this._dataPerformance = data.data
    // this._dataPerformance = data.data.forEach((element) => {
    //   new ModelDataPerformance(element)
    //   console.log('CLASS element', element.value)
    // })
  }

  get kind() {
    // console.log('CLASS kind', this._kind)
    return this._kind
  }

  get dataPerformance() {
    // console.log('CLASS dataPerf', this._dataPerformance)
    return this._dataPerformance
  }
}
