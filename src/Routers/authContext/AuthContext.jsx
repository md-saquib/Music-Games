import React, { createContext ,useState} from 'react'
export const userinfo = createContext()

export const AuthContext = ({children}) => {
    const [first, setfirst] = useState({})
    // console.log('authContext',first)
    return (
        <>
            <userinfo.Provider value={{first,setfirst}}>
                {children}
            </userinfo.Provider>
        </>
    )
}