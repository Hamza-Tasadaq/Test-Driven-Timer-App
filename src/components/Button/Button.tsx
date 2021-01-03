import React from 'react'
import './Button.css'
import { buttonProps } from '../../types/types'

const Button: React.FC<buttonProps> = ({ startButton, stopButton, start, stop, resume, reset }) => {
    return (
        <>
            <div className="button-container">
                {
                    startButton ?
                        <button onClick={start} data-testid="Start" className="start">Start</button> :
                        <>
                            {
                                stopButton ?
                                    <button onClick={stop} data-testid="Stop" className="stop">Stop</button> :
                                    <button onClick={resume} data-testid="Resume" className="resume">Resume</button>
                            }
                            <button onClick={reset} data-testid="Reset" className="reset">Reset</button>
                        </>
                }
            </div>
        </>
    )
}

export default Button
