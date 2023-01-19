import { PieChart, Pie, Sector, Cell } from 'recharts'

// const data = [
//   { name: 'Group C', value: 12 },
//   { name: 'Group D', value: 88 },
// ]
const COLORS = ['#FF0101', '#f6f5f5']

function ChartPie({ main }) {
  //   console.log('main', main)
  const dataScore = [
    { name: 'score', value: main * 100 },
    { name: 'rest', value: 100 - main * 100 },
  ]
  //   console.log(dataScore)
  return (
    <PieChart width={160} height={160}>
      <Pie
        data={dataScore}
        // cx={75}
        // cy={75}
        startAngle={90}
        endAngle={480}
        innerRadius={65}
        outerRadius={78}
        cornerRadius={20}
        fill="#8884d8"
        dataKey="value"
        style={{ border: 'green 0px solid' }}
      >
        {dataScore.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}

export default ChartPie
