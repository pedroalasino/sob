'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

// Poné tu foto en public/portfolio/contacto.jpg. Si no existe, se ve el degradado.
const PHOTO = '/portfolio/contacto.jpg'

export function ContactParallax() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  const whatsappHref = profile.whatsapp ? `https://wa.me/${profile.whatsapp}` : null

  return (
    <section
      ref={ref}
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="relative isolate flex min-h-dvh items-center overflow-hidden"
    >
      <motion.div
        aria-hidden
        style={{
          y: reduceMotion ? 0 : y,
          backgroundImage: `linear-gradient(to bottom, rgb(15 23 42 / 0.55), rgb(15 23 42 / 0.85)), url(${PHOTO}), linear-gradient(135deg, #1e3a8a, #0f172a 60%, #7c2d12)`,
        }}
        className="absolute inset-x-0 -top-[20%] -z-10 h-[140%] bg-cover bg-center"
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-24 text-white sm:px-8">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-orange-300">Contacto</p>
        <h2 id="contacto-titulo" className="mt-3 max-w-2xl font-heading text-4xl font-bold text-balance sm:text-6xl">
          ¿Tenés una idea? Hagámosla software.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Contame qué necesitás y te respondo con una propuesta concreta.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-white px-6 font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Mail className="size-5" aria-hidden />
            {profile.email}
          </a>
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-white/40 px-6 font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle className="size-5" aria-hidden />
              WhatsApp
            </a>
          )}
        </div>

        <ul className="mt-12 flex flex-wrap gap-6">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-white/80 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {s.label}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
