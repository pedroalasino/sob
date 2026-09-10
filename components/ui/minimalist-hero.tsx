'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { KineticMenu } from '@/components/ui/kinetic-menu'

type IconComponent = LucideIcon | React.ComponentType<{ className?: string }>

interface MinimalistHeroProps {
  logoText: string
  navLinks: { label: string; href: string }[]
  imageSrc: string
  imageAlt: string
  overlayText: {
    part1: string
    part2: string
  }
  socialLinks: { icon: IconComponent; href: string; label: string }[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

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
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  ctaLabel,
  ctaHref,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      id="top"
      className={cn(
        'relative flex min-h-[88vh] w-full flex-col items-center justify-between overflow-hidden p-8 md:p-12',
        className
      )}
      style={{
        backgroundImage: 'url(/hero-bg-texture.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Hands illustration rising from the bottom edge */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 'some' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center md:justify-end md:pr-8 lg:pr-16 xl:pr-24"
      >
        <Image
          src="/hero-hands.png"
          alt=""
          width={703}
          height={325}
          priority
          className="w-[320px] translate-y-6 sm:w-[460px] md:w-[600px] lg:w-[720px]"
        />
      </motion.div>

      {/* Header */}
      <header className="relative z-[110] flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <KineticMenu navLinks={navLinks} />
        </motion.div>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Image */}
        <div className="relative order-1 flex h-full items-center justify-center overflow-hidden">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 220 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 'some' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={944}
              height={594}
              priority
              className="w-[360px] drop-shadow-2xl sm:w-[440px] md:w-[500px] lg:w-[600px]"
            />
          </motion.div>
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="z-20 order-2 flex flex-col items-center justify-center gap-8 text-center -translate-y-10 translate-x-6 sm:-translate-y-14 sm:translate-x-10 md:translate-y-0 md:translate-x-0 md:items-start md:justify-start md:text-left"
        >
          <motion.h1
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display cursor-default text-6xl leading-[1.05] text-foreground sm:text-7xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {overlayText.part1}
            <br />
            <span className="text-accent">{overlayText.part2}</span>
          </motion.h1>

          {ctaLabel && ctaHref && (
            <motion.a
              href={ctaHref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="font-display inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm tracking-wide text-accent-foreground shadow-lg shadow-accent/30"
            >
              {ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex translate-y-2 items-center space-x-4"
        >
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} href={link.href} icon={link.icon} label={link.label} />
          ))}
        </motion.div>
      </footer>
    </div>
  )
}
