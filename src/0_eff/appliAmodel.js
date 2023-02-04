// import React from 'react'
// import mockUserMainData from '../data/mock_USER_MAIN_DATA.json'
// import ModelMainData from './model_USER_MAIN_DATA'
import fetch_USER_MAIN_DATA from '../service/mockFetch'

const currentUserId = 12

export default function ListData() {
  // function userData(user) {
  //   const firstName = user.userInfos.firstName
  //   return { firstName }
  // }

  // SERVICES
  // const fetchUSER_MAIN_DATA = async (userId) => {
  //   const user = mockUserMainData.find((user) => user.id === userId)
  //   return new ModelMainData(user)
  // }

  fetch_USER_MAIN_DATA(currentUserId).then((data) => {
    // const { firstName } = data
    console.log(
      'MODEL3 firstName',
      data._firstName,
      data._lastName,
      data._age,
      data._score,
      data._calorieCount,
      data._proteinCount,
      data._carbohydrateCount,
      data._lipidCount
    )
  })

  // const fetchUSER_MAIN_DATA = async (userId) => {
  //   const user = mockUserMainData.find((user) => user.id === userId)
  //   return userData(user) // Classe
  // }

  // fetchUSER_MAIN_DATA(currentUserId).then((data) => {
  //   const { firstName } = data
  //   console.log('firstName', firstName)
  // })
}

// ********************************************************
// ********************************************************
// function ListData({ data }) {
//   console.log('data', data)
//   const currentUserId = 12

//   const currentUserMain = data.find((user) => user.id === currentUserId)
//   console.log(currentUserMain.userInfos.firstName)

// return (
//   <>
//     <h1>CLASS</h1>
//     {data.map((users, index) => {
//       const user = new ModelMainData(users)
//       console.log(user)
//     return (
//       <React.Fragment key={index}>
//         <ul>
//           <li key={index}>
//             {user._id}
//             {/* {user._firstName} {user._lastName} / {user._age}ans /{' '}
//             {user._score * 100}% */}
//           </li>
//         </ul>
//       </React.Fragment>
//     )
//     })}
//   </>
// )
// }

// export default ListData
