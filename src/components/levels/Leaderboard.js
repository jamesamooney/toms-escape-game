import '../../App.css';
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

export const Leaderboard = ({ }) => {
  
  const { leaderboard, setLeaderboard } = useContext(AppContext);
  let formattedScores = leaderboard.map(item => {
    return (
      <div className='leaderboard-score'>
        <p id="score-text">{item.name} 
        {item.minutes}:
        {item.seconds}</p>
      </div>
    )
  })
  

  return (
    <div>
      <h1>Leaderboard</h1>
      {formattedScores}
      <br/>
      <br/>
    </div>
  )
  
}