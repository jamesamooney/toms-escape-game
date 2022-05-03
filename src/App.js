// import logo from './logo.svg';

import { useState } from 'react'
import { LevelOne } from './components/LevelOne'
import { LevelTwo } from './components/LevelTwo'

import './App.css';

function App() {
  const [levelOneComplete, setLevelOneComplete] = useState(false)

  return (
    <div>
      {!levelOneComplete && <LevelOne setLevelOneComplete={setLevelOneComplete}/>}
      {levelOneComplete && <LevelTwo />}
    </div>
  )
}

export default App;
