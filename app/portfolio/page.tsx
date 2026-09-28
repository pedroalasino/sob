import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PillNav } from '@/components/portfolio/pill-nav'
import { SectionTab } from '@/components/portfolio/section-tab'
import { ClientsMarquee } from '@/components/portfolio/clients-marquee'
import { ContactParallax } from '@/components/portfolio/contact-parallax'
import { SplineScene } from '@/components/ui/splite'
import { clients, profile, projects } from '@/lib/portfolio-data'

const heading = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })
const body = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.intro,
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'

export default function PortfolioPage() {
  return (
    <div className={`${heading.variable} ${body.variable} portfolio min-h-dvh bg-slate-50 text-slate-800`}>
      <a
        href="#contenido"
        className="sr-only z-[60] rounded-full bg-slate-900 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <PillNav />

      <main id="contenido">
        {/* 1. Banner */}
        <section id="inicio" aria-labelledby="inicio-titulo" className="pt-28 sm:pt-32">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 sm:px-8 md:grid-cols-2">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-blue-700">
                {profile.name} · {profile.role}
              </p>
              <h1
                id="inicio-titulo"
                className="mt-4 font-heading text-5xl font-bold leading-[1.05] text-balance text-slate-900 sm:text-7xl"
              >
                {profile.headline}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className={`inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors duration-200 hover:bg-blue-700 ${focusRing}`}
                >
                  Hablemos
                  <ArrowRight className="size-5" aria-hidden />
                </a>
                <a
                  href="#proyectos"
                  className={`inline-flex min-h-12 cursor-pointer items-center rounded-full border border-slate-300 px-6 font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-900/5 ${focusRing}`}
                >
                  Ver proyectos
                </a>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-3xl bg-slate-900 sm:h-[28rem]" aria-hidden>
              <div className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl" />
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
            </div>
          </div>

          <SectionTab label="Clientes" as="p" />
          <ClientsMarquee clients={clients} />
        </section>

        {/* 2. Quién soy */}
        <section id="quien-soy" aria-labelledby="quien-soy-titulo" className="bg-black py-24 text-white sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-8 md:grid-cols-[1fr_1.4fr]">
            <h2 id="quien-soy-titulo" className="font-heading text-4xl font-bold sm:text-6xl">
              Quién soy
            </h2>
            <div>
              {profile.about.map((p) => (
                <p key={p} className="mb-5 text-lg leading-relaxed text-white/80">
                  {p}
                </p>
              ))}
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologías">
                {profile.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/90">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Proyectos */}
        <section aria-labelledby="proyectos" className="pt-20 pb-24 sm:pt-28">
          <SectionTab label="Proyectos" id="proyectos" />
          <ul className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
            {projects.map((project, i) => (
              <li key={project.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg">
                  <div
                    aria-hidden
                    className="flex aspect-[16/10] items-end bg-gradient-to-br from-slate-900 to-blue-900 p-5 font-heading text-5xl font-bold text-white/15"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-bold text-slate-900">{project.title}</h3>
                    <p className="mt-2 flex-1 text-slate-600">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-5 inline-flex min-h-11 cursor-pointer items-center gap-1 font-semibold text-blue-700 hover:underline ${focusRing}`}
                      >
                        Ver proyecto
                        <ArrowUpRight className="size-4" aria-hidden />
                        <span className="sr-only">: {project.title}</span>
                      </a>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Contacto */}
        <ContactParallax />
      </main>

      <footer className="bg-black py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
