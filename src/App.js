import React, { createContext, useState } from 'react'
import  Hoc  from './theam-Togler/Hoc'
// import { MainTheamButton } from './theam-Togler/MainTheamButton'
// import { Page } from './theam-Togler/Page'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './Routers/Pages/Home'
import { Profile } from './Routers/Pages/Profile'
import { Header } from './Routers/Header'
import { Details } from './Routers/details/Details'
import { Myorder } from './Routers/Pages/Profile/Myorder'
import { Myaddress } from './Routers/Pages/Profile/Myaddress'
import { Mywallet } from './Routers/Pages/Profile/Mywallet'
import { Login } from './Routers/Login/Login'
import { AuthContext } from './Routers/authContext/AuthContext'
import RequireLogin from './Routers/Login/RequireLogin'
import { Game } from './Routers/Pages/Game/Game'
import WakeAmoleConsole from './Routers/Pages/Game/wake a mole/console/WakeAmoleConsole'
import StartMenu from './Routers/Pages/Game/wake a mole/startmenu/StartMenu'
import StopWatch from './ref/StopWatch'
// import UseCallback from './useCallback/UseCallback'
// import { ParentUseMemo } from './UseMemo/ParentUseMemo'



export const App = () => {

  

  const [theam, setTheam] = useState('light')
  return (
    <>

      {/* <Hoc val={{ theam, setTheam }}>
        <Page />
        <MainTheamButton />
      </Hoc> */}


      <AuthContext>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={ <Game/>}/>
          <Route path='/stopwatch' element={<StopWatch/>}/>
          <Route path='/wakeAmoleConsole' element={<WakeAmoleConsole/>} />
          <Route path='/startmenu' element={<StartMenu/>}/>
          <Route path='/profile' element={<RequireLogin> <Profile/></RequireLogin>}>
            <Route path='order' element={<Myorder/>}/>
            <Route path='address' element={<Myaddress/>}/>
            <Route path='wallet' element={<Mywallet/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='id/:id' element={<Details/>}/>
          <Route path='*' element={<div>Invalid ! Element...</div>}/>

        </Routes>
      </BrowserRouter>
      </AuthContext>


      {/* <StopWatch/> */}
      {/* <UseCallback/> */}
      <br/><br/>
      {/* <ParentUseMemo/> */}

    </>
  )
}
