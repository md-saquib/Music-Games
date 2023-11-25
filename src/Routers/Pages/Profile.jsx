import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { userinfo } from '../authContext/AuthContext'

export const Profile = () => {
  const navigate = useNavigate();
  const loggedinUser = useContext(userinfo);
  return (
    <>
      <header>
        <div>
          <p><NavLink to='order'>Myorder</NavLink></p>
          <p><NavLink to='wallet'>Mywallet</NavLink></p>
          <p><NavLink to='address'>MyAddress</NavLink></p>
          <p><button onClick={() => {
            loggedinUser.setfirst({})
            navigate('/')
          }}>Log out</button></p>
        </div>
      </header>

      <Outlet />

    </>
  )
}
