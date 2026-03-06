import React from 'react'
import styles from './TitleHero.module.css'

const TitleHero = ({ title, subtitle }) => {
    return (
        <section className={styles.heroText}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </section>
    )
}

export default TitleHero