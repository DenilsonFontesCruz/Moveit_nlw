import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContex'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="./icons/body.svg" alt="User-Image" />
            <div>
                <strong>Denilson Fontes</strong>
                <p>
                    <img src="icons/level.svg" alt="level-icon" />
                    Level: {level}
                </p>
            </div>
        </div>
    )
}