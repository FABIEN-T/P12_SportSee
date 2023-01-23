import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

function ChartLine({ dataPerformanceerf }) {
  const dataStud = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ]
  //   console.log('radar_perf', dataPerformanceerf.data)
  //   dataPerformanceerf.data.forEach((obj) => {
  //     console.log(dataPerformanceerf.kind[obj.kind], ' : ', obj.value)
  //     // console.log(obj.kind, dataPerformanceerf.kind[obj.kind])
  //   })
  //   console.log(dataPerformanceerf.kind)
  const kindData = dataPerformanceerf.kind
  // const valueData = dataPerformanceerf.data.value
  console.log(dataPerformanceerf.kind)
  //   console.log(dataStud)

  // dataPerformanceerf.data.map((dataEl) => console.log(dataEl))
  // const perf = dataPerformanceerf.data.map((dataEl) => {
  //   dataPerformanceerf.data.kind[dataEl.kind]
  // })
  // console.log('perf', perf)

  return (
    <>
      <div className="cline">
        {/* <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataStud}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer> */}
      </div>
    </>
  )
}

ChartLine.propTypes = {
  dataPerformanceerf: PropTypes.object,
}

export default ChartLine
