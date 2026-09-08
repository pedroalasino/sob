'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import {
  Activity,
  Apple,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Quote,
  Sparkles,
  Star,
  Users,
  Utensils,
} from 'lucide-react'
import PortfolioHero from '@/components/ui/portfolio-hero'
import { cn } from '@/lib/utils'

function Instagram({ size = 20 }: { size?: number }) {
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
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const WHATSAPP_LINK = 'https://wa.link/27gd5m'
const INSTAGRAM_LINK = 'https://www.instagram.com/nacho.nutriciondeportiva/'

const SERVICES = [
  {
    icon: ClipboardList,
    title: 'Plan nutricional personalizado',
    desc: 'Un plan armado a tu medida según tu deporte, objetivos y rutina. Nada de dietas genéricas.',
  },
  {
    icon: Activity,
    title: 'Antropometría y seguimiento',
    desc: 'Medimos tu composición corporal y ajustamos el plan con datos reales, no a ojo.',
  },
  {
    icon: Utensils,
    title: 'Nutrición pre y post entrenamiento',
    desc: 'Qué comer antes de jugar, antes de entrenar y después de competir para rendir y recuperar mejor.',
  },
  {
    icon: Sparkles,
    title: 'Suplementación con evidencia',
    desc: 'Creatina, proteína y demás: cuándo sirven, cómo tomarlos y cuándo no hacen falta.',
  },
  {
    icon: Users,
    title: 'Nutrición para equipos',
    desc: 'Asesoramiento grupal para clubes y equipos de rugby, fútbol y otros deportes.',
  },
  {
    icon: Apple,
    title: 'Educación alimentaria',
    desc: 'Aprendé a comer bien en el día a día, sin restricciones imposibles de sostener.',
  },
]

const STATS = [
  { value: 20, suffix: '+', label: 'Deportistas mejorados' },
  { value: 100, suffix: '%', label: 'Planes personalizados' },
  { value: 2, suffix: '', label: 'Modalidades: online y presencial' },
]

const TESTIMONIALS = [
  {
    name: 'Tomás R.',
    sport: 'Jugador de Rugby',
    quote:
      'Cambié la forma de comer antes y después de los partidos y se nota en la recuperación. Nacho te explica todo sin vueltas.',
  },
  {
    name: 'Julieta M.',
    sport: 'Corredora amateur',
    quote:
      'Por primera vez tengo un plan que puedo sostener en el tiempo. Bajé grasa sin sufrir ni pasar hambre.',
  },
  {
    name: 'Franco P.',
    sport: 'Futbolista',
    quote:
      'El seguimiento con mediciones te muestra el progreso real. Rindo mejor en la cancha y como mejor todos los días.',
  },
  {
    name: 'Camila S.',
    sport: 'Triatleta',
    quote:
      'Asesoramiento online súper claro y a tiempo. Entendí por fin cuándo y cómo usar la creatina.',
  },
]

const RESOURCES = [
  {
    title: '¿Qué comer antes de jugar?',
    desc: 'Guía rápida con ejemplos de comidas pre-competencia según el horario del partido.',
  },
  {
    title: 'Creatina: cómo y cuándo tomarla',
    desc: 'Todo lo que necesitás saber para usarla bien, sin mitos.',
  },
  {
    title: 'Ganar masa vs. perder grasa',
    desc: 'Las diferencias clave en la alimentación según tu objetivo actual.',
  },
  {
    title: 'Recetas fit para deportistas',
    desc: 'Opciones ricas y prácticas con buen aporte de proteína, como el brownie de 35g.',
  },
]

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.round(progress * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return value
}

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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
      {children}
    </p>
  )
}

