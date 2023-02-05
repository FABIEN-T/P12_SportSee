// /**
//  * User session data formatting (Average sessions)
//  * @class
//  */
// class ModelAverageSessionsLength {
//   constructor(data) {
//     /**
//      * @param { Object } data
//      * @param { Number } data.day
//      * @param { Number } data.sessionLength
//      */
//     this._day = data.day
//     this._sessionLength = data.sessionLength
//   }

//   /**
//    * @property {Function} day() converting numbers to initials of days of the week
//    * @returns { String } a initial of a day ('L')
//    */

//   get day() {
//     const daysWeek = (item) => {
//       let week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
//       return `${week[item - 1]}`
//     }
//     return daysWeek(this._day)
//   }

//   get sessionLength() {
//     return this._sessionLength
//   }
// }

// /**
//  * User performance (value) data formatting
//  * @class
//  */

// class ModelPerformanceValue {
//   /**
//    * @param { Object } data
//    * @param { Number } data.value
//    * @param { Number } data.kind
//    */
//   constructor(data) {
//     this._value = data.value
//     this._kind = data.kind
//   }
//   get value() {
//     return this._value
//   }

//   /**
//    * @property {Function} kind() - converting kind numbers to categories in French
//    * @returns { String } french categorie
//    */

//   get kind() {
//     const categoriesFrench = (item) => {
//       let categories = [
//         'Intensité',
//         'Vitesse',
//         'Force',
//         'Endurance',
//         'Energie',
//         'Cardio',
//       ]
//       return `${categories[item - 1]}`
//     }
//     return categoriesFrench(this._kind)
//   }
// }

// export {
//   ModelActivitySessions,
//   ModelAverageSessionsLength,
//   ModelPerformanceValue,
// }
