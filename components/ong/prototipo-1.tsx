'use client'

import { useEffect, useState } from 'react'
import {
  Menu,
  X,
  GraduationCap,
  Droplets,
  Utensils,
  ShieldCheck,
  HandHeart,
  Siren,
  Quote,
  ArrowRight,
} from 'lucide-react'
import { Facebook, Instagram, Twitter, Youtube } from '@/components/ong/social-icons'

const NAV = [
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Qué hacemos', href: '#causas' },
  { label: 'Apadriná', href: '#apadrinar' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Contacto', href: '#contacto' },
]

const CAUSAS = [
  {
    icon: GraduationCap,
    title: 'Educación',
    desc: 'Acceso a escuelas, útiles y programas de alfabetización para miles de niños y niñas.',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80',
  },
  {
    icon: Droplets,
    title: 'Agua Potable',
    desc: 'Construcción de pozos y sistemas de agua segura en comunidades rurales.',
    img: 'https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?w=700&q=80',
  },
  {
    icon: Utensils,
    title: 'Nutrición',
    desc: 'Programas de alimentación y seguridad alimentaria para familias vulnerables.',
    img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=700&q=80',
  },
  {
    icon: ShieldCheck,
    title: 'Protección Infantil',
    desc: 'Entornos seguros y acompañamiento para prevenir la violencia y el abandono.',
    img: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=700&q=80',
  },
  {
    icon: Siren,
    title: 'Emergencias',
    desc: 'Respuesta rápida ante desastres naturales y crisis humanitarias.',
    img: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=700&q=80',
  },
  {
    icon: HandHeart,
    title: 'Desarrollo Comunitario',
    desc: 'Fortalecimiento económico y liderazgo local para un cambio sostenible.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80',
  },
]

const STATS = [
  { value: '1.2M+', label: 'niños beneficiados' },
  { value: '35', label: 'países con programas' },
  { value: '40', label: 'años de trabajo' },
  { value: 'USD 85M', label: 'invertidos en 2025' },
]

const TESTIMONIOS = [
  {
    quote:
      'Gracias al programa de apadrinamiento, mi hija pudo terminar la escuela y hoy estudia enfermería.',
    author: 'Marta, madre beneficiaria — Chaco',
  },
  {
    quote:
      'El pozo de agua que construyeron cambió la vida de toda la comunidad. Ya no caminamos horas para tener agua limpia.',
    author: 'Don Ramón, líder comunitario — Salta',
  },
  {
    quote:
      'Ser voluntaria de Fundación Raíces me enseñó que un pequeño aporte constante genera un cambio enorme.',
    author: 'Julieta, voluntaria',
  },
]

const NOTICIAS = [
  {
    tag: 'Emergencias',
    title: 'Ayuda humanitaria llega a comunidades afectadas por inundaciones',
    img: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=600&q=80',
  },
  {
    tag: 'Educación',
    title: 'Inauguramos dos nuevas aulas en la escuela rural de Los Molles',
    img: 'https://images.unsplash.com/photo-1497375638960-043a758c22b0?w=600&q=80',
  },
  {
    tag: 'Historias',
    title: 'De apadrinado a voluntario: la historia de Facundo',
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80',
  },
]

export default function Prototipo1() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [testimonio, setTestimonio] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTestimonio((prev) => (prev + 1) % TESTIMONIOS.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-white font-[Poppins,Arial,sans-serif] text-[#1a1a1a]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Top bar */}
      <div className="bg-[#0b2545] py-2 text-center text-xs text-white/80">
        Cada USD 30 alimenta a una familia durante una semana.{' '}
        <a href="#donar" className="font-semibold text-[#f5820d] underline">
          Donar ahora
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-extrabold text-[#0b2545]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5820d] text-white">
              R
            </span>
            Fundación Raíces
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#333] transition hover:text-[#0b2545]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#donar"
              className="hidden rounded-full bg-[#f5820d] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#dd6f05] sm:block"
            >
              Donar
            </a>
            <button
              aria-label="Abrir menú"
              className="lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 lg:hidden">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-sm font-medium">
                {item.label}
              </a>
            ))}
            <a
              href="#donar"
              className="mt-2 rounded-full bg-[#f5820d] px-6 py-2.5 text-center text-sm font-bold text-white"
            >
              Donar
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#0b2545]">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1800&q=80"
          alt="Niños en la escuela"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2545] via-[#0b2545]/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 inline-block rounded-full bg-[#f5820d] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            40 años trabajando por la niñez
          </p>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Cada niño merece un futuro con esperanza
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/85">
            Trabajamos junto a comunidades vulnerables para brindar educación,
            salud, agua potable y protección a niños, niñas y sus familias.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#donar"
              className="rounded-full bg-[#f5820d] px-8 py-4 text-base font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#dd6f05]"
            >
              Donar ahora
            </a>
            <a
              href="#apadrinar"
              className="rounded-full border-2 border-white px-8 py-4 text-base font-bold text-white transition hover:bg-white hover:text-[#0b2545]"
            >
              Apadriná un niño
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f5820d]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 text-center text-white lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-white/90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Causas */}
      <section id="causas" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#f5820d]">
            Qué hacemos
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0b2545] sm:text-4xl">
            Nuestras áreas de trabajo
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CAUSAS.map((c) => (
            <div
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#0b2545]/10 text-[#0b2545]">
                  <c.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0b2545]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#555]">{c.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#f5820d]"
                >
                  Conocer más <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apadrinar */}
      <section id="apadrinar" className="bg-[#f4f1ea]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80"
              alt="Apadrinamiento infantil"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#f5820d]">
              Apadrinamiento
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b2545] sm:text-4xl">
              Apadriná un niño y transformá su historia
            </h2>
            <p className="mt-5 text-[#555]">
              Con un aporte mensual acompañás el desarrollo integral de un
              niño o niña: educación, salud, nutrición y protección, en
              conjunto con su familia y comunidad. Vas a recibir cartas,
              fotos y actualizaciones de su crecimiento.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#333]">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f5820d]" /> Aporte
                mensual desde $3.000
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f5820d]" /> Contacto
                directo por carta con tu ahijado/a
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f5820d]" /> Informe
                anual de impacto en tu comunidad
              </li>
            </ul>
            <a
              href="#donar"
              className="mt-8 inline-block rounded-full bg-[#0b2545] px-8 py-4 text-base font-bold text-white transition hover:bg-[#0b2545]/90"
            >
              Quiero apadrinar
            </a>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Quote className="mx-auto mb-6 text-[#f5820d]" size={40} />
        <p className="text-xl font-medium leading-relaxed text-[#0b2545] sm:text-2xl">
          “{TESTIMONIOS[testimonio].quote}”
        </p>
        <p className="mt-6 text-sm font-semibold text-[#666]">
          {TESTIMONIOS[testimonio].author}
        </p>
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIOS.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimonio ${i + 1}`}
              onClick={() => setTestimonio(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === testimonio ? 'w-6 bg-[#f5820d]' : 'bg-[#ddd]'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Noticias */}
      <section id="noticias" className="bg-[#f4f1ea] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#f5820d]">
                Actualidad
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0b2545] sm:text-4xl">
                Últimas noticias
              </h2>
            </div>
            <a href="#" className="text-sm font-semibold text-[#0b2545]">
              Ver todas las noticias →
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {NOTICIAS.map((n) => (
              <a
                key={n.title}
                href="#"
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#f5820d]">
                    {n.tag}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-[#0b2545]">{n.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section id="donar" className="bg-[#0b2545] py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Tu donación cambia vidas hoy
          </h2>
          <p className="mt-4 text-white/80">
            Elegí un monto o ingresá el que quieras aportar. El 100% se
            destina a nuestros programas en terreno.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['$5.000', '$10.000', '$25.000', 'Otro monto'].map((m) => (
              <button
                key={m}
                className="rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:border-[#f5820d] hover:bg-[#f5820d]"
              >
                {m}
              </button>
            ))}
          </div>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-[#f5820d] px-10 py-4 text-base font-bold text-white transition hover:bg-[#dd6f05]"
          >
            Donar ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-[#081b34] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-extrabold">Fundación Raíces</div>
            <p className="mt-3 text-sm text-white/70">
              Trabajando junto a niños, familias y comunidades desde 1985
              para construir un futuro con esperanza.
            </p>
            <div className="mt-5 flex gap-4">
              <Facebook size={20} className="text-white/70 hover:text-white" />
              <Instagram size={20} className="text-white/70 hover:text-white" />
              <Twitter size={20} className="text-white/70 hover:text-white" />
              <Youtube size={20} className="text-white/70 hover:text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-bold">Sobre nosotros</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#">Quiénes somos</a></li>
              <li><a href="#">Transparencia</a></li>
              <li><a href="#">Trabajá con nosotros</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Involucrate</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#apadrinar">Apadriná un niño</a></li>
              <li><a href="#donar">Donar</a></li>
              <li><a href="#">Ser voluntario</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Av. Siempre Viva 1234, Córdoba</li>
              <li>+54 9 351 000-0000</li>
              <li>contacto@fundacionraices.org</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/50">
          © 2026 Fundación Raíces. Contenido de prototipo — reemplazar por
          información real de la organización.
        </div>
      </footer>
    </div>
  )
}
