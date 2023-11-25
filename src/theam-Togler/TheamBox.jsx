import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider } from './Hoc';

export const TheamBox = () => {
    const toglerTheme = useContext(ThemeProvider)
    const [localTheme, setLocalTeme] = useState(toglerTheme.theam);
    let theamName = localTheme === 'light' ? 'dark' : 'light'

    useEffect(() => {
        setLocalTeme(toglerTheme.theam)
    }, [toglerTheme.theam])

    return (
        <>

            <p className={`text-${theamName}`}>Theam togler</p>
            <div className={`border rounded-2 bg-${localTheme}`} style={{ width: '70%', height: '35vh' }}>
                <p className={`text-${theamName}`}>Hi this is Theam Togler</p>

                <button className={`btn-${localTheme} text-${theamName}`} onClick={() => setLocalTeme(theamName)}>Click me change to {theamName} theam</button>

            </div>

        </>
    )
}
