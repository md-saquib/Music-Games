import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GiPartyPopper } from "react-icons/gi";
import WakeAmoleConsole from '../console/WakeAmoleConsole';

const StartMenu = () => {

  const navigate = useNavigate();
  const [start, setstart] = useState(false);
  const [countdown, setcountdown] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreboard, setscorebord] = useState(false);
  const [playername, setplayername] = useState('');


  const startbutton = () => {
    setstart(!start)
    setcountdown(!countdown)

  }
  const playagain = () => {
    setscorebord(!scoreboard)
    setstart(!start)
    setcountdown(!countdown)
    setScore(0)


  }
  // const playername =(e)=>{

  // }
  return (
    <>

      {scoreboard ?
        <div className="scoreboard">
          <div className="team">
            <h2>Congratulation <GiPartyPopper /></h2>
            <h2>{playername}</h2>
            <p>Score: {score}</p>
            <button className='replaybutton' onClick={() => playagain()}>Play Again</button>
            <button className='replaybutton' onClick={() => navigate('/game')}>Quite</button>
          </div>
        </div>
        : start ? <WakeAmoleConsole states={{ start, setstart, countdown, setcountdown, score, setScore, playername, scoreboard, setscorebord }} /> :
          <div className="container startmenu">

            <h2>Welcome To Wake A Mole Game </h2>
            <input type="text" name="" className='form-control' required
              id="" placeholder=' Enter Player Name ...' onChange={(e) => setplayername(e.target.value)} />
            <button className='btn btn-primary fw-bold' onClick={() => startbutton()}>Start Game</button>

          </div>
      }
    </>
  )
}

export default StartMenu