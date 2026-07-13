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
  Heart,
} from 'lucide-react'
import { Facebook, Instagram, Youtube } from '@/components/ong/social-icons'

const NAV = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Programas', href: '#programas' },
  { label: 'Historias', href: '#historias' },
  { label: 'Voluntariado', href: '#voluntariado' },
  { label: 'Contacto', href: '#contacto' },
]

const PROGRAMAS = [
  {
    icon: GraduationCap,
    title: 'Educación',
    desc: 'Becas, útiles escolares y talleres de apoyo para chicos de comunidades rurales.',
    img: 'https://images.unsplash.com/photo-1497375638960-043a758c22b0?w=700&q=80',
  },
  {
    icon: Droplets,
    title: 'Agua y saneamiento',
    desc: 'Pozos comunitarios y capacitación en higiene para prevenir enfermedades.',
    img: 'https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?w=700&q=80',
  },
  {
    icon: Utensils,
    title: 'Nutrición familiar',
    desc: 'Comedores comunitarios y huertas para asegurar alimentación diaria.',
    img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=700&q=80',
  },
  {
    icon: ShieldCheck,
    title: 'Cuidado infantil',
    desc: 'Espacios seguros de contención y acompañamiento psicosocial.',
    img: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=700&q=80',
  },
  {
    icon: Siren,
    title: 'Emergencias',
    desc: 'Kits de ayuda inmediata frente a inundaciones y otras catástrofes.',
    img: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=700&q=80',
  },
  {
    icon: HandHeart,
    title: 'Economía comunitaria',
    desc: 'Microcréditos y capacitación en oficios para familias emprendedoras.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80',
  },
]

const STATS = [
  { value: '48', label: 'comunidades acompañadas' },
  { value: '9.500', label: 'familias este año' },
  { value: '20', label: 'años en el territorio' },
  { value: '92%', label: 'de lo donado va a programas' },
]

const HISTORIAS = [
  {
    quote:
      'Antes caminábamos dos horas por agua. Hoy la huerta comunitaria y el pozo nos cambiaron la vida a todos.',
    author: 'Vecinas de Paraje La Rinconada',
  },
  {
    quote:
      'El comedor no es solo comida: es donde mis hijos hacen la tarea y encuentran contención.',
    author: 'Silvina, mamá de tres chicos',
  },
  {
    quote:
      'Empecé como voluntaria armando meriendas y hoy coordino el taller de oficios del barrio.',
    author: 'Ayelén, coordinadora comunitaria',
  },
]

