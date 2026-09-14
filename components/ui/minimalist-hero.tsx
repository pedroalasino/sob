'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tilt } from '@/components/ui/tilt'

interface MinimalistHeroProps {
  logoText: string
  navLinks: { label: string; href: string }[]
  imageSrc: string
  imageAlt: string
  overlayText: {
    part1: string
    part2: string
  }
  description: string
  ctaLabel: string
  ctaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  className?: string
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-semibold text-white/80 transition-colors hover:text-white"
  >
    {children}
  </a>
)

export const MinimalistHero = ({
  logoText,
  navLinks,
  imageSrc,
  imageAlt,
  overlayText,
  description,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      id="top"
      className={cn(
        'relative flex min-h-[88vh] w-full flex-col overflow-hidden p-6 md:p-10',
        className
      )}
      style={{ backgroundColor: '#608259' }}
    >
      {/* Header */}
      <header className="relative z-20 grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center self-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-xl text-white"
        >
          {logoText}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden items-center justify-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </motion.div>

        <motion.a
          href={ctaHref}
          target={ctaHref.startsWith('http') ? '_blank' : undefined}
          rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.5 }}
          className="justify-self-end rounded-full bg-white px-5 py-2.5 text-sm font-bold text-foreground shadow-lg transition-shadow hover:shadow-xl"
        >
          {ctaLabel}
        </motion.a>
      </header>

      {/* Main Content Area */}
      <div className="relative mx-auto grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-10 py-10 md:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left"
        >
          <motion.h1
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display cursor-default text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </motion.h1>

          <p className="mt-6 max-w-md text-base text-white/85 sm:text-lg">{description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <motion.a
              href={ctaHref}
              target={ctaHref.startsWith('http') ? '_blank' : undefined}
              rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-foreground shadow-lg"
            >
              {ctaLabel}
            </motion.a>

            <motion.a
              href={secondaryCtaHref}
              target={secondaryCtaHref.startsWith('http') ? '_blank' : undefined}
              rel={secondaryCtaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.06, borderColor: 'rgba(255,255,255,0.9)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-bold text-white"
            >
              <PlayCircle className="h-[18px] w-[18px]" />
              {secondaryCtaLabel}
            </motion.a>
          </div>
        </motion.div>

        {/* Image */}
        <div className="relative order-1 flex h-full items-end justify-center overflow-hidden md:order-2 md:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 'some' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Tilt maxTilt={10}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={318}
                height={516}
                priority
                className="w-[260px] drop-shadow-2xl sm:w-[300px] md:w-[340px] lg:w-[380px]"
              />
            </Tilt>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
