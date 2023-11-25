import React, { useContext } from 'react'
import { ThemeProvider } from './Hoc';
import { TheamBox } from './TheamBox'


export const Page = () => {
    const toglerTheme = useContext(ThemeProvider);
  return (
    <>
    <div className={`border rounded-2 bg-${toglerTheme.theam} `} style={{width:'50%',height:'75vh'}}> 
        <TheamBox/>
        
        </div>
    </>
  )
}
