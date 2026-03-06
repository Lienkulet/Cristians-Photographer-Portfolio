import React from 'react'
import styles from './PricesPlan.module.css'
import TitleHero from '../TitleHero/TitleHero'
import Container from '@/components/UI/Container/Container'
import PriceCardGrid from '@/components/PriceCardGrid.jsx/PriceCardGrid'

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
                    <PriceCardGrid />
                </div>

            </Container>
        </section>
    )
}

export default PricesPlan
