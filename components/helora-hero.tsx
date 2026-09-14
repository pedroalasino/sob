"use client"

import { useRef, useState, type MouseEvent } from "react"
import localFont from "next/font/local"
import { ArrowUpRight, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

const fraunces = localFont({
  src: [
    { path: "../app/fonts/Fraunces-Variable.ttf", weight: "300 700", style: "normal" },
    { path: "../app/fonts/Fraunces-Italic-Variable.ttf", weight: "300 700", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
})

const libreFranklin = localFont({
  src: [
    { path: "../app/fonts/LibreFranklin-Variable.ttf", weight: "100 900", style: "normal" },
    { path: "../app/fonts/LibreFranklin-Italic-Variable.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-libre-franklin",
  display: "swap",
})

const NAV_LINKS = ["Home", "About", "Services", "Blog", "Contact"]

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
          : "bg-white text-[#4d5d45]",
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
        "relative w-full bg-[#4d5d45]"
      )}
      style={{ fontFamily: "var(--font-libre-franklin)" }}
    >
      <header className="relative z-20 flex items-center justify-between gap-4 px-6 py-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <Leaf className="h-4 w-4 text-white" />
          </span>
          <span
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-xl font-medium text-white"
          >
            Helora
          </span>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-white/10 p-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className={cn(
                "rounded-full px-5 py-2 text-sm transition-colors duration-300 ease-out",
                link === "Home"
                  ? "bg-white text-[#4d5d45]"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              {link}
            </a>
          ))}
        </nav>

        <ArrowButton className="hidden sm:flex">
          Begin Your Journey
        </ArrowButton>
      </header>

      <div className="relative min-h-[820px] sm:min-h-[760px] lg:min-h-[720px]">
        <div className="relative z-10 max-w-xl px-6 pb-16 pt-6 md:px-10 lg:px-16 lg:pt-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs tracking-wide text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Therapy &amp; Mindfulness
          </div>

          <h1
            style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
            className="mt-6 text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]"
          >
            Smart Wellness
            <br />
            <span className="inline-flex items-center gap-3 align-middle">
              <Leaf className="h-9 w-9 shrink-0 text-white sm:h-11 sm:w-11" />
              Guided by
            </span>
            <br />
            Expert Care
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
            Compassionate, evidence-based care tailored to your mind and body — start your path to lasting balance today.
          </p>

          <div className="mt-14 flex items-center gap-4">
            <div className="group flex -space-x-3">
              {AVATARS.map((avatar, i) => (
                <div
                  key={avatar.initials}
                  style={{ backgroundColor: avatar.bg }}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#4d5d45] text-xs font-semibold text-[#3a4534] transition-transform duration-300 ease-out",
                    i === 0 && "group-hover:-translate-x-1.5",
                    i === 2 && "group-hover:translate-x-1.5"
                  )}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-white/90">50K+ Satisfied Clients</span>
          </div>

          <ArrowButton variant="light" className="mt-8 sm:hidden">
            Begin Your Journey
          </ArrowButton>
        </div>

        <div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-[420px] w-full [perspective:1400px] sm:h-[460px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[54%]"
        >
          <div
            className="h-full w-full overflow-hidden transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.03)`,
            }}
          >
            <svg
              viewBox="0 0 1000 1000"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heloraBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#71805f" />
                  <stop offset="50%" stopColor="#4d5d45" />
                  <stop offset="100%" stopColor="#2e3728" />
                </linearGradient>
                <radialGradient id="heloraGlow" cx="72%" cy="22%" r="55%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
                <path
                  id="heloraLeaf"
                  d="M0 0 C42 -16 82 4 96 46 C50 58 12 38 0 0 Z"
                />
              </defs>

              <rect width="1000" height="1000" fill="url(#heloraBg)" />
              <rect width="1000" height="1000" fill="url(#heloraGlow)" />

              <circle cx="760" cy="180" r="230" fill="#f6f3ec" opacity="0.08" />
              <circle cx="120" cy="820" r="280" fill="#f6f3ec" opacity="0.07" />
              <circle cx="880" cy="760" r="160" fill="#f6f3ec" opacity="0.06" />

              <g fill="#f6f3ec">
                <use href="#heloraLeaf" opacity="0.5" transform="translate(660,120) rotate(24) scale(2.1)" />
                <use href="#heloraLeaf" opacity="0.35" transform="translate(120,260) rotate(-35) scale(1.4)" />
                <use href="#heloraLeaf" opacity="0.3" transform="translate(760,620) rotate(150) scale(1.7)" />
                <use href="#heloraLeaf" opacity="0.4" transform="translate(300,780) rotate(-70) scale(1.9)" />
                <use href="#heloraLeaf" opacity="0.25" transform="translate(60,540) rotate(55) scale(1.1)" />
                <use href="#heloraLeaf" opacity="0.3" transform="translate(560,900) rotate(-10) scale(1.3)" />
              </g>

              <g fill="#ffffff" opacity="0.25">
                <circle cx="150" cy="140" r="3" />
                <circle cx="200" cy="100" r="2" />
                <circle cx="870" cy="360" r="3" />
                <circle cx="900" cy="420" r="2" />
                <circle cx="80" cy="440" r="2.5" />
                <circle cx="640" cy="880" r="2.5" />
              </g>
            </svg>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#4d5d45]/40 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-6 max-w-[15rem] text-right sm:bottom-10 sm:right-8">
              <p className="text-sm leading-relaxed text-white/90">
                Personalized guidance to help you find balance, clarity, and lasting peace of mind.
              </p>
              <ArrowButton variant="light" className="ml-auto mt-4">
                Book a Session
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
