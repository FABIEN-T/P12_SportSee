// import React from 'react'
import React, { FunctionComponent } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

import { customTickXaxis } from '../../../utils/functions'

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
// }: any ????

function ChartBars({ dataActivity }) {
  // console.log('activity', activity)

  return (
    <div className="chartBars">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dataActivity} barGap={8}>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            padding={{ left: -23, right: -24 }}
            tickMargin={16} //pb!
            tickFormatter={customTickXaxis}
            // axisLine={false}
            // domain={['dataMin + 1', 'dataMax + 1']}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickMargin={42}
            minTickGap={27}
            tick={{ fontSize: 14 }}
            interval={'preserveStartEnd'}
            // axisLine={false}
            allowDecimals={false}
            dataKey={'kilogram'}
            yAxisId="kilogram"
            domain={['dataMin - 10', 'dataMax']}
          />

          <YAxis orientation="left" hide dataKey={'calories'} />
          <Tooltip
            cursor={{ opacity: 0.6 }}
            content={<CustomTooltip />}
            offset={21}
            wrapperStyle={{ outlineStyle: 'none' }}
          />

          <Bar
            dataKey="kilogram"
            fill="#000"
            barSize={7}
            radius={[4, 4, 0, 0]}
          />
          <Bar
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

export default ChartBars
