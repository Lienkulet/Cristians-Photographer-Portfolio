import PricesPlan from '@/components/Sections/PricesPlan/PricesPlan'
import FaqSection from '@/components/Sections/Faq/FaqSection'
import React from 'react'
import PagesHero from '@/components/Sections/PagesHero/PagesHero'
import PriceCardGrid from '@/components/PriceCardGrid.jsx/PriceCardGrid'

const page = () => {
    return (
        <main>
            <PagesHero
                title='PRICE PLANS'
                subtitle='At Cristian Studio, we offer flexible price plans to accommodate your photography needs. Choose from our range of packages or customize a plan tailored to your specific requirements. Below are our standard price plans:'
                imgUrl=''
            />
            <div style={{maxWidth: '1216px', justifySelf: 'center'}}>
                <PriceCardGrid />
            </div>
            <FaqSection />
        </main>
    )
}

export default page
