import OvalBlack from '../../../assets/ovalBlack.svg'
import OvalRed from '../../../assets/ovalRed.svg'

function ChartBarsHeader() {
  return (
    <div className="chartBarsHeader">
      <h3>Activité quotidienne</h3>
      <div className="legend">
        <div className="legend__poids">
          <div>
            <img src={OvalBlack} alt="point noir" />
          </div>
          <div className="legend__poids__text">Poids (kg)</div>
        </div>
        <div className="legend__poids">
          <div>
            <img src={OvalRed} alt="point rouge" />
          </div>
          <div className="legend__poids__text">Calories brûlées (kCal)</div>
        </div>
      </div>
    </div>
  )
}

export default ChartBarsHeader
