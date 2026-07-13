import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prototipos ONG",
  description: "Selector de prototipos de sitio para ONG",
}

const prototipos = [
  {
    href: "/ong/prototipo-1",
    nombre: "Prototipo 1 — Clásico",
    desc: "Réplica cercana de la estructura de worldvision.org: header con botón de donar, hero de impacto, causas, apadrinamiento y estadísticas. Paleta azul marino + naranja.",
  },
  {
    href: "/ong/prototipo-2",
    nombre: "Prototipo 2 — Comunidad",
    desc: "Versión más cálida y cercana, tonos tierra y verde, tarjetas redondeadas, foco en historias de la comunidad.",
  },
  {
    href: "/ong/prototipo-3",
    nombre: "Prototipo 3 — Moderno",
    desc: "Versión minimalista tipo charity:water, tipografía grande, blanco y negro con un color de acento, más editorial.",
  },
]

export default function OngIndexPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c1502e]">
          Prototipos
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
          Prototipos de sitio para tu ONG
        </h1>
        <p className="mt-4 text-[#555]">
          Tres variantes de landing inspiradas en la estructura de{" "}
          <span className="font-medium">worldvision.org</span>: header con
          donación destacada, hero, causas/programas, apadrinamiento,
          testimonios y footer. El contenido y las fotos son de ejemplo —
          se reemplazan por los reales de tu fundación.
        </p>

        <div className="mt-10 grid gap-5">
          {prototipos.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-[#1a1a1a] group-hover:text-[#c1502e]">
                {p.nombre}
              </h2>
              <p className="mt-2 text-sm text-[#666]">{p.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#c1502e]">
                Ver prototipo →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
