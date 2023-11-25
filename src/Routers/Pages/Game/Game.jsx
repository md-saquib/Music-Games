import React from 'react'
import {useNavigate} from 'react-router-dom'
import DoubleDicer from './doubleDicer/DoubleDicer'
import Snake from './snake/Snake'
import TicTacToe from './tic tac toe/TicTacToe'

import WakeAmole from './wake a mole/WakeAmole'

export const Game = () => {

  const navigate =useNavigate();
  return (
  <>
  <div className="container">
    <div  className="md-row-cols row ">
    <div onClick={()=> navigate('/startmenu')} className="col"><WakeAmole/></div>
    <div className="col"><TicTacToe/></div>
    <div className="col"><DoubleDicer/></div>
    <div className="col"><Snake/></div>
    </div>
  </div>
  </>
  )
}
