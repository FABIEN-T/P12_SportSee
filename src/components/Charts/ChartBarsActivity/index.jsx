import PropTypes from 'prop-types'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

let a = 40

/**
 * Component customizing the Tooltip of the bar chart
 * @param { Boolean } active - true when hover
 * @param { Object[] } payload - array with properties : fill, dataKey...
 * @returns { JSX.Element } a Tooltip with the values in "kg" and "cal" when active
 */

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}cal`}</p>
      </div>
    )
  }
  return null
}

/**
 * Rechart component displaying graph of user activity
 * @param { Object[] } dataActivity - array of activity datas
 * @param { Number } dataActivity[]._day
 * @param { Number } dataActivity[]._kilogram
 * @param { Number } dataActivity[]._calories
 * @returns { JSX.Element } a bar chart of the user performance
 */

function ChartBars({ dataActivity }) {
  return (
    <div className="chartBars">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataActivity}
          barGap={8}
          barSize={7}
          margin={{ top: 0, right: 20, bottom: 20, left: 6 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={'#DEDEDE'}
          />
          <XAxis
            dataKey="_day"
            tickLine={false}
            tickMargin={16}
            // minTickGap={50}
            tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
            // padding={{ left: -23, right: -23 }}
            // padding={{ left: 0, right: 0, top: 0, bottom: 0 }}
            padding={{ left: -30, right: -46 }}
            // padding="gap"
            // padding="no-gap"
            domain={['dataMin', 'dataMax']}
            stroke="#DEDEDE"
            textAnchor="middle"
          />
          <YAxis
            orientation="right"
            yAxisId="kilogram"
            axisLine={false}
            // type="number"
            tickLine={false}
            tickMargin={42}
            tickCount={3}
            tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
            domain={['dataMin-1', 'dataMax']}
          />

          <YAxis orientation="left" yAxisId="calories" hide />
          <Tooltip
            cursor={{ opacity: 0.6 }}
            content={<CustomTooltip />}
            fill="#E6eeee"
            offset={21}
            wrapperStyle={{ outlineStyle: 'none' }}
          />

          <Bar
            yAxisId="kilogram"
            dataKey="_kilogram"
            fill="#000"
            // barSize={7}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="_calories"
            fill="#E60000"
            // barSize={7}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartBars.propTypes = {
  dataActivity: PropTypes.arrayOf(
    PropTypes.shape({
      _day: PropTypes.number,
      _kilogram: PropTypes.number,
      _calories: PropTypes.number,
    })
  ),
}

export default ChartBars
