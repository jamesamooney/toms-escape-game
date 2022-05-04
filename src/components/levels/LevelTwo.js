import downArrow from  "../../images/items/arrowDown.png"

export const LevelTwo = ({ setPlayerLocation }) => {

  const goToBasement = () => {
    setPlayerLocation(1)
  }

  return (
    <div className="level-two">
      <img className="down-arrow" src={downArrow} onClick={goToBasement}/>
    </div>
  )
}
