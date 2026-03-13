/**
 * ProjectGallery.tsx — Swiper thumbs gallery carousel for the project detail page.
 * Renders a main image swiper with looping navigation and a thumbnail strip below.
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
  screenshots: string[]
  title: string
}

/* Resolve a screenshot src: prepend BASE_URL for relative paths, pass absolute URLs through */
const resolveSrc = (src: string) =>
  src.startsWith('http') ? src : `${import.meta.env.BASE_URL}${src}`

const ProjectGallery = ({ screenshots, title }: Props) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

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
        {screenshots.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={resolveSrc(src)}
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
        {screenshots.map((src, i) => (
          <SwiperSlide key={i} className={styles.thumbSlide}>
            <img
              src={resolveSrc(src)}
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
