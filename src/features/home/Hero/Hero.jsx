import Container from '@/components/UI/Container/Container'
import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
      <Container>
        <div className={styles.hero}>
          <h1>CRISTIAN STUDIO</h1>
          <p>Welcome to Keraton Studio! We are a dedicated photography studio committed to capturing
            beautiful moments in your life with sincerity and authenticity. At Keraton Studio, we believe
            that every moment has a unique story, and we are committed to capturing that story through our
            lens.
          </p>
          <Image src='/home/hero.png' alt='Hero Image' width={1400} height={990} />
        </div>

      </Container>
    </section>
  )
}

export default Hero