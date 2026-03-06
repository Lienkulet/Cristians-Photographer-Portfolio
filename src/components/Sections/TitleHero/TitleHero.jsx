import React from 'react'
import styles from './TitleHero.module.css'

const TitleHero = ({ title, subtitle }) => {
    return (
        <div className={styles.heroText}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        </div>
    )
}

export default TitleHero