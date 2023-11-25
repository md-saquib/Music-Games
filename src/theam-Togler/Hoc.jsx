import React, { createContext } from 'react'

export const ThemeProvider = createContext();

 const Hoc = ({ children, val }) => {
    return (
        <>
            <ThemeProvider.Provider value={val}>
                {children}
            </ThemeProvider.Provider>

        </>
    )
}
export default Hoc;


