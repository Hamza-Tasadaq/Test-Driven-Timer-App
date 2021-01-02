import React from 'react'
import './Display.css'

type Props = {
    seconds: number
    minutes: number
    hour: number
}

const Display: React.FC<Props> = ({ seconds, minutes, hour }) => {
    return (
        <div className="time-container">
            <span className="time">
                {hour}
            </span>
        &nbsp;:&nbsp;
            <span className="time">
                {minutes}
            </span>
        &nbsp;:&nbsp;
            <span className="time">
                {seconds}
            </span>
        </div>
    )
}

export default Display
