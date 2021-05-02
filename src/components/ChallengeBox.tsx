import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContex'
import { CountdownContext } from '../contexts/CountdownContex'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext)
    const { resetCountdown, } = useContext(CountdownContext)

    function handleChallengeSuccess() {
        completedChallenge()
        resetCountdown()
    }

    function handleChallengeFail() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                        type='button'
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSuccess}
                        >
                        Completei
                        </button>
                        <button
                        type='button'
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFail}
                        >
                        Falhei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Finalize um ciclo para receber o proximo desafio
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
            
        </div>
    )
}
