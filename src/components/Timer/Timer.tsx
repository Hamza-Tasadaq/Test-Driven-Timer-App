import React, { useState } from 'react'
import Button from '../Button/Button'
import Display from '../Display/Display'
import './Timer.css'
import { Time } from '../../types/types'

function Timer() {

    const [time, setTime] = useState<Time>({
        seconds: 0,
        minutes: 0,
        hours: 0
    })


    const [interv, setInterv] = useState<NodeJS.Timeout | any>()

    const [startButton, setStartButton] = useState<boolean>(true)
    const [stopButton, setStopButton] = useState<boolean>(true)


    let sec = time.seconds
    let min = time.minutes
    let hour = time.hours


    const timer = () => {
        sec++
        if (sec === 60) {
            min++
            sec = 0
        }
        if (min === 60) {
            hour++
            min = 0
        }

        const temp = {
            seconds: sec,
            minutes: min,
            hours: hour
        }
        setTime(temp)
    }

    const start = () => {

        setInterv(setInterval(() => {
            timer()
        }, 1000))


        setStartButton(false)
    }

    const stop = () => {
        clearInterval(interv)

        setStopButton(false)
    }

    const resume = () => {
        setInterv(setInterval(timer, 1000))

        const temp = {
            seconds: sec,
            minutes: min,
            hours: hour
        }

        setTime(temp)
        setStopButton(true)
    }

    const reset = () => {
        clearInterval(interv)

        const temp = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }

        setTime(temp)

        setStartButton(true)
    }

    return (
        <>
            <h1 className="heading">Timer App</h1>

            <div className="main">
                <div className="main-container">
                    <Display
                        seconds={time.seconds}
                        minutes={time.minutes}
                        hour={time.hours}
                    />
                    <Button
                        startButton={startButton}
                        stopButton={stopButton}
                        start={start}
                        stop={stop}
                        resume={resume}
                        reset={reset}
                    />
                </div>
            </div>
        </>
    )
}

export default Timer
