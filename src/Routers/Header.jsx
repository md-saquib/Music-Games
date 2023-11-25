import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userinfo } from './authContext/AuthContext'
import './Header.css'

export const Header = () => {
  const loggedinUser = useContext(userinfo);
  // console.log('header', loggedinUser)
  return (
    <>
      <header>
        <div>
          <p> <NavLink to='/'>Home</NavLink></p>
          <p> <NavLink to='/game'>Game</NavLink></p>
          <p> <NavLink to='/profile'>Profile</NavLink></p>
          <p> <NavLink to='/stopwatch'>Timer</NavLink></p>
          <p>{loggedinUser.first.userName ?  <NavLink>WelCome</NavLink> : <NavLink to='/login'>Log in </NavLink> }</p>


        </div>
      </header>
    </>
  )
}
