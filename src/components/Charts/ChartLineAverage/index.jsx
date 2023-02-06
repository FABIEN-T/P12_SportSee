import PropTypes from 'prop-types'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
} from 'recharts'

/**
 * Component customizing the Tooltip of the line chart
 * @param { Boolean } active - true when hover
 * @param { Object[] } payload - array with properties : fill, dataKey...
 * @returns { JSX.Element } a Tooltip with the values in "minutes" when active
 */

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipLine">
        <p className="label">{`${payload[0].value}min`}</p>
      </div>
    )
  }
  return null
}

/**
 * Component customizing the cursor
 * @param { Object[] } points - array of coordinates of the cursor
 * @returns a semi-transparent gray rectangle moving to the right
 * of a point on the curve over which the pointer passes
 */

function CustomizedCursor({ points }) {
  console.log('df', points)
  return (
    <Rectangle
      fill="black"
      opacity={0.1}
      x={points[0].x}
      width={1000}
      height={300}
    />
  )
}

/**
 * Rechart component displaying graph of user session averages
 * @param { Object[] } dataAverage - array of session averages datas
 * @param { Number } dataAverage[]._day
 * @param { Number } dataAverage[]._sessionLength
 * @returns { JSX.Element } a line chart of the user performance
 */

function ChartLine({ dataAverage }) {
  return (
    <div className="chartLine">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="responsiveContainer"
      >
        <LineChart data={dataAverage}>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'red',
              strokeOpacity: 0.7,
              strokeWidth: 6,
              r: 8,
            }}
            opacity={0.5}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            opacity={0.5}
            style={{
              transform: 'scaleX(0.9)',
              transformOrigin: 'bottom',
              fontSize: '12px',
              stroke: 'white',
            }}
            padding={{ left: -3, right: -3 }}
            interval={'preserveStartEnd'}
          />
          <YAxis
            hide={true}
            padding={{ top: 40, bottom: 0 }}
            domain={['dataMin-10', 'dataMax-10']}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartLine.propTypes = {
  dataAverage: PropTypes.arrayOf(
    PropTypes.shape({
      _day: PropTypes.number,
      _sessionLength: PropTypes.number,
    })
  ),
}

export default ChartLine
