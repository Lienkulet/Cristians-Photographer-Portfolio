import React from 'react'
import styles from './ServiceCardSmall.module.css'
import Image from 'next/image'

const ServiceCardSmall = ({ title, imgUrl = '/getintouch.avif' }) => {
    return (
      <article className={styles.cardWrapper}>
        <Image
          src={imgUrl}
          alt={title}
          className={styles.cardImage}
          width={1406}
          height={197}
        />
        <footer className={styles.footerCard}>
          <h2>{title}</h2>
        </footer>
      </article>
  )
}

export default ServiceCardSmall