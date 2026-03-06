import PagesHero from '@/components/Sections/PagesHero/PagesHero'
import ContactInfoCards from '@/components/ContactInfoCards/ContactInfoCards'
import ContactForm from '@/components/ContactForm/ContactForm'
import Container from '@/components/UI/Container/Container'
import React from 'react'
import styles from './page.module.css'

const page = () => {
  const infoItems = [
    {
      icon: 'email',
      title: 'Email',
      subtitle: 'Our friendly team is here to help.',
      type: 'link',
      href: 'mailto:hello@cristian.com',
      value: 'hello@cristian.com',
    },
    {
      icon: 'office',
      title: 'Office',
      subtitle: 'Come say hello at our office HQ.',
      type: 'address',
      valueLine1: 'str 1938 August Chisinau',
      valueLine2: 'iHub',
    },
    {
      icon: 'phone',
      title: 'Phone',
      subtitle: 'Mon-Fri from 8am to 5pm.',
      type: 'link',
      href: 'tel:+373123123123',
      value: '+373 000-000-00',
    },
  ]

  return (
    <main>
      <PagesHero
        title='CONTACT US'
        subtitle="We're excited to hear from you! Whether you have questions about our photography services, want to inquire about booking a session, or simply want to say hello, we're here to help. You can reach us through the following channels:"
        imgUrl='/contactus/contactus.avif'
      />
      <section className={styles.contactSection}>
        <Container>
          <div className={styles.contactLayout}>
            <ContactInfoCards items={infoItems} stacked />
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  )
}

export default page
