import IconBike from '../../assets/iconSportBike.svg'
import IconDumbbell from '../../assets/iconSportDumbbell.svg'
import IconLotus from '../../assets/iconSportLotus.svg'
import IconSwimming from '../../assets/iconSportSwimming.svg'

function BarVertical() {
  return (
    <div className="barVertical">
      <div className="iconsBarVertical">
        <img
          src={IconLotus}
          alt="icône poistion du lotus"
          className="iconSport"
        />
        <img src={IconSwimming} alt="icône natation" className="iconSport" />
        <img src={IconBike} alt="icône cyclisme" className="iconSport" />
        <img
          src={IconDumbbell}
          alt="icône haltérophilie"
          className="iconSport"
        />
      </div>
      <div className="copyrights">Copiryght, SportSee 2020</div>
    </div>
  )
}

export default BarVertical
