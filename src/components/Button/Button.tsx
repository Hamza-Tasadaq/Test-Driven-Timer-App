import React from 'react'

type Props = {
    startButton: boolean
    stopButton: boolean
    start: () => void
    stop: () => void
    resume: () => void
    reset: () => void
}

const Button: React.FC<Props> = ({ startButton, stopButton, start, stop, resume, reset }) => {
    return (
        <>
            <div className="button-container">
                {
                    startButton ?
                        <button onClick={start} className="start">Start</button> :
                        <>
                            {
                                stopButton ?
                                    <button onClick={stop} className="stop">Stop</button> :
                                    <button onClick={resume} className="resume">Resume</button>
                            }
                            <button onClick={reset} className="reset">Reset</button>
                        </>
                }
            </div>
        </>
    )
}

export default Button
