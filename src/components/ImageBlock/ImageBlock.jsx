import React from 'react'
import styles from './ImageBlock.module.css'
import Image from 'next/image'

const ImageBlock = ({
  imgUlrs = ['/event.avif', '/event.avif', '/event.avif', '/event.avif'],
  imgUrls,
  left = true,
}) => {
  const images = imgUrls ?? imgUlrs
  const heights = left ? [533, 363, 363, 533] : [363, 533, 533, 363]

  return (
    <div className={styles.imgWrapper}>
      <div className={styles.block}>
        <Image src={images[0]} alt="Gallery image 1" width={693} height={heights[0]} />
        <Image src={images[1]} alt="Gallery image 2" width={693} height={heights[1]} />
      </div>
      <div className={styles.block}>
        <Image src={images[2]} alt="Gallery image 3" width={693} height={heights[2]} />
        <Image src={images[3]} alt="Gallery image 4" width={693} height={heights[3]} />
      </div>
    </div>
  )
}

export default ImageBlock
