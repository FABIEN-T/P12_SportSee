// import React from 'react'
import PropTypes from 'prop-types'
// import { func } from 'prop-types'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip2">
        <p className="label">{`${payload[0].value}min`}</p>
      </div>
    )
  }
  return null
}

function CustomizedCursor({ active }) {
  if (active) {
    return <div className="rectangleCursor"></div>
  }
}

// function CustomizedActiveDot() {
//   style={
//     transform: 'scaleX(0.9)',
//     transformOrigin: 'bottom',
//     fontSize: '12px',
//     stroke: 'white',
//   }
// }

function ChartLine({ average }) {
  // const jsonData = JSON.stringify(average)
  // console.log('jsonData', average)

  // const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  // average.forEach((n) => console.log('A', n.day))
  // average.forEach((i) => {
  //   console.log('average', i.day)
  // })
  // average.forEach((i) => console.log('jours de la semaine', week[i.day - 1]))

  //Modifier la légende sur l'axe X
  const daysWeek = (item) => {
    let week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return `${week[item - 1]}`
  }

  return (
    <div className="chartLine">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer
        // width="100%"
        // height="100%"
        className="responsiveContainer"
      >
        <LineChart data={average}>
          <Line
            // yAxisId="left-axis"
            // width="120"
            type="natural"
            dataKey="sessionLength"
            // unit={'min'}
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'red',
              strokeOpacity: 0.7,
              strokeWidth: 6,
              r: 8,
            }}
            // activeDot={<CustomizedActiveDot />}
            opacity={0.5}
          />
          <XAxis
            dataKey="day"
            tickFormatter={daysWeek}
            axisLine={false}
            tickLine={false}
            opacity={0.5}
            // tick={{ stroke: 'white' }}
            // tick={false}
            // padding={{ right: 20, left: 20 }}
            style={{
              transform: 'scaleX(0.9)',
              transformOrigin: 'bottom',
              fontSize: '12px',
              stroke: 'white',
            }}
            padding={{ left: -3, right: -3 }}
            // width={350}
            // domain={['dataMin+30', 'dataMax+30']}
            interval={'preserveStartEnd'}
            // hide={true}
          />
          <YAxis
            // yAxisId="left-axis"
            hide={true}
            padding={{ top: 40, bottom: 0 }}
            domain={['dataMin-10', 'dataMax-10']}
          />
          <Tooltip
            wrapperStyle={{
              background: '#FFF',
              outline: 'none',
            }}
            content={<CustomTooltip />}
            // cursor={{
            //   stroke: 'black',
            //   strokeOpacity: 0.1,
            //   strokeWidth: 40,
            // }}
            cursor={<CustomizedCursor />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartLine.propTypes = {
  average: PropTypes.array,
}

export default ChartLine
