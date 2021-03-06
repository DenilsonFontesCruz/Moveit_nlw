import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContex'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.completeChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}