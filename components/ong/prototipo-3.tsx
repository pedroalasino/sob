'use client'

import { useState } from 'react'
import {
  Menu,
  X,
  GraduationCap,
  Droplets,
  Utensils,
  ShieldCheck,
  HandHeart,
  Siren,
  ArrowUpRight,
} from 'lucide-react'
import { Instagram, Twitter, Youtube } from '@/components/ong/social-icons'

const NAV = [
  { label: 'Misión', href: '#mision' },
  { label: 'Programas', href: '#programas' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Historias', href: '#historias' },
]

const PROGRAMAS = [
  { icon: GraduationCap, num: '01', title: 'Educación', desc: 'Becas y aulas para chicos sin acceso a escolaridad.' },
  { icon: Droplets, num: '02', title: 'Agua', desc: 'Pozos y agua potable para comunidades rurales.' },
  { icon: Utensils, num: '03', title: 'Nutrición', desc: 'Comedores y huertas comunitarias sostenibles.' },
  { icon: ShieldCheck, num: '04', title: 'Protección', desc: 'Espacios seguros para niños y adolescentes.' },
  { icon: Siren, num: '05', title: 'Emergencias', desc: 'Respuesta inmediata ante catástrofes.' },
  { icon: HandHeart, num: '06', title: 'Comunidad', desc: 'Oficios y microcréditos para familias.' },
]

const HISTORIAS = [
  {
    title: 'Dos aulas nuevas en Los Molles',
    tag: 'Educación',
    img: 'https://images.unsplash.com/photo-1497375638960-043a758c22b0?w=700&q=80',
  },
  {
    title: 'Agua potable para 400 familias',
    tag: 'Agua',
    img: 'https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?w=700&q=80',
  },
  {
    title: 'De apadrinado a voluntario',
    tag: 'Historias',
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=700&q=80',
  },
]

const STATS = [
  { value: '1.2M+', label: 'niños beneficiados' },
  { value: '35', label: 'países' },
  { value: '40', label: 'años' },
  { value: '92%', label: 'a programas' },
]

export default function Prototipo3() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-[Inter,Arial,sans-serif] text-[#111]">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-black uppercase tracking-tight">
            Raíces
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#111] transition hover:text-[#ff5a5f]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#donar"
              className="hidden items-center gap-1 bg-[#ff5a5f] px-6 py-3 text-sm font-bold text-white transition hover:bg-black sm:flex"
            >
              Donar <ArrowUpRight size={16} />
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
          <div className="flex flex-col gap-1 border-t border-black/10 bg-white px-6 py-4 lg:hidden">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-sm font-semibold">
                {item.label}
              </a>
            ))}
            <a
              href="#donar"
              className="mt-2 bg-[#ff5a5f] px-6 py-3 text-center text-sm font-bold text-white"
            >
              Donar
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="mision" className="mx-auto max-w-7xl px-6 pb-16 pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl">
              El agua limpia
              <br />
              cambia todo.
            </h1>
            <p className="mt-8 max-w-md text-lg text-[#444]">
              Fundación Raíces trabaja con comunidades vulnerables para
              garantizar educación, agua y protección a cada niño y niña.
              100% transparente, 100% en el terreno.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#donar"
                className="flex items-center gap-2 bg-[#ff5a5f] px-8 py-4 text-base font-bold text-white transition hover:bg-black"
              >
                Donar ahora <ArrowUpRight size={18} />
              </a>
              <a
                href="#programas"
                className="flex items-center gap-2 border-2 border-black px-8 py-4 text-base font-bold text-black transition hover:bg-black hover:text-white"
              >
                Ver programas
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=80"
              alt="Comunidad"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#ff5a5f] px-6 py-4 text-white">
              <div className="text-2xl font-black">92%</div>
              <div className="text-xs font-semibold uppercase tracking-wide">
                va directo a programas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section id="impacto" className="border-y border-black/10 bg-black py-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black">{s.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programas */}
      <section id="programas" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Programas</h2>
        <div className="mt-12 grid divide-y divide-black/10 border-t border-black/10">
          {PROGRAMAS.map((p) => (
            <div
              key={p.title}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6 transition hover:bg-black/[0.03] sm:grid-cols-[80px_auto_1fr_auto]"
            >
              <span className="hidden text-sm font-mono text-[#999] sm:block">{p.num}</span>
              <p.icon size={26} className="text-[#ff5a5f]" />
              <div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-[#666]">{p.desc}</p>
              </div>
              <ArrowUpRight className="text-[#999]" size={20} />
            </div>
          ))}
        </div>
      </section>

      {/* Historias */}
      <section id="historias" className="bg-[#f7f7f5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Últimas historias</h2>
            <a href="#" className="flex items-center gap-1 text-sm font-bold">
              Ver todas <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="mt-12 grid gap-1 md:grid-cols-3">
            {HISTORIAS.map((h) => (
              <a key={h.title} href="#" className="group relative block overflow-hidden">
                <img
                  src={h.img}
                  alt={h.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ff5a5f]">
                    {h.tag}
                  </span>
                  <h3 className="mt-1 text-lg font-bold">{h.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section id="donar" className="bg-[#ff5a5f] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Tu aporte, directo al terreno.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/90">
            Elegí un monto fijo o mensual. Todo el proceso es 100% online y
            transparente.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['$5.000', '$10.000', '$25.000', 'Otro monto'].map((m) => (
              <button
                key={m}
                className="border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#ff5a5f]"
              >
                {m}
              </button>
            ))}
          </div>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 bg-black px-10 py-4 text-base font-bold text-white transition hover:bg-white hover:text-black"
          >
            Confirmar donación <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-10 px-6">
          <div>
            <div className="text-lg font-black uppercase">Fundación Raíces</div>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Educación, agua y protección para comunidades vulnerables.
            </p>
          </div>
          <div className="flex gap-10 text-sm text-white/70">
            <ul className="space-y-2">
              <li><a href="#mision">Misión</a></li>
              <li><a href="#programas">Programas</a></li>
              <li><a href="#historias">Historias</a></li>
            </ul>
            <ul className="space-y-2">
              <li>contacto@fundacionraices.org</li>
              <li>+54 9 351 000-0000</li>
              <li>Córdoba, Argentina</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <Instagram size={20} className="text-white/70 hover:text-white" />
            <Twitter size={20} className="text-white/70 hover:text-white" />
            <Youtube size={20} className="text-white/70 hover:text-white" />
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-white/40">
          © 2026 Fundación Raíces. Contenido de prototipo — reemplazar por
          información real de la organización.
        </div>
      </footer>
    </div>
  )
}
