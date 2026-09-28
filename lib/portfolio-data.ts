// Contenido del portfolio. Todo lo editable vive acá.
// Los valores entre [corchetes] son de ejemplo: reemplazalos con tu info real.

export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
}

export const profile = {
  name: '[Tu Nombre]',
  role: '[Desarrollador de software]',
  headline: 'Construí tu software propio',
  intro:
    '[Una o dos líneas sobre qué hacés y para quién: por ejemplo, desarrollo sistemas a medida para que tu negocio deje de depender de planillas y herramientas genéricas.]',
  about: [
    '[Párrafo 1: quién sos, dónde estás y cuántos años llevás desarrollando.]',
    '[Párrafo 2: cómo trabajás con tus clientes y qué los diferencia de un proveedor más.]',
  ],
  skills: ['[Next.js]', '[React]', '[TypeScript]', '[Node.js]', '[Bases de datos]', '[Diseño UI/UX]'],
  email: '[tu@email.com]',
  whatsapp: '', // ej: '5493510000000' (solo números, con código de país)
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
}

export const clients: string[] = [
  '[Cliente 1]',
  '[Cliente 2]',
  '[Cliente 3]',
  '[Cliente 4]',
  '[Cliente 5]',
  '[Cliente 6]',
]

export const projects: Project[] = [
  {
    title: '[Proyecto 1]',
    description: '[Qué problema resolvía y qué resultado logró.]',
    tags: ['[Next.js]', '[Tailwind]'],
  },
  {
    title: '[Proyecto 2]',
    description: '[Qué problema resolvía y qué resultado logró.]',
    tags: ['[React]', '[Node.js]'],
  },
  {
    title: '[Proyecto 3]',
    description: '[Qué problema resolvía y qué resultado logró.]',
    tags: ['[TypeScript]'],
  },
  {
    title: '[Proyecto 4]',
    description: '[Qué problema resolvía y qué resultado logró.]',
    tags: ['[3D]', '[Spline]'],
  },
  {
    title: '[Proyecto 5]',
    description: '[Qué problema resolvía y qué resultado logró.]',
    tags: ['[API]'],
  },
  {
    title: '[Proyecto 6]',
    description: '[Qué problema resolvía y qué resultado logró.]',
    tags: ['[E-commerce]'],
  },
]
