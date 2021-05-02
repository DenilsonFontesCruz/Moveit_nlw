import { useState, useEffect, Fragment, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContex'
import { CountdownContext } from '../contexts/CountdownContex';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    const { 
        minutes, seconds, hasFinished,
        isActive, resetCountdown, startCountdown
    } = useContext(CountdownContext)

    const [firstMinutes, lastMinutes] = String(minutes).padStart(2, '0').split('')
    const [firstSeconds, lastSeconds] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{firstMinutes}</span>
                    <span>{lastMinutes}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{firstSeconds}</span>
                    <span>{lastSeconds}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                disabled
                type="button" 
                className={styles.countdownButton}
                >
                    Ciclo Encerrado
                </button>
            )
            : (
                <>
                { isActive 
                    ? (
                        <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}
                        >
                            Cancelar Ciclo
                        </button>
                    )
                    :(
                        <button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}
                        >
                            Iniciar Ciclo
                        </button>
                    )}
                </>
            )}

        </div>
    )
}
