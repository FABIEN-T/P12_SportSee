import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts'

// const score = 30
// const data = [
//   {
//     uv: score,
//     fill: '#ff0101',
//   },
// ]

function ChartRadialBar({ score }) {
  // console.log(typeof score)
  const data = [
    {
      uv: score,
      fill: '#ff0101',
    },
  ]
  return (
    <div className="chartRadialBar">
      <h3>Score</h3>
      <ResponsiveContainer className="positionRadial">
        <RadialBarChart
          // cx="50%"
          // cy="50%"
          startAngle={90}
          endAngle={450}
          innerRadius={85}
          barSize={9}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            fill="#ff0101"
            domain={[0, 100]}
            tick={false}
          />
          <RadialBar
            minAngle={1}
            // background={'aaa'}
            // background="transparent"
            cornerRadius="10"
            dataKey="uv"
          />
          <text
            fontWeight="700"
            fontSize={26}
            fill="#282D30"
            x="50%"
            y="48%"
            textAnchor="middle"
          >
            {score}%
          </text>
          <text
            fontSize="16"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="57%"
            textAnchor="middle"
          >
            de votre
          </text>
          <text
            fontSize="16"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="66%"
            textAnchor="middle"
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartRadialBar.propTypes = {
  score: PropTypes.number,
}

export default ChartRadialBar
