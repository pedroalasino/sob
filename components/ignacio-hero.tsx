'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FRAMES = [
  '/frames/ignacio-pullup/frame-01.webp',
  '/frames/ignacio-pullup/frame-02.webp',
  '/frames/ignacio-pullup/frame-03.webp',
  '/frames/ignacio-pullup/frame-04.webp',
  '/frames/ignacio-pullup/frame-05.webp',
]

// Frames were rendered on a 760x820 canvas with the pull-up bar's
// vertical center fixed at y=90px, so the character layer can be
// anchored to the bar line purely with these ratios.
const CANVAS_W = 760
const CANVAS_H = 820
const BAR_Y = 90

export default function IgnacioHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAMES.length - 1])

  const opacity0 = useTransform(frameIndex, [-1, 0, 1], [0, 1, 0], { clamp: true })
  const opacity1 = useTransform(frameIndex, [0, 1, 2], [0, 1, 0], { clamp: true })
  const opacity2 = useTransform(frameIndex, [1, 2, 3], [0, 1, 0], { clamp: true })
  const opacity3 = useTransform(frameIndex, [2, 3, 4], [0, 1, 0], { clamp: true })
  const opacity4 = useTransform(frameIndex, [3, 4, 5], [0, 1, 0], { clamp: true })
  const opacities = [opacity0, opacity1, opacity2, opacity3, opacity4]

  return (
    <section ref={sectionRef} className="ignacio-hero-scroll">
      <style>{`
        .ignacio-hero-scroll { height: 300vh; position: relative; margin-top: 134px; }
        .ignacio-hero-sticky {
          position: sticky; top: 0; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: #faf6ec;
        }
        @media (max-width: 768px) {
          .ignacio-hero-scroll { margin-top: 164px; height: 260vh; }
        }
        .ignacio-hero-inner {
          --char-h: clamp(150px, min(24vw, 30vh), 320px);
          position: relative; width: 100%; max-width: 900px; padding: 0 24px; text-align: center;
        }
        .ignacio-name {
          font-family: 'Montserrat', sans-serif; font-weight: 800;
          font-size: clamp(2rem, 7vw, 5rem); line-height: 0.98;
          letter-spacing: 0.01em; color: #1c1c1c; text-transform: uppercase; margin: 0;
        }
        .ignacio-bar-line {
          position: relative;
          width: min(88%, 620px);
          height: 4px;
          background: #2c2c2c;
          border-radius: 2px;
          margin: 40px auto 0;
          margin-bottom: calc(var(--char-h) * ${((CANVAS_H - BAR_Y) / CANVAS_H).toFixed(5)} + 20px);
        }
        .ignacio-char-layer {
          position: absolute;
          left: 50%;
          top: calc(var(--char-h) * -${(BAR_Y / CANVAS_H).toFixed(5)});
          transform: translateX(-50%);
          width: calc(var(--char-h) * ${(CANVAS_W / CANVAS_H).toFixed(5)});
          height: var(--char-h);
          pointer-events: none;
        }
        .ignacio-char-frame {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain;
        }
        .ignacio-role {
          font-family: 'Montserrat', sans-serif; font-weight: 600;
          letter-spacing: 0.35em; font-size: clamp(1rem, 2.2vw, 1.4rem);
          color: #4a4a4a; text-transform: uppercase; margin: 0;
        }
        .ignacio-scroll-hint {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          font-family: 'Montserrat', sans-serif; font-size: 0.75rem; letter-spacing: 0.2em;
          color: #9a9186; text-transform: uppercase;
        }
      `}</style>

      <div className="ignacio-hero-sticky">
        <div className="ignacio-hero-inner">
          <h1 className="ignacio-name">
            Ignacio
            <br />
            Olmedo
          </h1>

          <div className="ignacio-bar-line">
            <div className="ignacio-char-layer">
              {FRAMES.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt={i === 0 ? 'Ignacio Olmedo haciendo una dominada' : ''}
                  className="ignacio-char-frame"
                  style={{ opacity: opacities[i] }}
                  loading="eager"
                  decoding="async"
                />
              ))}
            </div>
          </div>

          <p className="ignacio-role">Nutricionista</p>
        </div>

        <span className="ignacio-scroll-hint">Scroll ↓</span>
      </div>
    </section>
  )
}
