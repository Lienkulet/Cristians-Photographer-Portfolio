import PagesHero from '@/components/Sections/PagesHero/PagesHero'
import ServiceCardSmall from '@/components/ServiceCardSmall/ServiceCardSmall'
import React from 'react'
import styles from './page.module.css'

const page = () => {
  return (
    <main>
      <PagesHero
        title='OUR SERVICES'
        subtitle="At Cristian Studio, we offer a comprehensive range of photography services to meet your diverse needs and capture life's most precious moments. Explore our offerings below:"
        imgUrl='/services/services.jpg'
      />
      <section style={{ justifySelf: 'center', paddingBottom: '96px'}}>
        <ServiceCardSmall title='Wedding Photography' imgUrl='/services/service1.avif' />
        <ServiceCardSmall title='Family Portraits' imgUrl='/services/service2.avif' />
        <ServiceCardSmall title='Product Photography' imgUrl='/services/service3.avif' />
        <ServiceCardSmall title='Personality Portraits' imgUrl='/services/service4.avif' />
        <ServiceCardSmall title='Event Photography' imgUrl='/services/service5.avif' />
        <ServiceCardSmall title='Special Photo Sessions' imgUrl='/services/service6.avif' />
      </section>

    </main>
  )
}

export default page