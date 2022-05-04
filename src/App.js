// import logo from './logo.svg';

import { useState, useRef, useEffect } from 'react'
import { LevelOne } from './components/levels/LevelOne'
import { LevelTwo } from './components/levels/LevelTwo'
import { Pouch } from './components/Pouch'
import TextInterface from './components/TextInterface'



import './App.css';

function App() {
  const messagesEnd = useRef(null)

  const [logs, setLogs] = useState([<p>message1</p>, <p>message2</p>])
  const [pouchItems, setPouchItems] = useState([])
  const [levelOneComplete, setLevelOneComplete] = useState(false)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth"})
  })
  
  return (
    <div className= "center">
      <div className='game-interface'>
        {!levelOneComplete && <LevelOne setLevelOneComplete={setLevelOneComplete} logs={logs} setLogs={setLogs} pouchItems={pouchItems} setPouchItems={setPouchItems}/>}
        {levelOneComplete && <LevelTwo />}
      </div>
      <div className = "text-interface">
        <TextInterface logs={logs}/>
        <div ref={messagesEnd} style={{height: "20px"}}></div>
      </div>
      <div className="pouch">
        <Pouch pouchItems={pouchItems}/>
      </div>
    </div>
  )


}

export default App;
