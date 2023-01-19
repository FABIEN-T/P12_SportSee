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
  Legend,
} from 'recharts'

import { customTickXaxis } from '../../../utils/functions'

// function CustomizedAxisTick({ activitySessions }) {
//   return (
//     <text
//       x={0}
//       y={0}
//       // dy={16}
//       // textAnchor="end"
//       fill="#666"
//       fontSize={'14'}
//       // transform="rotate(-35)"
//     >
//       A
//     </text>
//   )
// }
const CustomTooltip = ({ active, payload, label }) => {
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

function ChartBars({ activity }) {
  // console.log('activity', activity)

  return (
    <div className="chartBars">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          // width={800}
          // height={300}
          data={activity}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          {/* <XAxis dataKey="name" /> */}
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
          {/* <Area type="monotone" dataKey="kilogram" yAxisId="kilogram" /> */}
          {/* <ResponsiveContainer width="50%" height="50%"> */}
          <Tooltip
            cursor={{ opacity: 0.6 }}
            content={<CustomTooltip />}
            offset={21}
            wrapperStyle={{ outlineStyle: 'none' }}
          />
          {/* </ResponsiveContainer> */}
          {/* <Legend /> */}

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
