import lightSwitch3 from "../../images/items/lightSwitchRight.png" 

export const LightSwitch3 = ({setLight3, light3, checkLightPuzzle}) => {

  const switchLight = () => {
    setLight3(light3 + 1)
    if (light3 === 2) {setLight3(0)}
    checkLightPuzzle()
  }

  return (
    <img src={lightSwitch3} className="item" id="light-switch-3" onClick={switchLight}/>
  )
}
