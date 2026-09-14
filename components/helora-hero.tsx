"use client"

import { useRef, useState, type MouseEvent } from "react"
import { ArrowUpRight, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { fraunces, libreFranklin } from "@/lib/fonts"

const NAV_LINKS = ["Inicio", "Sobre mí", "Servicios", "Blog", "Contacto"]

const AVATARS = [
  { initials: "S", bg: "#8a9a7c" },
  { initials: "R", bg: "#c9b896" },
  { initials: "K", bg: "#e8ddc7" },
]

const TILT_MAX_DEG = 10

function ArrowButton({
  children,
  variant = "dark",
  className,
}: {
  children: React.ReactNode
  variant?: "dark" | "light"
  className?: string
}) {
  return (
    <button
      type="button"
      className={cn(
        "group flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-medium transition-transform duration-300 ease-out hover:scale-105 active:scale-100",
        variant === "dark"
          ? "bg-white/10 text-white"
          : "bg-white text-[#4b6644]",
        className
      )}
    >
      {children}
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black transition-transform duration-300 ease-out group-hover:translate-x-1">
        <ArrowUpRight className="h-4 w-4 text-white" />
      </span>
    </button>
  )
}

export default function HeloraHero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = imageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({
      rotateX: py * -TILT_MAX_DEG,
      rotateY: px * TILT_MAX_DEG,
    })
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  return (
    <section
      className={cn(
        fraunces.variable,
        libreFranklin.variable,
        "relative w-full bg-[#4b6644]"
      )}
      style={{ fontFamily: "var(--font-libre-franklin)" }}
    >
      <header className="relative z-20 flex items-center justify-between gap-4 px-6 py-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <Zap className="h-4 w-4 text-white" />
          </span>
          <span
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-xl font-medium text-white"
          >
            Nacho
          </span>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-white/10 p-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className={cn(
                "rounded-full px-5 py-2 text-sm transition-colors duration-300 ease-out",
                link === "Inicio"
                  ? "bg-white text-[#4b6644]"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              {link}
            </a>
          ))}
        </nav>

        <ArrowButton className="hidden sm:flex">
          Reservá tu Turno
        </ArrowButton>
      </header>

      <div
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden [perspective:1400px] lg:min-h-[720px]"
      >
        <div className="relative z-10 max-w-xl px-6 pb-10 pt-6 md:px-10 lg:pb-16 lg:px-16 lg:pt-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs tracking-wide text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Nutrición Deportiva · Córdoba
          </div>

          <h1
            style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
            className="mt-6 text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]"
          >
            Comé Bien
            <br />
            <span className="inline-flex items-center gap-3 align-middle">
              <Zap className="h-9 w-9 shrink-0 text-white sm:h-11 sm:w-11" />
              Rendí Mejor
            </span>
            <br />
            Sin Sufrir
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
            Asesoramiento en nutrición deportiva, online y presencial, para rendir mejor dentro y fuera de la cancha.
          </p>

          <div className="mt-14 flex items-center gap-4">
            <div className="group flex -space-x-3">
              {AVATARS.map((avatar, i) => (
                <div
                  key={avatar.initials}
                  style={{ backgroundColor: avatar.bg }}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#4b6644] text-xs font-semibold text-[#33421f] transition-transform duration-300 ease-out",
                    i === 0 && "group-hover:-translate-x-1.5",
                    i === 2 && "group-hover:translate-x-1.5"
                  )}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-white/90">+20 Deportistas Mejorados</span>
          </div>

          <ArrowButton variant="light" className="mt-8 sm:hidden">
            Reservá tu Turno
          </ArrowButton>
        </div>

        {/* the actual studio photo of Nacho: stacked below the copy on mobile, full-bleed background from lg up */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-background.jpg"
          alt="Nacho, nutricionista deportivo"
          draggable={false}
          className="relative h-[340px] w-full object-cover object-[70%_30%] transition-transform duration-200 ease-out will-change-transform sm:h-[420px] lg:absolute lg:inset-0 lg:z-0 lg:h-full lg:object-[78%_35%]"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.03)`,
          }}
        />
      </div>
    </section>
  )
}
