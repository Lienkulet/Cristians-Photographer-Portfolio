import TitleHero from '@/components/Sections/TitleHero/TitleHero'
import Container from '@/components/UI/Container/Container'
import React from 'react'
import styles from './Services.module.css'
import ServiceCardBig from '@/components/ServiceCardBig/ServiceCardBig'
const Services = () => {
  return (
    <section>
      <Container className={styles.wrapper}>
        <div className={styles.wrapper}>
          <TitleHero 
            title='OUR SERVICES' 
            subtitle='We are a dedicated photography studio committed to capturing beautiful moments in 
            your life with sincerity and authenticity. ' 
          />
          <div className={styles.servicesWrapper}>
            <ServiceCardBig
              title={'Wedding Photography'}
              body='Let us capture the most precious moments of your life beautifully and memorably. 
                From the wedding ceremony to the reception party,ready to immortalize every special 
                detail.'
                imgUrl='/home/services/wedding.avif'
            />
            <ServiceCardBig
              title={'Family Portraits'}
              body='Family time is priceless. With a blend of photography skills and warmth, we will
                create family portraits that you will cherish forever.'
                imgUrl='/home/services/family.avif'
            />
            <ServiceCardBig
              title={'Product Photography'}
              body='If you have a business or product to promote, we provide professional product
               photography services to enhance your visual appeal.'
               imgUrl='/home/services/product.avif'
            />
            <ServiceCardBig
              title={'Personality Portraits'}
              body='Let your personality shine through unique and soulful portraits. We will work with 
              you to capture your essence and uniqueness in every image.'
              imgUrl='/home/services/personality.avif'

            />
            <ServiceCardBig
              title={'Event Photography'}
              body='From corporate events to social gatherings, we will ensure that your precious moments
              are captured perfectly, creating everlasting memories.'
              imgUrl='/home/services/event.avif'
            />
            <ServiceCardBig
              title={'Special Photo Sessions'}
              body='Do you have a specific creative idea in mind? We are ready to listen to your vision 
              and turn it into reality in a special and personalized photo session.'
              imgUrl='/home/services/special.avif'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services