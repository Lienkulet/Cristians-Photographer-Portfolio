import React from 'react'
import styles from './PricesPlan.module.css'
import TitleHero from '../TitleHero/TitleHero'
import Container from '@/components/UI/Container/Container'
import PriceCard from '@/components/PriceCard/PriceCard'

const PricesPlan = () => {
    return (
        <section>
            <Container>
                <div className={styles.pricesWrapper}>
                    <TitleHero
                        title='Price Plans'
                        subtitle='At Kerataon Studio, we offer flexible price plans to accommodate your photography 
                needs. Choose from our range of packages or customize a plan tailored to your specific 
                requirements. Below are our standard price plans:'
                    />
                    <div className={styles.cardsGrid}>
                        <PriceCard
                            type='light'
                            price='$900'
                            title='Standard Package'
                            description='Our Standard Package Offers Comprehensive Coverage For Your Special Day With Up To 6 Hours Of Photography Or Videography.'
                            features={[
                                'Full-day coverage',
                                'Engagement shoot',
                                '300 edited digital images',
                                '12×12 wedding album',
                                'Two photographers',
                            ]}
                        />
                        <PriceCard
                            type='black'
                            price='$1200'
                            title='Premium Package'
                            description='Elevate Your Experience With Our Premium Package, Featuring Full-Day Coverage Of Up To 10 Hours By Two Photographers/Videographers.'
                            features={[
                                'Full-day coverage',
                                'One 11×14 canvas print',
                                '40 edited digital images',
                                '2-hour studio and outdoor session',
                                'Two photographers',
                            ]}
                        />
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default PricesPlan
