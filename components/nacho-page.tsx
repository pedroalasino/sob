'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { MinimalistHero } from '@/components/ui/minimalist-hero'
import { cn } from '@/lib/utils'

function Instagram({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const WHATSAPP_LINK = 'https://wa.link/27gd5m'
const INSTAGRAM_LINK = 'https://www.instagram.com/nacho.nutriciondeportiva/'

const FEATURES = [
  {
    image: '/card-alimentacion-real.png',
    title: 'Alimentación Real',
    desc: 'Planes armados con comida de verdad, según tu deporte y tu rutina. Nada de dietas genéricas.',
  },
  {
    image: '/card-planes-inteligentes.png',
    title: 'Planes Inteligentes',
    desc: 'Planes personalizados según tus objetivos, estilo de vida y necesidades.',
  },
  {
    image: '/card-rendimiento-optimo.png',
    title: 'Rendimiento Óptimo',
    desc: 'Mejorá tu rendimiento físico y mental con la nutrición adecuada para tu cuerpo.',
  },
  {
    image: '/card-resultados-reales.png',
    title: 'Resultados Reales',
    desc: 'Resultados sostenibles que se reflejan en tu cuerpo, tu salud y tu confianza.',
  },
]

function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto w-[90%] max-w-6xl">{children}</div>
    </section>
  )
}

function FitnessNutricion() {
  return (
    <Section id="servicios">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
          Fitness más Nutrición <span className="text-accent">es igual a</span> Transformación
        </h2>
        <p className="mt-4 text-muted-foreground">
          Cada plan se arma según tu deporte, tus tiempos de entrenamiento y tus objetivos
          reales.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-border bg-card p-7 text-center transition-colors duration-300 hover:border-accent"
          >
            <div className="mx-auto mb-5 size-16 overflow-hidden rounded-full ring-4 ring-accent/10 transition-all duration-300 group-hover:ring-accent/40">
              <Image
                src={feature.image}
                alt=""
                width={120}
                height={120}
                className="size-full object-cover"
              />
            </div>
            <h3 className="font-bold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
        >
          Reservá tu Plan
        </a>
      </motion.div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="bg-foreground py-10 text-background">
      <div className="mx-auto flex w-[90%] max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-display text-lg">
          Nacho<span className="text-accent">.</span>
        </p>

        <div className="flex gap-4">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-accent hover:text-accent"
          >
            <Instagram size={18} />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex size-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-accent hover:text-accent"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <p className="text-xs text-background/60">
          © {new Date().getFullYear()} Nacho Olmedo · Nutrición Deportiva
        </p>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reservar turno por WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_10px_30px_rgba(124,179,5,0.35)]"
        >
          <MessageCircle size={24} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

const HERO_NAV_LINKS = [
  { label: 'Comida Real', href: '#servicios' },
  { label: 'Planes y Programas', href: '#servicios' },
  { label: 'Sobre Nosotros', href: INSTAGRAM_LINK },
]

export default function NachoPage() {
  return (
    <>
      <MinimalistHero
        logoText="Nacho."
        navLinks={HERO_NAV_LINKS}
        imageSrc="/nacho-olmedo.png"
        imageAlt="Nacho Olmedo, nutricionista deportivo"
        overlayText={{ part1: 'Comé Bien.', part2: 'Rendí Mejor.' }}
        description="Te ayudo a crear hábitos saludables, mejorar tu rendimiento y alcanzar tu mejor versión con nutrición real y planes personalizados."
        ctaLabel="Comenzar Ahora"
        ctaHref={WHATSAPP_LINK}
        secondaryCtaLabel="Ver Servicios"
        secondaryCtaHref="#servicios"
      />
      <main className="flex-1">
        <FitnessNutricion />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
