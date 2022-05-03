// import logo from './logo.svg';

import { useState, useRef, useEffect } from 'react'
import { MyStopwatch } from './components/Stopwatch'
import { LevelOne } from './components/levels/LevelOne'
import { LevelTwo } from './components/levels/LevelTwo'
import TextInterface from './components/TextInterface'



import './App.css';

function App() {
  const messagesEnd = useRef(null)

  const [logs, setLogs] = useState([<p>Oh no! You've been locked in the dungeon with Tom! Look around you to find something that might help you escape!</p>])

  const [levelOneComplete, setLevelOneComplete] = useState(false)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth"})
  })
  
  return (
    <div className= "center">
      <div className='game-interface'>
        <MyStopwatch />
        {!levelOneComplete && <LevelOne setLevelOneComplete={setLevelOneComplete} logs={logs} setLogs={setLogs}/>}
        {levelOneComplete && <LevelTwo />}
      </div>
      <div className = "text-interface">
        <TextInterface logs={logs}/>
        <div ref={messagesEnd} style={{height: "20px"}}></div>
      </div>
    </div>
  )


}

export default App;
