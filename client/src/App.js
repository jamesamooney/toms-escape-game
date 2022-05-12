import { useState, useRef, useEffect, } from 'react'
import { AppContext } from './AppContext'
import { MyStopwatch } from './components/Stopwatch'
import { LevelZero } from './components/levels/LevelZero'
import { LevelOne } from './components/levels/LevelOne'
import { LevelTwo } from './components/levels/LevelTwo'
import { LevelThree } from './components/levels/LevelThree'
import { GameComplete } from './components/levels/GameComplete'
import { Leaderboard } from './components/levels/Leaderboard'
import { TextInterface } from './components/TextInterface'
import { Pouch } from './components/Pouch'
import { TimerLogo } from './components/level-items/TimerLogo'

// SFX for preloading
import accessSafe from "./components/audio/accessSafe.wav"
import AppThemeTune from "./components/audio/AppThemeTune.wav"
import boneSFX from "./components/audio/boneSFX.wav"
import book from "./components/audio/book.wav"
import broomSFX from "./components/audio/broomSFX.wav"
import cellDoor from "./components/audio/cellDoor.mp3"
import closedChest from "./components/audio/closedChest.wav"
import correctInput from "./components/audio/correctInput.wav"
import detonate from "./components/audio/detonate.wav"
import diggingSFX from "./components/audio/diggingSFX.wav"
import dinnerBellSFX from "./components/audio/dinnerBellSFX.wav"
import dirtSFX from "./components/audio/dirtSFX.wav"
import dogSnarlSFX from "./components/audio/dogSnarlSFX.wav"
import electricHum from "./components/audio/electricHum.wav"
import grab from "./components/audio/grab.mp3"
import gulpSFX from "./components/audio/gulpSFX.wav"
import hey from "./components/audio/hey.mp3"
import HeyJoe from "./components/audio/HeyJoe.wav"
import keysJingle from "./components/audio/keysJingle.mp3"
import lightSwitch from "./components/audio/lightSwitch.wav"
import lockedDoor from "./components/audio/lockedDoor.mp3"
import openChest from "./components/audio/openChest.wav"
import openDoor from "./components/audio/openDoor.mp3"
import padlock from "./components/audio/padlock.wav"
import paperCrumpuling from "./components/audio/paperCrumpuling.wav"
import PaulsTongue from "./components/audio/PaulsTongue.wav"
import ping from "./components/audio/ping.mp3"
import powerSwitch from "./components/audio/powerSwitch.wav"
import radioone from "./components/audio/radioone.wav"
import rockSFX from "./components/audio/rockSFX.wav"
import shovel from "./components/audio/shovel.wav"
import snoringSFX from "./components/audio/snoringSFX.wav"
import TomAndJerryThemeAcapella from "./components/audio/TomAndJerryThemeAcapella.wav"
import unfurlingScrollSFX from "./components/audio/unfurlingScrollSFX.wav"
import windowBreaking from "./components/audio/windowBreaking.mp3"
import wrongInput from "./components/audio/wrongInput.wav"


import './App.css';

