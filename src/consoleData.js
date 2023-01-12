import {
  // USER_MAIN_DATA,
  // USER_ACTIVITY,
  // USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './data/mockData'

// import mockData from './data/mockData'

function ConsoleData() {
  const currentUserId = 18

  // USER_MAIN_DATA.map((el) => {
  //   console.log('id', el.id)
  //   console.log('firstName', el.userInfos.firstName)
  //   console.log('calorieCount', el.keyData.calorieCount)
  // })
  // USER_ACTIVITY.map((el) => {
  //   console.log('*********userId **********', el.userId)
  //   el.sessions.map((prop) => {
  //     console.log('day', prop.day)
  //     console.log('kilogram', prop.kilogram)
  //     console.log('calories', prop.calories)
  //   })
  // })
  // USER_AVERAGE_SESSIONS.map((el) => {
  //   console.log('*********userId **********', el.userId)
  //   el.sessions.map((prop) => {
  //     console.log('day', prop.day)
  //     console.log('sessionLength', prop.sessionLength)
  //   })
  // })
  // const lodgingSheetSelected = lodgingData.find((lodging) => lodging.id === id)
  const currentUserPerformance = USER_PERFORMANCE.find(
    (userPerf) => userPerf.userId === currentUserId
  )

  console.log('*********', currentUserPerformance.userId)
  currentUserPerformance.data.forEach((obj) => {
    console.log(currentUserPerformance.kind[obj.kind], ' : ', obj.value)
    console.log(obj.kind, currentUserPerformance.kind[obj.kind])
  })
}

export default ConsoleData

//USER_PERFORMANCE.forEach((el) => {
//   console.log('*********userId **********', el.userId)
//   // console.log('el.kind', el.kind)
//   // console.log(Object.keys(el.kind).length)
//   // Object.keys(el.kind).forEach((key) => console.log('key', el.kind[key]))
//   el.data.forEach((obj) => {
//     console.log(el.kind[obj.kind], ' : ', obj.value)
//     // console.log(obj.kind, el.kind[obj.kind])
//   })
// })
