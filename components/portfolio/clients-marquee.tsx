'use client'

import { useState } from 'react'
import { Pause, Play } from 'lucide-react'

export function ClientsMarquee({ clients }: { clients: string[] }) {
  const [paused, setPaused] = useState(false)

  return (
    <div className="relative flex items-center gap-3 bg-slate-900 py-5 text-white">
      <div className="marquee relative flex-1 overflow-hidden" data-paused={paused}>
        {/* La lista se duplica para que el loop sea continuo; la copia se oculta a lectores de pantalla. */}
        <div className="marquee-track flex w-max">
          <ul className="flex gap-12 pr-12" aria-label="Clientes">
            {clients.map((client) => (
              <li key={client} className="font-heading text-lg font-semibold whitespace-nowrap text-white/80">
                {client}
              </li>
            ))}
          </ul>
          <ul className="marquee-copy flex gap-12 pr-12" aria-hidden>
            {clients.map((client) => (
              <li key={client} className="font-heading text-lg font-semibold whitespace-nowrap text-white/80">
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? 'Reanudar carrusel de clientes' : 'Pausar carrusel de clientes'}
        className="marquee-toggle mr-4 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {paused ? <Play className="size-4" aria-hidden /> : <Pause className="size-4" aria-hidden />}
      </button>
    </div>
  )
}
