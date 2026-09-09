'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlurTextProps {
  text: string
  delay?: number
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  className?: string
  style?: React.CSSProperties
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = 'words',
  direction = 'top',
  className = '',
  style,
}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const node = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.1 }
    )
    if (node) observer.observe(node)
    return () => {
      if (node) observer.unobserve(node)
    }
  }, [])

  const segments = useMemo(
    () => (animateBy === 'words' ? text.split(' ') : text.split('')),
    [text, animateBy]
  )

  return (
    <p ref={ref} className={cn('inline-flex flex-wrap', className)} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : `translateY(${direction === 'top' ? '-20px' : '20px'})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === 'words' && i < segments.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}

const MENU_ITEMS = [
  { label: 'INICIO', href: '#top', highlight: true },
  { label: 'QUIÉN SOY', href: '#quien-soy' },
  { label: 'QUÉ HAGO', href: '#que-hago' },
  { label: 'CASOS DE ÉXITO', href: '#casos-de-exito' },
  { label: 'RECURSOS', href: '#recursos' },
  { label: 'RESERVAR TURNO', href: 'https://wa.link/27gd5m' },
]

export default function PortfolioHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="z-50 p-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" strokeWidth={2} />
              ) : (
                <Menu className="h-8 w-8" strokeWidth={2} />
              )}
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 z-[100] mt-2 ml-4 w-[200px] rounded-lg border border-border bg-background p-4 shadow-2xl md:w-[240px]"
              >
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'block cursor-pointer py-1.5 px-2 text-lg font-bold tracking-tight transition-colors duration-300 hover:text-accent md:text-xl',
                      item.highlight ? 'text-accent' : 'text-foreground'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div
            className="text-4xl text-foreground"
            style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
          >
            N
          </div>

          {/* Spacer to balance the menu button so the signature stays centered */}
          <div className="w-11" aria-hidden="true" />
        </nav>
      </header>

      <main className="relative flex min-h-screen flex-col">
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="relative text-center">
            <div>
              <BlurText
                text="NACHO"
                delay={100}
                animateBy="letters"
                direction="top"
                className="font-display justify-center whitespace-nowrap text-[100px] uppercase leading-[0.75] tracking-tighter text-accent sm:text-[140px] md:text-[180px] lg:text-[210px]"
              />
            </div>
            <div>
              <BlurText
                text="OLMEDO"
                delay={100}
                animateBy="letters"
                direction="top"
                className="font-display justify-center whitespace-nowrap text-[100px] uppercase leading-[0.75] tracking-tighter text-accent sm:text-[140px] md:text-[180px] lg:text-[210px]"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/nacho-olmedo.png"
                alt="Nacho Olmedo"
                width={370}
                height={508}
                priority
                className="w-[180px] cursor-pointer drop-shadow-2xl transition-transform duration-300 hover:scale-105 sm:w-[230px] md:w-[280px] lg:w-[330px]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 w-full -translate-x-1/2 px-6 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36">
          <div className="flex justify-center">
            <BlurText
              text="Comer bien sin pasarla mal."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-center text-[15px] text-muted-foreground transition-colors duration-300 hover:text-foreground sm:text-[18px] md:text-[20px] lg:text-[22px]"
            />
          </div>
        </div>

        <a
          href="#quien-soy"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors duration-300 hover:text-foreground md:bottom-10"
          aria-label="Scroll para ver más"
        >
          <ChevronDown className="h-5 w-5 md:h-8 md:w-8" />
        </a>
      </main>
    </div>
  )
}
