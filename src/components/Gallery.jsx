import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { GALLERY_IMAGES } from '../data/content'
import { fadeUp } from '../motion/variants'
import { Lightbox } from './Lightbox'
import { SectionHeading, SectionWrapper } from './SectionWrapper'

function GalleryItem({ image, index, onOpen, featured = false }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 25 })
  const springY = useSpring(y, { stiffness: 200, damping: 25 })
  const imageX = useTransform(springX, [-0.5, 0.5], ['-3%', '3%'])
  const imageY = useTransform(springY, [-0.5, 0.5], ['-3%', '3%'])

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index * 0.05}
      whileHover={{ y: -8 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(image)}
      className={`group relative overflow-hidden rounded-3xl text-left cinematic-shadow focus-visible:outline-gold ${
        featured
          ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[520px]'
          : 'aspect-[4/3]'
      }`}
      aria-label={`Open gallery image: ${image.mood}`}
    >
      <motion.div style={{ x: imageX, y: imageY }} className="absolute inset-[-8%]">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover brightness-[0.88] saturate-[0.82] transition duration-700 group-hover:brightness-100 group-hover:saturate-100"
          loading="lazy"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/15 to-gold/5 transition group-hover:from-void/90" />
      <div className="absolute inset-0 flex items-end p-6 md:p-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{image.mood}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-pearl/60 opacity-0 transition group-hover:opacity-100">
            {image.alt}
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-pearl/40 opacity-0 transition group-hover:opacity-100">
            View full image
          </p>
        </div>
      </div>
      <div className="absolute inset-0 border border-transparent transition group-hover:border-gold/30" />
    </motion.button>
  )
}

export function Gallery() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <SectionWrapper id="gallery" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="gallery"
          eyebrow="Visual Archive"
          title="Gallery"
          subtitle="Cinematic frames from stadium lights to trophy nights — a consistent editorial grade across every image."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image, i) => (
            <GalleryItem
              key={image.mood}
              image={image}
              index={i}
              featured={i === 0}
              onOpen={setActiveImage}
            />
          ))}
        </div>
      </div>

      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </SectionWrapper>
  )
}
