import React from 'react'
import './Display.css'
import { displayProps } from '../../types/types'

const Display: React.FC<displayProps> = ({ seconds, minutes, hour }) => {
    return (
        <div className="time-container">
            <span data-testid="hour" className="time">
                {hour}
            </span>
        &nbsp;:&nbsp;
            <span data-testid="minutes" className="time">
                {minutes}
            </span>
        &nbsp;:&nbsp;
            <span data-testid="seconds" className="time">
                {seconds}
            </span>
        </div>
    )
}

export default Display