function App() {
  const messagesEnd = useRef(null)
  
  const [logs, setLogs] = useState([ { type: "inform", text: "Oh no! You've been locked in a dungeon with Tom! Look around you to find something that might help you escape! It might be worth clicking on... I mean, having a chat with Tom as well!"}])
  const [pouch, setPouch] = useState([])
  const [hasBook, setHasBook] = useState(false)
  const [hasBroom, setHasBroom] = useState(false)
  const [hasKeyOne, setHasKeyOne] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [isPadlockSolved, setPadlockSolved] = useState(false)
  const [isSafeSolved, setSafeSolved] = useState(false)
  const [doorOneOpen, setDoorOneOpen] = useState(false)
  const [hasTurnedOnPower, setHasTurnedOnPower] = useState(false)
  const [light1, setLight1] = useState(0)
  const [light2, setLight2] = useState(0)
  const [light3, setLight3] = useState(0)
  const [hasPaper1, setHasPaper1] = useState(false)
  const [hasPaper2, setHasPaper2] = useState(false)
  const [hasPaper3, setHasPaper3] = useState(false)
  const [hasPaper4, setHasPaper4] = useState(false)
  const [hasPaper5, setHasPaper5] = useState(false)
  const [hasRock, setHasRock] = useState(false)
  const [hasTnt, setHasTnt] = useState(false)
  const [hasDetonator, setHasDetonator] = useState(false)
  const [safeAppears, setSafeAppears] = useState(false)
  const [isSafeClicked, setSafeClicked] = useState(false)
  const [isWindowBroken, setIsWindowBroken] = useState(false)
  const [savedMinutes, setSavedMinutes] = useState()
  const [savedSeconds, setSavedSeconds] = useState()
  const [finalTime, setFinalTime] = useState()
  const [hasShovel, setHasShovel] = useState(false)
  const [isHoleDug, setIsHoleDug] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const [radioPlaying, setRadioPlaying] = useState(false)
  const [hasChestKey, setHasChestKey] = useState(false)
  const [chestUnlocked, setChestUnlocked] = useState(false)
  const [chestOpen, setChestOpen] = useState(false)
  const [hasBone, setHasBone] = useState(false)
  const [isTrapLaid, setIsTrapLaid] = useState(false)
  const [hasBellRung, setHasBellRung] = useState(false)
  const [isKillerDefeated, setIsKillerDefeated] = useState(false)
  const [hasBlueprint, setHasBlueprint] = useState(false)
  const [leaderboard, setLeaderboard] = useState([])
  const [userName, setUserName] = useState("")
  const [detonatorAudioPlayed, setDetonatorAudioPlayed] = useState(false)
  const [hasTomsKey, setHasTomsKey] = useState(false)
  const [tomIsFree, setTomIsFree] = useState(false)
  const [joePlaying, setJoePlaying] = useState(false)
  const [paulClicked, setPaulClicked] = useState(false)
  const [paulPlaying, setPaulPlaying ] = useState(false)
  const [armourClicked, setArmourClicked] = useState(false)



  // Locations are: 1 for basement, 2 for kitchen, 3 for garden
  const [playerLocation, setPlayerLocation] = useState(0)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start'})
  },[logs])

  
  return (
    <div className= "whole-screen">


      <AppContext.Provider value={{leaderboard, setLeaderboard, userName, setUserName, pouch, setPouch, playerLocation, setPlayerLocation, logs, setLogs, hasBook, setHasBook, isPadlockSolved, setPadlockSolved, doorOneOpen, setDoorOneOpen, hasBroom, setHasBroom, hasTurnedOnPower, setHasTurnedOnPower, light1, setLight1, light2, setLight2, light3, setLight3, isSafeSolved, setSafeSolved, hasPaper1, setHasPaper1, hasPaper2, setHasPaper2, hasPaper3, setHasPaper3, hasPaper4, setHasPaper4, hasPaper5, setHasPaper5, hasRock, setHasRock, safeAppears, setSafeAppears, isSafeClicked, setSafeClicked, isWindowBroken, setIsWindowBroken, savedMinutes, setSavedMinutes, savedSeconds, setSavedSeconds, setFinalTime, finalTime, hasShovel, setHasShovel, chestUnlocked, setChestUnlocked, chestOpen, setChestOpen, hasDetonator, setHasDetonator, hasTnt, setHasTnt, hasChestKey, setHasChestKey,  isHoleDug, setIsHoleDug, hasBone, setHasBone, isTrapLaid, setIsTrapLaid, radioPlaying, setRadioPlaying, showPlayButton, setShowPlayButton, hasBellRung, setHasBellRung, isKillerDefeated, setIsKillerDefeated, hasBlueprint, setHasBlueprint, detonatorAudioPlayed, setDetonatorAudioPlayed, hasTomsKey, setHasTomsKey, hasKeyOne, setHasKeyOne, passwordCorrect, setPasswordCorrect, tomIsFree, setTomIsFree, joePlaying, setJoePlaying, paulClicked, setPaulClicked, paulPlaying, setPaulPlaying, armourClicked, setArmourClicked }} >

 
        <div className='game-window'>
          <div className='game-background'>
            {playerLocation === 0 && <LevelZero />}
            {playerLocation === 1 && <LevelOne />}
            {playerLocation === 2 && <LevelTwo />}
            {playerLocation === 3 && <LevelThree />}
            {playerLocation === 4 && <GameComplete />}
            {playerLocation === 5 && <Leaderboard />}
          </div>
          {(playerLocation === 1 || playerLocation === 2 || playerLocation === 3 ) && <div className='bottom-ui'>
            <div>
              <MyStopwatch />
              <TimerLogo />
            </div>
            <div className = "text-interface">
              <TextInterface logs={logs}/>
              <div ref={messagesEnd} style={{height: "20px"}}></div>
            </div>

            <div className ='pouch'>
              <Pouch />
            </div>
          </div>}
      </div>
          
      </AppContext.Provider>

      <audio preload="auto">
        <source src={accessSafe}></source>
        <source src={AppThemeTune}></source>
        <source src={boneSFX}></source>
        <source src={book}></source>
        <source src={broomSFX}></source>
        <source src={cellDoor}></source>
        <source src={closedChest}></source>
        <source src={correctInput}></source>
        <source src={detonate}></source>
        <source src={diggingSFX}></source>
        <source src={dinnerBellSFX}></source>
        <source src={dirtSFX}></source>
        <source src={dogSnarlSFX}></source>
        <source src={electricHum}></source>
        <source src={grab}></source>
        <source src={gulpSFX}></source>
        <source src={hey}></source>
        <source src={HeyJoe}></source>
        <source src={keysJingle}></source>
        <source src={lightSwitch}></source>
        <source src={lockedDoor}></source>
        <source src={openChest}></source>
        <source src={openDoor}></source>
        <source src={padlock}></source>
        <source src={paperCrumpuling}></source>
        <source src={PaulsTongue}></source>
        <source src={ping}></source>
        <source src={powerSwitch}></source>
        <source src={radioone}></source>
        <source src={rockSFX}></source>
        <source src={shovel}></source>
        <source src={snoringSFX}></source>
        <source src={TomAndJerryThemeAcapella}></source>
        <source src={unfurlingScrollSFX}></source>
        <source src={windowBreaking}></source>
        <source src={wrongInput}></source>
      </audio>
    </div>
  )


}

export default App;
