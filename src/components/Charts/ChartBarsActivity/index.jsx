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

const CustomTooltip = ({ active, payload }) => {
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

function ChartBars({ dataActivity }) {
  return (
    <div className="chartBars">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dataActivity} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            padding={{ left: -23, right: -24 }}
            tickMargin={16}
            minTickGap={30}
            domain={['dataMin', 'dataMax']}
          />
          <YAxis
            orientation="right"
            yAxisId="kilogram"
            tickLine={false}
            axisLine={false}
            tickMargin={42}
            tickCount={3}
            tick={{ fontSize: 14 }}
            domain={['dataMin-1', 'dataMax']}
          />

          <YAxis orientation="left" yAxisId="calories" hide />
          <Tooltip
            cursor={{ opacity: 0.6 }}
            content={<CustomTooltip />}
            offset={21}
            wrapperStyle={{ outlineStyle: 'none' }}
          />

          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#000"
            barSize={7}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#ff0101"
            barSize={7}
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
      day: PropTypes.number,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
}

export default ChartBars
