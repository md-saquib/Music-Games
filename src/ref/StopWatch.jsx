import React, { useEffect, useRef, useState } from 'react'
import './stopwatch.css'

const StopWatch = () => {

    let [minute, setminute] = useState(0);
    const [second, setsecond] = useState(0);
    const [milisecond, setmilisecond] = useState(0)
    let [state, setState] = useState(true);
    let id = useRef();
    useEffect(() => {
        return (() => {
            clearInterval(id.current)
        })
    }, [])
    let sec = 0;
    let ms = 0;
    const increseSecond = () => {
        sec++;
        setsecond(second => second + 1)

        if (sec === 60) {
            increseMinute()
            sec = 1;
        }
        setmilisecond(0)
    }


    const increseMinute = () => {
        setsecond(0)
        setminute(minute => minute + 1)
    }


    const incresemilisecond = () => {

        ms++;
        setmilisecond(milisecond => milisecond + 1);
        if (ms === 100) {
            increseSecond();
            ms = 1;
        }
    }
    const start = () => {
        id.current = setInterval(() => {

            incresemilisecond()
        }, 10)
    }
    const stop = () => {
        clearInterval(id.current)
    }

    const reset = () => {
        setminute(0)
        stop()
        setState(true)
        setmilisecond(0)
        setsecond(0)
        ms = 0;
        sec = 0;

    }


    return (
        <>
            <div className="container">
                <div className="display">
                    <div className="screen">
                        <span className='minute'>{minute}<span className='name'> m</span></span> : <span className='second'>{second}<span className='name'> s</span> </span> : <span className='milisecond'>{milisecond}</span>
                    </div>
                </div>

                <div className="button-container">
                    <button className='reset' onClick={() => {
                        reset()
                    }}>Reset</button>
                    <button className={state ? 'start' : 'stop'} onClick={() => {
                        state ? start() : stop();
                        setState(!state)
                    }}>{state ? 'Start' : 'Stop'}</button>
                </div>

            </div>


        </>
    )
}

export default StopWatch