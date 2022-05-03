// import logo from './logo.svg';

import { useState, useRef, useEffect } from 'react'
import { LevelOne } from './components/LevelOne'
import { LevelTwo } from './components/LevelTwo'
import TextInterface from './components/TextInterface'



import './App.css';

function App() {
  const messagesEnd = useRef(null)

  const [logs, setLogs] = useState([<p>message1</p>, <p>message2</p>])
  const [levelOneComplete, setLevelOneComplete] = useState(false)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth"})
  })
  
  return (
    <div className= "center">
      <div className='game-interface'>
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
