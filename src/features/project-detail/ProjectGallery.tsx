/**
 * ProjectGallery.tsx — Swiper thumbs gallery carousel for the project detail page.
 * Renders a main image swiper with looping navigation and a thumbnail strip below.
 * Falls back to placeholder images when no screenshots are provided.
 */

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'

import styles from './ProjectGallery.module.css'

interface Props {
  screenshots?: string[]
  title: string
}

/* Shown when a project has no screenshots yet */
const PLACEHOLDERS = [
  'https://picsum.photos/seed/gallery-a/1200/750',
  'https://picsum.photos/seed/gallery-b/1200/750',
  'https://picsum.photos/seed/gallery-c/1200/750',
  'https://picsum.photos/seed/gallery-d/1200/750',
]

const ProjectGallery = ({ screenshots, title }: Props) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  const images = screenshots?.length ? screenshots : PLACEHOLDERS

  return (
    <div className={styles.gallery}>
      {/* ── Main swiper ── */}
      <Swiper
        modules={[Thumbs, Autoplay]}
        onSwiper={setMainSwiper}
        loop
        speed={1200}
        autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={styles.mainSwiper}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Thumbnail strip ── */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        freeMode
        watchSlidesProgress
        slidesPerView={4}
        spaceBetween={8}
        className={styles.thumbsSwiper}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className={styles.thumbSlide}>
            <img
              src={src}
              alt={`${title} thumbnail ${i + 1}`}
              className={styles.thumbImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Nav buttons sit below thumbs, flush right ── */}
      <div className={styles.navControls}>
        <button className={styles.navBtn} aria-label="Previous" onClick={() => mainSwiper?.slidePrev()}>←</button>
        <button className={styles.navBtn} aria-label="Next" onClick={() => mainSwiper?.slideNext()}>→</button>
      </div>
    </div>
  )
}

export default ProjectGallery
