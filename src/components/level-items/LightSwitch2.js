import lightSwitch2 from "../../images/items/lightSwitchRight.png" 

export const LightSwitch2 = ({setLight2, light2, checkLightPuzzle}) => {

  const switchLight = () => {
    setLight2(light2 + 1)
    if (light2 === 2) {setLight2(0)}
    checkLightPuzzle()
  }

  return (
    <img src={lightSwitch2} className="item" id="light-switch-2" onClick={switchLight}/>
  )
}
