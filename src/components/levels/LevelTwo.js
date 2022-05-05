import downArrow from  "../../images/items/arrowDown.png"

export const LevelTwo = ({ setPlayerLocation, logs, setLogs }) => {

  const goToBasement = () => {
    setPlayerLocation(1)
    setLogs([...logs, <p>Running back to the basement? Coward!</p>])
  }

  return (
    <div className="level-two">
      <img className="down-arrow" src={downArrow} onClick={goToBasement}/>
    </div>
  )
}
