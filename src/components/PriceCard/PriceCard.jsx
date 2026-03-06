import React from 'react'
import styles from './PriceCard.module.css'

const PriceCard = ({
  type = 'light',
  price,
  title,
  description,
  features = [],
  cta = 'GET IN TOUCH',
}) => {
  const variantClass = type === 'black' ? styles.black : styles.light

  return (
    <article className={`${styles.card} ${variantClass}`}>
      <header className={styles.head}>
        <p className={styles.price}>{price}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </header>

      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature}>
            <span className={styles.check} aria-hidden='true'>
              <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='10' cy='10' r='9' fill='currentColor' />
                <path d='M6 10.2L8.6 12.8L14 7.8' stroke='var(--check-mark)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button className={styles.ctaBtn} type='button'>
        {cta}
      </button>
    </article>
  )
}

export default PriceCard