export default function Prototipo2() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [historia, setHistoria] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setHistoria((prev) => (prev + 1) % HISTORIAS.length)
    }, 6500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-[#fbf3e7] font-[Nunito,Arial,sans-serif] text-[#3d2b1f]">
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fbf3e7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-xl font-black text-[#2f5233]">
            <Heart className="fill-[#c1502e] text-[#c1502e]" size={26} />
            Fundación Raíces
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-[#5b4636] transition hover:text-[#c1502e]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#donar"
              className="hidden rounded-2xl bg-[#c1502e] px-6 py-3 text-sm font-black text-white shadow-md transition hover:bg-[#a8431f] sm:block"
            >
              Quiero donar
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
          <div className="flex flex-col gap-1 bg-[#fbf3e7] px-6 py-4 lg:hidden">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-sm font-bold">
                {item.label}
              </a>
            ))}
            <a
              href="#donar"
              className="mt-2 rounded-2xl bg-[#c1502e] px-6 py-3 text-center text-sm font-black text-white"
            >
              Quiero donar
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-[#2f5233]/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#2f5233]">
              Junto a la comunidad
            </p>
            <h1 className="text-4xl font-black leading-[1.1] text-[#2f5233] sm:text-5xl">
              Construimos futuro, familia por familia
            </h1>
            <p className="mt-6 max-w-md text-lg text-[#5b4636]">
              Acompañamos a comunidades vulnerables con educación, agua,
              alimentación y protección infantil, siempre trabajando desde
              adentro, con las personas y no solo para ellas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#donar"
                className="rounded-2xl bg-[#c1502e] px-8 py-4 text-base font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#a8431f]"
              >
                Donar ahora
              </a>
              <a
                href="#voluntariado"
                className="rounded-2xl border-2 border-[#2f5233] px-8 py-4 text-base font-black text-[#2f5233] transition hover:bg-[#2f5233] hover:text-white"
              >
                Ser voluntario
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[#d9c9a3]" />
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1000&q=80"
              alt="Comunidad y niños"
              className="h-[420px] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#2f5233] py-14 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm font-semibold text-white/85">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programas */}
      <section id="programas" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-widest text-[#c1502e]">
            Nuestros programas
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#2f5233] sm:text-4xl">
            Dónde ponemos nuestras manos
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMAS.map((p) => (
            <div
              key={p.title}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c1502e]/10 text-[#c1502e]">
                  <p.icon size={22} />
                </div>
                <h3 className="text-lg font-black text-[#2f5233]">{p.title}</h3>
                <p className="mt-2 text-sm text-[#5b4636]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Historias */}
      <section id="historias" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80"
              alt="Historia de la comunidad"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <Quote className="mb-4 text-[#c1502e]" size={36} />
            <p className="text-2xl font-bold leading-relaxed text-[#2f5233]">
              “{HISTORIAS[historia].quote}”
            </p>
            <p className="mt-6 text-sm font-bold text-[#5b4636]">
              {HISTORIAS[historia].author}
            </p>
            <div className="mt-6 flex gap-2">
              {HISTORIAS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Historia ${i + 1}`}
                  onClick={() => setHistoria(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === historia ? 'w-6 bg-[#c1502e]' : 'bg-[#e2d3b5]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voluntariado */}
      <section id="voluntariado" className="bg-[#f0e6d2] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-black uppercase tracking-widest text-[#c1502e]">
            Sumate
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#2f5233] sm:text-4xl">
            No hace falta mucho para ayudar mucho
          </h2>
          <p className="mt-5 text-[#5b4636]">
            Podés donar tiempo, oficio o dinero. Todas las formas de ayudar
            construyen comunidad.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-2xl font-black text-[#c1502e]">1</div>
              <p className="mt-2 text-sm font-bold text-[#2f5233]">Sumate como voluntario</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-2xl font-black text-[#c1502e]">2</div>
              <p className="mt-2 text-sm font-bold text-[#2f5233]">Apadriná una familia</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-2xl font-black text-[#c1502e]">3</div>
              <p className="mt-2 text-sm font-bold text-[#2f5233]">Hacé una donación mensual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section id="donar" className="bg-[#c1502e] py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-black sm:text-4xl">Elegí tu aporte</h2>
          <p className="mt-4 text-white/90">
            Cada donación, grande o chica, se convierte en agua, comida y
            educación para una familia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['$5.000', '$10.000', '$25.000', 'Otro monto'].map((m) => (
              <button
                key={m}
                className="rounded-2xl border-2 border-white/40 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#c1502e]"
              >
                {m}
              </button>
            ))}
          </div>
          <a
            href="#"
            className="mt-8 inline-block rounded-2xl bg-[#2f5233] px-10 py-4 text-base font-black text-white transition hover:bg-[#264429]"
          >
            Confirmar donación
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-[#2f5233] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-black">Fundación Raíces</div>
            <p className="mt-3 text-sm text-white/70">
              Comunidad, tierra y esperanza. Trabajamos con familias desde
              2006.
            </p>
            <div className="mt-5 flex gap-4">
              <Facebook size={20} className="text-white/70 hover:text-white" />
              <Instagram size={20} className="text-white/70 hover:text-white" />
              <Youtube size={20} className="text-white/70 hover:text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-black">Nosotros</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#nosotros">Quiénes somos</a></li>
              <li><a href="#">Rendición de cuentas</a></li>
              <li><a href="#">Prensa</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black">Participá</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#voluntariado">Voluntariado</a></li>
              <li><a href="#donar">Donar</a></li>
              <li><a href="#">Empresas aliadas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Ruta 9 Km 12, Salta</li>
              <li>+54 9 387 000-0000</li>
              <li>hola@fundacionraices.org</li>
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
