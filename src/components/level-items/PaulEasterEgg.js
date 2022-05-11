import paulIn from "../../images/items/PaulIn.png";
import paulOut from "../../images/items/PaulOut.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { PaulsTongueAudio } from "./PaulsTongueAudio";

export const PaulEasterEgg = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { paulClicked, setPaulClicked } = useContext(AppContext)
  const { paulPlaying, setPaulPlaying } = useContext(AppContext)
  const { hasBroom, setHasBroom } = useContext(AppContext)

  const cantReachPaul = () => {
    setLogs([...logs, { type:"inform", text: "You can think you can reach the heights of Paul? Na, you'll need something long to reach him..."}])
  }

  const clickPaul = () => {
    setLogs([...logs, { type:"inform", text: "That's a nice tongue... click it again, Paul might sing for you!"}])
    setPaulClicked(true)
  }

  const playSong = () => {
    setLogs([...logs, { type:"inform", text: "You hear a sweet, sweet melody"}])
    setPaulPlaying(true)
    PaulsTongueAudio.play()
  }

  const stopSong = () => {
    setPaulPlaying(false)
    PaulsTongueAudio.pause()
  }
  
  if(hasBroom===false) {return(
    <div>
      <img className="pauls-tongue" src={paulIn} onClick={cantReachPaul} />
    </div>
  )} else if(paulClicked===false) {return (
    <div>
      <img className="pauls-tongue" src={paulIn} onClick={clickPaul} />
    </div>
  )} else if(paulClicked===true && paulPlaying===false) {return (
    <div>
      <img className="pauls-tongue" src={paulOut} onClick={playSong} />
    </div>
  )} else {return (
    <div>
      <img className="pauls-tongue" src={paulOut} onClick={stopSong} />
    </div>
  )}
}