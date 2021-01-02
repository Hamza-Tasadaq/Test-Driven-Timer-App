export type Time = {
    seconds: number
    minutes: number
    hours: number
}

export type displayProps = {
    seconds: number
    minutes: number
    hour: number
}

export type buttonProps = {
    startButton: boolean
    stopButton: boolean
    start: () => void
    stop: () => void
    resume: () => void
    reset: () => void
}
