const links = [
  { href: '#quien-soy', label: 'Quién soy' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export function PillNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Principal"
        className="flex items-center gap-1 rounded-full border border-white/40 bg-white/70 p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur-md"
      >
        <a
          href="#inicio"
          className="rounded-full px-2.5 py-2 font-heading text-sm font-bold whitespace-nowrap sm:px-3 text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Inicio
        </a>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-2.5 py-2 text-sm font-medium whitespace-nowrap text-slate-700 sm:px-3 transition-colors duration-200 hover:bg-slate-900/5 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
