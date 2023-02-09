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

/**
 * Rechart component displaying user performance chart
 * @param { Object[] } dataPerformance - array of performance datas
 * @param { Number } dataPerformance[].value
 * @param { String } dataPerformance[].kind
 * @returns { JSX.Element } a radar chart of the user performance
 */

function ChartRadar({ dataPerformance }) {
  if (dataPerformance.length > 0) {
    return (
      <div className="chartRadar">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="53%" data={dataPerformance}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tickLine={false}
              stroke={'#fff'}
              fontSize={12}
              strokeWidth={0.5}
            />
            <PolarRadiusAxis axisLine={false} tick={false} />
            <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

ChartRadar.propTypes = {
  dataPerformance: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
}

export default ChartRadar
