import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href={'/'}>
        <h2 className={styles.logo}>
          Cristian
        </h2>
      </Link>
      <div className={styles.leftNav}>
      <ul className={`${styles.links} ${styles.pageLinks}`}>
        <Link href={'/about'}>About</Link>
        <Link href={'/gallery'}>Gallery</Link>
        <Link href={'/services'}>Services</Link>
        <Link href={'/prie'}>Price</Link>
        <Link href={'/contact'}>Contact</Link>
      </ul>
        <div className={styles.langMenu}>
          <button className={styles.langBtn} type="button" aria-haspopup="true">
            EN
            <span className={styles.langCaret} aria-hidden="true">▾</span>
          </button>
          <ul className={styles.langDropdown}>
            <li><button type="button">EN</button></li>
            <li><button type="button">RO</button></li>
            <li><button type="button">RU</button></li>
          </ul>
        </div>
        <Link href={'/contact'} className={styles.btn}>GET IN TOUCH</Link>
      </div>
    </nav>
  )
}

export default Navbar
