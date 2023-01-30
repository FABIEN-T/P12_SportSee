import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

function ChartRadar({ dataPerformance }) {
  console.log('radialchart dataPerformance', typeof dataPerformance)
  // console.log('Radar', dataPerformance.length)
  if (dataPerformance.length > 0) {
    return (
      <div className="chartRadar">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="53%" data={dataPerformance}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              // tickFormatter={categoriesFrench}
              tickLine={false}
              stroke={'#fff'}
              fontSize={12}
              strokeWidth={0.5}
            />
            <PolarRadiusAxis axisLine={false} tick={false} />
            <Radar dataKey="value" fill="#ff0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

ChartRadar.propTypes = {
  dataPerformance: PropTypes.array,
}

export default ChartRadar
