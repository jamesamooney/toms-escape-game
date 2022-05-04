import lightSwitch1 from "../../images/items/lightSwitchLeft.png" 

export const LightSwitch1 = ({setLight1, light1, checkLightPuzzle}) => {
  
  const switchLight = () => {
    setLight1(light1 + 1)
    if (light1 === 2) {setLight1(0)}
    checkLightPuzzle()
  }
  
  return (
    <img src={lightSwitch1}
      className="item"
      id="light-switch-1"
      onClick={switchLight} />
  )
}
