import TitleHero from '@/components/Sections/TitleHero/TitleHero'
import Container from '@/components/UI/Container/Container'
import React from 'react'
import styles from './Gallery.module.css'
import ImageBlock from '@/components/ImageBlock/ImageBlock'

const Gallery = () => {
    return (
        <section>
            <Container>
                <div className={styles.wrapper}>
                    <TitleHero
                        title='GALLERY'
                        subtitle='Step into our gallery and immerse yourself in a visual feast of captivating 
                        images captured by Kerataon Studio. Here, we present a curated selection of our 
                        finest photographs, showcasing the beauty, emotion, and artistry that define our 
                        work.'
                    />
                </div>
                <ImageBlock
                    imgUlrs={
                        [
                            '/home/gallery/gallery1.png',
                            '/home/gallery/gallery3.png',
                            '/home/gallery/gallery2.png',
                            '/home/gallery/gallery4.png'
                        ]
                    }
                    left={true}
                />
                 <ImageBlock
                    imgUlrs={
                        [
                            '/home/gallery/gallery5.png',
                            '/home/gallery/gallery7.png',
                            '/home/gallery/gallery6.png',
                            '/home/gallery/gallery8.png'
                        ]
                    }
                    left={true}
                />
                 <ImageBlock
                    imgUlrs={
                        [
                            '/home/gallery/gallery9.png',
                            '/home/gallery/gallery11.png',
                            '/home/gallery/gallery10.png',
                            '/home/gallery/gallery12.png'
                        ]
                    }
                    left={false}
                />
            </Container>
        </section>
    )
}

export default Gallery