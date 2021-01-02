import React from 'react'
import './Display.css'
import { displayProps } from '../../types/types'

const Display: React.FC<displayProps> = ({ seconds, minutes, hour }) => {
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
