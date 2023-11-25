import React, { useMemo, useState } from 'react'
// import { userinfo } from '../Routers/authContext/AuthContext'
import ChildUseMemo from './ChildUseMemo'

export const ParentUseMemo = () => {
    const [todo,setTodo] = useState(0)
    const [username,setUserName] = useState('dhoka')

    let userinfo ={
        name:username,
        role:'topebaj'
    }

    const memoized = useMemo(()=>{
        return userinfo
    },[])

    console.log('Render Paren UseMemo');
  return (
   <>
    <div>ParentUseMemo</div>

        <p> Todo :{todo}</p>
        <button onClick={()=>setTodo(todo+1)}>Increse</button>
        <p>Name : {username}</p>
        <button onClick={()=>setUserName('saquib')}>Change Name</button>
        <ChildUseMemo user={memoized} />
   </>
  )
}
