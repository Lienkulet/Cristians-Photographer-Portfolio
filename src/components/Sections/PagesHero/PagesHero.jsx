import React from 'react'
import styles from './PagesHero.module.css'
import Image from 'next/image'

const PagesHero = ({ title, subtitle, imgUrl = '' }) => {
    return (
        <section className={styles.heroText}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            {
                imgUrl? <Image src={imgUrl} alt='img' width={1216} height={858} style={{borderRadius: '12px'}} /> : null
            }

        </section>
    )
}

export default PagesHero