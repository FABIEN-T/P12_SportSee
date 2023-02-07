import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Legend,
} from 'recharts'

function displayTitle() {
  return (
    <div style={{ color: 'blue', marginLeft: '13%', marginTop: 11 }}>Score</div>
  )
}

/**
 * Rechart component displaying graph of user score
 * @param { Number } score - user score number
 * @returns { JSX.Element } a radial bar chart of the user score
 */

function ChartRadialBar({ score }) {
  const data = [
    {
      uv: score,
      fill: '#ff0101',
    },
  ]

  return (
    <div className="chartRadialBar">
      {/* <h3>Score</h3> */}
      {/* <div className="chartRadialBar__small"> */}
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={90}
          endAngle={450}
          innerRadius={80}
          outerRadius={260}
          barSize={9}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            // fill="#ff0101"
            domain={[0, 100]}
            tick={false}
            angleAxisId={0}
            axisLineType="polygon"
          />
          {/* <RadialBar minAngle={1} cornerRadius="10" dataKey="uv" /> */}
          <RadialBar cornerRadius="10" dataKey="uv" />
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
            y="60%"
            textAnchor="middle"
          >
            de votre
          </text>
          <text
            fontSize="16"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="70%"
            textAnchor="middle"
          >
            objectif
          </text>
          <Legend verticalAlign="top" align="left" content={displayTitle} />
        </RadialBarChart>
      </ResponsiveContainer>
      {/* </div> */}
    </div>
  )
}

ChartRadialBar.propTypes = {
  score: PropTypes.number,
}

export default ChartRadialBar
