"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/services', label: 'Services' },
    { href: '/prie', label: 'Price' },
    { href: '/contact', label: 'Contact' },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav className={styles.navbar}>
      <Link href={'/'} className={styles.logo}>
        Cristian
      </Link>
      <div className={styles.leftNav}>
        <ul className={`${styles.links} ${styles.pageLinks}`}>
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
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
        <Link href={'/contact'} className={styles.btn}>
          GET IN TOUCH
        </Link>
      </div>
      <div className={styles.mobileMenuWrap}>
        <button
          type="button"
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.mobileMenuBtnOpen : ''}`}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span className={styles.mobileMenuIcon} aria-hidden="true" />
        </button>
        <div
          id="mobile-nav-panel"
          className={`${styles.mobileMenuPanel} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        >
          <div className={styles.mobilePageLinks}>
            {navLinks.map((item) => (
              <Link key={`mobile-${item.href}`} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className={styles.mobileLangRow}>
            <button type="button">EN</button>
            <button type="button">RO</button>
            <button type="button">RU</button>
          </div>
          <Link href="/contact" className={styles.mobileCtaBtn} onClick={closeMobileMenu}>
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
