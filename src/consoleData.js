import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './data/mockData'

// import mockData from './data/mockData'

function ConsoleData() {
  const currentUserId = 12

  const currentUserMain = USER_MAIN_DATA.find(
    (userPerf) => userPerf.id === currentUserId
  )
  console.log('***********id**************', currentUserMain.id)
  console.log(
    currentUserMain.userInfos.firstName,
    currentUserMain.userInfos.lastName,
    currentUserMain.userInfos.age
  )

  const currentUserActivity = USER_ACTIVITY.find(
    (user) => user.userId === currentUserId
  )
  // console.log('********B_id**********', currentUserActivity.userId)
  currentUserActivity.sessions.map((prop) => {
    console.log('-----ACTIVITY-----')
    console.log('day', prop.day)
    console.log('kilogram', prop.kilogram)
    console.log('calories', prop.calories)
  })

  const currentUserAverage = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === currentUserId
  )
  console.log('-----AVERAGE-----')
  currentUserAverage.sessions.forEach((prop) => {
    console.log('day', prop.day)
    console.log('sessionLength', prop.sessionLength)
  })

  const currentUserPerformance = USER_PERFORMANCE.find(
    (user) => user.userId === currentUserId
  )

  // console.log(''********D_id**********'', currentUserPerformance.userId)
  console.log('-----PERFORMANCES-----')
  currentUserPerformance.data.forEach((obj) => {
    console.log(currentUserPerformance.kind[obj.kind], ' : ', obj.value)
    // console.log(obj.kind, currentUserPerformance.kind[obj.kind])
  })
}

export default ConsoleData

// USER_MAIN_DATA.map((el) => {
//   console.log('id', el.id)
//   console.log('firstName', el.userInfos.firstName)
//   console.log('calorieCount', el.keyData.calorieCount)
// })

// console.log('********C_id**********', currentUserActivity.userId)
// USER_AVERAGE_SESSIONS.map((el) => {
//   console.log('*********userId **********', el.userId)
//   el.sessions.map((prop) => {
//     console.log('day', prop.day)
//     console.log('sessionLength', prop.sessionLength)
//   })
// })

// USER_ACTIVITY.map((el) => {
//   console.log('*********userId **********', el.userId)
//   el.sessions.map((prop) => {
//     console.log('day', prop.day)
//     console.log('kilogram', prop.kilogram)
//     console.log('calories', prop.calories)
//   })
// })

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