'use client'

import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(CustomEase)
}

interface KineticMenuProps {
  navLinks: { label: string; href: string }[]
}

const emptySubscribe = () => () => {}

export const KineticMenu = ({ navLinks }: KineticMenuProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const hasMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  // Custom ease + per-link shape hover
  useEffect(() => {
    if (!overlayRef.current) return

    try {
      if (!gsap.parseEase('kineticMain')) {
        CustomEase.create('kineticMain', '0.65, 0.01, 0.05, 0.99')
      }
    } catch {
      // fall back silently to the default GSAP ease
    }

    const ctx = gsap.context(() => {
      const links = overlayRef.current!.querySelectorAll('.kinetic-link[data-shape]')
      const shapesContainer = overlayRef.current!.querySelector('.kinetic-shapes')
      const cleanups: (() => void)[] = []

      links.forEach((item) => {
        const shapeIndex = item.getAttribute('data-shape')
        const shape = shapesContainer?.querySelector(`.kinetic-shape-${shapeIndex}`)
        if (!shape) return
        const shapeEls = shape.querySelectorAll('.kinetic-shape-el')

        const onEnter = () => {
          shapesContainer?.querySelectorAll('.kinetic-shape').forEach((s) => s.classList.remove('is-active'))
          shape.classList.add('is-active')
          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'back.out(1.7)',
              overwrite: 'auto',
            }
          )
        }

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => shape.classList.remove('is-active'),
            overwrite: 'auto',
          })
        }

        item.addEventListener('mouseenter', onEnter)
        item.addEventListener('mouseleave', onLeave)
        cleanups.push(() => {
          item.removeEventListener('mouseenter', onEnter)
          item.removeEventListener('mouseleave', onLeave)
        })
      })

      return () => cleanups.forEach((fn) => fn())
    }, overlayRef)

    return () => ctx.revert()
  }, [hasMounted])

  // Open / close timeline
  useEffect(() => {
    if (!overlayRef.current || !buttonRef.current) return

    const ctx = gsap.context(() => {
      const navWrap = overlayRef.current!
      const panel = overlayRef.current!.querySelector('.kinetic-panel')
      const scrim = overlayRef.current!.querySelector('.kinetic-scrim')
      const bgLayers = overlayRef.current!.querySelectorAll('.kinetic-backdrop-layer')
      const links = overlayRef.current!.querySelectorAll('.kinetic-link')
      const btnIcon = buttonRef.current!.querySelector('.kinetic-btn-icon')

      const tl = gsap.timeline({ defaults: { ease: 'kineticMain', duration: 0.7 } })

      if (isMenuOpen) {
        tl.set(navWrap, { display: 'block' })
          .set(panel, { xPercent: 0 }, '<')
          .fromTo(btnIcon, { rotate: 0 }, { rotate: 135, duration: 0.4 }, '<')
          .fromTo(scrim, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, '<')
          .fromTo(bgLayers, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, '<')
          .fromTo(links, { yPercent: 140, rotate: 6 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, '<+=0.3')
      } else {
        tl.to(scrim, { autoAlpha: 0, duration: 0.4 })
          .to(panel, { xPercent: 120 }, '<')
          .to(btnIcon, { rotate: 0, duration: 0.4 }, '<')
          .set(navWrap, { display: 'none' })
      }
    })

    return () => ctx.revert()
  }, [isMenuOpen, hasMounted])

  // Escape to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isMenuOpen])

  const overlay = (
    <div ref={overlayRef} className="kinetic-overlay fixed inset-0 z-[100] hidden">
      <div
        className="kinetic-scrim absolute inset-0 bg-foreground/50 opacity-0"
        onClick={() => setIsMenuOpen(false)}
      />
      <nav className="kinetic-panel absolute inset-y-0 right-0 flex w-full flex-col justify-center overflow-hidden bg-background px-10 py-16 sm:max-w-xl sm:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="kinetic-backdrop-layer absolute inset-0 bg-card" />
          <div className="kinetic-backdrop-layer absolute inset-0 bg-background" />
          <div className="kinetic-shapes absolute inset-0">
            {navLinks.map((_, i) => (
              <svg
                key={i}
                className={`kinetic-shape kinetic-shape-${i + 1} absolute inset-0 h-full w-full opacity-0`}
                viewBox="0 0 400 400"
                fill="none"
              >
                <circle className="kinetic-shape-el" cx={90 + i * 30} cy={110 + i * 10} r={70 + i * 8} fill="rgba(124,179,5,0.14)" />
                <circle className="kinetic-shape-el" cx={300 - i * 25} cy={280 - i * 15} r={50} fill="rgba(124,179,5,0.1)" />
              </svg>
            ))}
          </div>
        </div>

        <ul className="relative z-10 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <li key={link.label} className="kinetic-link overflow-hidden" data-shape={i + 1}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display block py-2 text-4xl uppercase leading-none text-foreground transition-colors hover:text-accent sm:text-5xl"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        className="relative z-40 flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 transition-colors hover:border-accent"
      >
        <span className="font-display text-xs tracking-widest text-foreground">
          {isMenuOpen ? 'CERRAR' : 'MENÚ'}
        </span>
        <svg className="kinetic-btn-icon h-3.5 w-3.5 text-accent" viewBox="0 0 16 16" fill="none">
          <path d="M7.33333 16L7.33333 0L8.66667 0L8.66667 16L7.33333 16Z" fill="currentColor" />
          <path d="M16 8.66667L0 8.66667L0 7.33333L16 7.33333L16 8.66667Z" fill="currentColor" />
        </svg>
      </button>

      {hasMounted && createPortal(overlay, document.body)}
    </>
  )
}
