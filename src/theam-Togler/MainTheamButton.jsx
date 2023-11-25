import React, { useContext } from 'react'
import { ThemeProvider } from './Hoc';

export const MainTheamButton = () => {
    const toglerTheme = useContext(ThemeProvider);
    let themeName = toglerTheme.theam === 'light' ? 'dark' : 'light';

  return (
    <>
    <button className={` btn-${toglerTheme.theam} text-${themeName}`} onClick={()=>toglerTheme.setTheam(themeName)}>Click me to change {themeName} theme</button>
    </>
  )
}
