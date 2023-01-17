import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function GraphicsA({ data }) {
  // const jsonData = JSON.stringify(data)
  console.log('jsonData', data)

  // const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  // data.forEach((n) => console.log('A', n.day))
  // data.forEach((i) => {
  //   console.log('data', i.day)
  // })
  // data.forEach((i) => console.log('jours de la semaine', week[i.day - 1]))

  //Modifier la légende sur l'axe X
  const daysWeek = (item) => {
    let week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return `${week[item - 1]}`
  }

  return (
    <>
      <h3>Rechart</h3>
      <div className="courbeSimple">
        <LineChart width={500} height={500} data={data}>
          <CartesianGrid />
          <XAxis
            dataKey="day"
            tickFormatter={daysWeek}
            tickLine={false}
            // tick={false}
            style={{ transform: 'scaleX(0.9)', transformOrigin: 'bottom' }}
          />
          <YAxis yAxisId="left-axis" />
          <Tooltip />
          <Line
            yAxisId="left-axis"
            type="monotone"
            dataKey="sessionLength"
            stroke="#ff0101"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }}
          />
        </LineChart>
      </div>
    </>
  )
}

GraphicsA.propTypes = {
  dat: PropTypes.array,
}

export default GraphicsA
