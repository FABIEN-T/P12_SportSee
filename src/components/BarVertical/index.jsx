import IconBike from '../../assets/iconBike.svg'
import IconDumbbell from '../../assets/iconDumbbell.svg'
import IconLotus from '../../assets/iconLotus.svg'
import IconSwimming from '../../assets/iconSwimming.svg'

function BarVertical() {
  return (
    <div className="barVertical">
      <div className="iconsBarVertical">
        <img
          src={IconLotus}
          alt="icône poistion du lotus"
          className="iconBar"
        />
        <img src={IconSwimming} alt="icône natation" className="iconBar" />
        <img src={IconBike} alt="icône cyclisme" className="iconBar" />
        <img src={IconDumbbell} alt="icône haltérophilie" className="iconBar" />
      </div>
      <div className="copyrights">Copiryght, SportSee 2020</div>
    </div>
  )
}

export default BarVertical
