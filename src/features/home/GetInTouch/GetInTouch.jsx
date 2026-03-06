import React from 'react'
import styles from './GetInTouch.module.css'
import Container from '@/components/UI/Container/Container'
import Image from 'next/image'

const GetInTouch = () => {
  return (
    <section className={styles.getInTouch}>
      <Container>
        <div className={styles.row}>
          <Image src={'/home/getintouch.avif'} alt='Get In Touch Image' width={380} height={407} />
          <div className={styles.leftBlock}>
            <h2>We are a dedicated photography <br /> studio committed to capturing </h2>
            <h2>beautiful moments in your life with <br /> sincerity and authenticity. </h2>
            <button className={styles.btn}>GET IN TOUCH</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GetInTouch