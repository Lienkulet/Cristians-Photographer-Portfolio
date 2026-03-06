import PagesHero from '@/components/Sections/PagesHero/PagesHero'
import React from 'react'

const page = () => {
  return (
    <main>
      <PagesHero
        title='ABOUT US'
        subtitle="At Cristian Studio, we are more than just photographers; we are storytellers dedicated to capturing life's most precious moments. With a passion for creativity and a commitment to excellence, we strive to provide our clients with stunning images that they will cherish for a lifetime."
        imgUrl='/about/aboutus.avif'
      />
      <PagesHero
        title='Meet Our Team'
        subtitle="At Cristian Studio, our team is comprised of talented individuals who are passionate about photography and dedicated to delivering exceptional results. Get to know the faces behind the lens:"
        imgUrl=''
      />
    </main>
  )
}

export default page