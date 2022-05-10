import '../../App.css';
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

export const Leaderboard = ({ }) => {
  
  const { leaderboard, setLeaderboard } = useContext(AppContext);
  let formattedScores = leaderboard.map((item, i) => {
    return (
      <div className='leaderboard-score'>
        <div id="score-order">
        <p>{i+1}.</p>
        </div>
        <div id="score-name">
        <p>{item.name}</p>
        </div>
        <div id="score-time">
        <p>{item.time}</p>
        </div>
      </div>
    )
  })
  

  return (
    <div>
      <h1>Leaderboard</h1>
      <div className='leaderboard-score'>
        <div id="score-order">
          <p>Rank</p>
        </div>
        <div id="score-name">
          <p>Name</p>
        </div>
        <div id="score-time">
          <p>Time</p>
        </div>
      </div>

      {formattedScores}
      <br/>
      <br/>
    </div>
  )
  
}