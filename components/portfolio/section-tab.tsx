import { cn } from '@/lib/utils'

type SectionTabProps = {
  label: string
  as?: 'h2' | 'p'
  id?: string
  tone?: 'dark' | 'light'
  className?: string
}

// Pestaña tipo carpeta del boceto: bloque con el lado derecho en diagonal
// apoyado sobre una línea que cruza todo el ancho.
export function SectionTab({ label, as: Tag = 'h2', id, tone = 'dark', className }: SectionTabProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('relative', className)}>
      <Tag
        id={id}
        className={cn(
          'inline-block py-3 pl-5 pr-16 font-heading text-lg font-bold uppercase tracking-wider sm:pl-8 sm:pr-20 sm:text-xl',
          '[clip-path:polygon(0_0,calc(100%-3rem)_0,100%_100%,0_100%)]',
          dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
        )}
      >
        {label}
      </Tag>
      <div aria-hidden className={cn('h-1', dark ? 'bg-slate-900' : 'bg-white')} />
    </div>
  )
}
