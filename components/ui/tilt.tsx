'use client'

import React, { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface TiltProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  hoverScale?: number
  hoverLift?: number
}

export const Tilt = ({
  children,
  className,
  maxTilt = 10,
  hoverScale = 1,
  hoverLift = 0,
}: TiltProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(
    `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)`
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    const rotateY = x * maxTilt
    const rotateX = -y * maxTilt
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${hoverScale}) translateY(${-hoverLift}px)`
    )
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('will-change-transform transition-transform duration-300 ease-out', className)}
      style={{ transform }}
    >
      {children}
    </div>
  )
}
