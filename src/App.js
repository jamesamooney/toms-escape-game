// import logo from './logo.svg';

import { useState, useRef, useEffect, } from 'react'
import { AppContext } from './AppContext'
import { MyStopwatch } from './components/Stopwatch'
import { LevelOne } from './components/levels/LevelOne'
import { LevelTwo } from './components/levels/LevelTwo'
import { TextInterface } from './components/TextInterface'
import { Pouch } from './components/Pouch'



import './App.css';

function App() {
  const messagesEnd = useRef(null)
  
  const [logs, setLogs] = useState([<p>Oh no! You've been locked in the dungeon with Tom! Look around you to find something that might help you escape!</p>])
  const [pouch, setPouch] = useState([])
  const [hasBook, setHasBook] = useState(false)
  const [hasBroom, setHasBroom] = useState(false)
  const [isPadlockSolved, setPadlockSolved] = useState(false)
  const [doorOneOpen, setDoorOneOpen] = useState(false)
  const [hasTurnedOnPower, setHasTurnedOnPower] = useState(false)

  // Locations are: 1 for basement, 2 for kitchen, 3 for garden
  const [playerLocation, setPlayerLocation] = useState(1)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth"})
  })
  

  return (
    <div className= "center">
      <AppContext.Provider value={{pouch, setPouch, logs, setLogs, hasBook, setHasBook, isPadlockSolved, setPadlockSolved, doorOneOpen, setDoorOneOpen, hasBroom, setHasBroom, hasTurnedOnPower, setHasTurnedOnPower}} >
      <div className='game-interface'>
        <MyStopwatch />
        {playerLocation === 1 && <LevelOne
          setPlayerLocation={setPlayerLocation}
          logs={logs}
          setLogs={setLogs}
          />}
        {playerLocation === 2 && <LevelTwo
          setPlayerLocation={setPlayerLocation}
          logs={logs}
          setLogs={setLogs}
        />}
      </div>
      <div className = "text-interface">
        <TextInterface logs={logs}/>
        <div ref={messagesEnd} style={{height: "20px"}}></div>
      </div>
      <div className ='pouch'>
        <Pouch />
      </div>
      </AppContext.Provider>
    </div>
  )


}

export default App;
