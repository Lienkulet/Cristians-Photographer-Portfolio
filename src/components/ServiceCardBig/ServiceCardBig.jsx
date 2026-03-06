import React from 'react'
import styles from './ServiceCardBigs.module.css'
import Image from 'next/image'

const ServiceCardBig = ({ title, body, imgUrl = '/getintouch.avif' }) => {
  return (
    <article className={styles.cardWrapper}>
      <Image
        src={imgUrl}
        alt={title}
        fill
        className={styles.cardImage}
        sizes="(max-width: 768px) 100vw, 48vw"
      />
      <footer className={styles.footerCard}>
        <h2>{title}</h2>
        <p>{body}</p>
      </footer>
    </article>
  )
}

export default ServiceCardBig
