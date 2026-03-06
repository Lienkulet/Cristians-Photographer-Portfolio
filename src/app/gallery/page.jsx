import PagesHero from '@/components/Sections/PagesHero/PagesHero'
import React from 'react'
import styles from './page.module.css'
import ImageBlock from '@/components/ImageBlock/ImageBlock'

const page = () => {
  return (
    <main>
      <PagesHero
        title='OUR GALLERY'
        subtitle='Welcome to our gallery, where moments come to life through the lens of Kerataon Studio. Browse through a curated selection of our finest photography work, showcasing the beauty, emotion, and artistry that define our craft.'
        imgUrl='/gallery/bell.avif'
      />
      <div className={styles.galleryWrapper}>

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
      </div>
    </main>
  )
}

export default page