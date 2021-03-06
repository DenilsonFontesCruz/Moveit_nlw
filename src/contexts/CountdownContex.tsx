import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContex";

interface CountdownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountdown: () => void,
    resetCountdown: () => void,
}

interface CountdownProviderProps {
    children: ReactNode
}

let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.5 * 60) 
    const [isActive, setActive] = useState(false)
    const [hasFinished, setFinish] = useState(false)
    
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function startCountdown() {
        setActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setActive(false)
        setFinish(false)
        setTime(0.5 * 60)
    }
    
    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if(isActive && time === 0) {
            setFinish(true)
            setActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <CountdownContext.Provider value={{ 
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}