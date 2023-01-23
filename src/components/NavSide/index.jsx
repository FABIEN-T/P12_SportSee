import IconBike from '../../assets/iconSportBike.svg'
import IconDumbbell from '../../assets/iconSportDumbbell.svg'
import IconLotus from '../../assets/iconSportLotus.svg'
import IconSwimming from '../../assets/iconSportSwimming.svg'

function BarVertical() {
  return (
    <div className="navSide">
      <div className="navSide__icon">
        <img
          src={IconLotus}
          alt="icône position du lotus"
          className="navSide__icon__sport"
        />
        <img
          src={IconSwimming}
          alt="icône natation"
          className="navSide__icon__sport"
        />
        <img
          src={IconBike}
          alt="icône cyclisme"
          className="navSide__icon__sport"
        />
        <img
          src={IconDumbbell}
          alt="icône haltérophilie"
          className="navSide__icon__sport"
        />
      </div>
      <div className="navSide__copyrights">Copiryght, SportSee 2023</div>
    </div>
  )
}

export default BarVertical
