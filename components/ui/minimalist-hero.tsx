'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type IconComponent = LucideIcon | React.ComponentType<{ className?: string }>

interface MinimalistHeroProps {
  logoText: string
  navLinks: { label: string; href: string }[]
  mainText: string
  readMoreLink: string
  readMoreLabel?: string
  imageSrc: string
  imageAlt: string
  overlayText: {
    part1: string
    part2: string
  }
  socialLinks: { icon: IconComponent; href: string; label: string }[]
  locationText: string
  className?: string
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
)

const SocialIcon = ({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: IconComponent
  label: string
}) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    aria-label={label}
    className="text-foreground/60 transition-colors hover:text-foreground"
  >
    <Icon className="h-5 w-5" />
  </a>
)

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  readMoreLabel = 'Leer más',
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      id="top"
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="relative z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-30 flex flex-col space-y-1.5 md:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-8 z-30 mt-3 flex flex-col gap-1 rounded-lg border border-border bg-background p-4 shadow-2xl md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium tracking-widest text-foreground/70 hover:bg-card hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 text-center md:order-1 md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font"
          >
            {readMoreLabel}
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 flex h-full items-center justify-center md:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute z-0 h-[240px] w-[240px] rounded-full bg-accent/90 md:h-[310px] md:w-[310px] lg:h-[370px] lg:w-[370px]"
          />
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={370}
              height={508}
              priority
              className="w-[300px] drop-shadow-2xl md:w-[400px] lg:w-[480px]"
            />
          </motion.div>
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="font-display text-3xl leading-[1.1] text-foreground sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
            {overlayText.part1}
            <br />
            <span className="text-accent">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} href={link.href} icon={link.icon} label={link.label} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  )
}
