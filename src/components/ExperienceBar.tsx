import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContex';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <div className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}/>
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience}xp</span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </div>
    );
}