function QuienSoy() {
  const points = [
    'Nutricionista especializado en rendimiento deportivo',
    'Filosofía "comer bien sin pasarla mal", sin dietas imposibles',
    'Seguimiento con mediciones reales, no solo la balanza',
    'Atención en Córdoba, online y presencial',
  ]

  return (
    <Section id="quien-soy">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <Eyebrow>¿Quién Soy?</Eyebrow>
          <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
            Nacho Olmedo
          </h2>
          <p className="mt-5 text-muted-foreground">
            Soy nutricionista y me especializo en nutrición deportiva. Trabajo con
            deportistas amateurs y profesionales que quieren rendir más, recuperarse
            mejor y sentirse bien con lo que comen, todos los días.
          </p>
          <p className="mt-4 text-muted-foreground">
            Ya acompañé a más de 20 deportistas de distintas disciplinas —rugby,
            fútbol, running, triatlón— a mejorar su alimentación sin volverse locos
            con dietas restrictivas.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-border">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
              alt="Nacho Olmedo, nutricionista deportivo"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">
                Lic. en Nutrición
              </p>
              <p className="text-xs text-white/80">Nutrición Deportiva · Córdoba</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function QueHago() {
  return (
    <Section id="que-hago" className="border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <Eyebrow>¿Qué Hago?</Eyebrow>
        <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
          Servicios pensados para deportistas
        </h2>
        <p className="mt-4 text-muted-foreground">
          Cada plan se arma según tu deporte, tus tiempos de entrenamiento y tus
          objetivos reales.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-accent"
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              <service.icon size={22} />
            </div>
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const count = useCountUp(value, inView)

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-6xl text-accent sm:text-7xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
    </div>
  )
}

function CasosDeExito() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(id)
  }, [paused])

  const current = TESTIMONIALS[index]

  return (
    <Section id="casos-de-exito" className="border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <Eyebrow>Casos de Éxito ⭐</Eyebrow>
        <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
          Resultados reales, deportistas reales
        </h2>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {STATS.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>

      <div
        className="relative mx-auto mt-16 max-w-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="rounded-3xl border border-border bg-card px-8 py-10 sm:px-12">
          <Quote className="text-accent" size={32} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <p className="mt-5 text-lg text-foreground/90 sm:text-xl">
                “{current.quote}”
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-bold">{current.name}</p>
                  <p className="text-sm text-muted-foreground">{current.sport}</p>
                </div>
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Testimonio anterior"
            onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Ir al testimonio ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  i === index ? 'w-6 bg-accent' : 'w-2 bg-border'
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Siguiente testimonio"
            onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  )
}

function Recursos() {
  return (
    <Section id="recursos" className="border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <Eyebrow>Recursos</Eyebrow>
        <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
          Contenido gratuito para empezar hoy
        </h2>
        <p className="mt-4 text-muted-foreground">
          Guías cortas y prácticas, sin vueltas. Pedilas por WhatsApp y te las mando.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {RESOURCES.map((resource, i) => (
          <motion.a
            key={resource.title}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent"
          >
            <div>
              <h3 className="font-bold">{resource.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{resource.desc}</p>
            </div>
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              <Download size={18} />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.a
        href={INSTAGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-border p-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-accent"
      >
        <Instagram size={18} />
        Más tips todas las semanas en Instagram
      </motion.a>
    </Section>
  )
}

function Contacto() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer')
  }

  const contactItems = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Reservá tu turno',
      href: WHATSAPP_LINK,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@nacho.nutriciondeportiva',
      href: INSTAGRAM_LINK,
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Córdoba, Argentina · Online y presencial',
      href: undefined,
    },
  ]

  return (
    <Section id="contacto" className="border-t border-border">
      <div className="grid gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
            Empecemos a rendir mejor
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contame tu deporte y tu objetivo. Te respondo por WhatsApp para
            coordinar tu primera consulta.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/40 bg-accent/10 p-5">
              <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={22} />
              <p className="text-sm text-foreground/90">
                ¡Gracias! Se abrió WhatsApp para que me mandes tu consulta
                directamente.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                required
                type="text"
                placeholder="Nombre"
                className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors focus:border-accent"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors focus:border-accent"
                />
                <input
                  required
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder="Contame tu deporte y objetivo"
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Enviar consulta
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {contactItems.map((item) => {
            const Wrapper = item.href ? 'a' : 'div'
            return (
              <Wrapper
                key={item.label}
                {...(item.href
                  ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </Wrapper>
            )
          })}

          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <Award size={20} />
              <p className="text-sm font-bold uppercase tracking-wide">
                Primera consulta
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Coordinamos por WhatsApp día, horario y modalidad (online o
              presencial) según lo que mejor te quede.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex w-[90%] max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-2xl uppercase tracking-tight">
            Nacho<span className="text-accent">.</span>Nutrición
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Nutrición deportiva en Córdoba, online y presencial.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Instagram size={18} />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
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
          className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_10px_30px_rgba(207,255,51,0.35)]"
        >
          <MessageCircle size={24} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default function NachoPage() {
  return (
    <>
      <PortfolioHero />
      <main className="flex-1">
        <QuienSoy />
        <QueHago />
        <CasosDeExito />
        <Recursos />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
