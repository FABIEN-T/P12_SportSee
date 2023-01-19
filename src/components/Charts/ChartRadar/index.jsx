import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from 'recharts'

function ChartRadar({ performance }) {
  const categoriesFrench = (item) => {
    let categories = [
      'Intensité',
      'Vitesse',
      'Force',
      'Endurance',
      'Energie',
      'Cardio',
    ]
    return `${categories[item - 1]}`
  }

  // console.log('categoriesFrench : ', categoriesFrench(6))

  return (
    <div className="chartRadar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          // cx={300}
          // cy={250}
          outerRadius="53%"
          // width={100}
          // height={100}
          // data={dataStud}
          data={performance.data}
        >
          <PolarGrid radialLines={false} />
          {/* <PolarAngleAxis dataKey="subject" /> */}
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={categoriesFrench}
            tickLine={false}
            // orient={10}
            // style={{ color: '#fff' }}
            stroke={'#fff'}
            // radius={10}
            fontSize={12}
            strokeWidth={0.5}
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          {/* <Tooltip /> */}
          <Radar
            // name=""
            dataKey="value"
            stroke="none"
            fill="#ff0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartRadar.propTypes = {
  performance: PropTypes.object,
}

export default ChartRadar
