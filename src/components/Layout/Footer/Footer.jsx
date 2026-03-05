import React from 'react'
import Container from '../../UI/Container/Container'
import styles from './Footer.module.css'
import Link from 'next/link'
import FacebookIcon from '@/components/Icons/FacebookIcon'
import InstagramIcon from '@/components/Icons/InstagramIcon'
import TikTokIcon from '@/components/Icons/TikTokIcon'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerHead}>
          <h1>CRISTIAN STUDIO</h1>
        </div>
        <div className={styles.linksWrapper}>
        <nav className={`${styles.links} ${styles.pageLinks}`}>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/gallery'}>Gallery</Link>
          <Link href={'/services'}>Services</Link>
          <Link href={'/prie'}>Price</Link>
          <Link href={'/contact'}>Contact</Link>
        </nav>
        <ul className={`${styles.links} ${styles.socialLinks}`}>
          <Link href={'/'}><FacebookIcon /></Link>
          <Link href={'/'}><InstagramIcon /></Link>
          <Link href={'/'}><TikTokIcon /></Link>
        </ul>
        </div>

      </Container>
    </footer>
  )
}

export default Footer
