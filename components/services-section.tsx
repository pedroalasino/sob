import { MessageCircle, NotebookPen, TrendingUp } from "lucide-react"
import { fraunces, libreFranklin } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const SERVICES = [
  {
    icon: NotebookPen,
    title: "Planes Personalizados",
    desc: "Un plan armado a tu medida, según tu deporte, tus objetivos y lo que realmente te gusta comer.",
  },
  {
    icon: MessageCircle,
    title: "Asesoramiento Online y Presencial",
    desc: "Consultas por videollamada o cara a cara en Córdoba — vos elegís lo que mejor se adapta a tu rutina.",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento y Ajustes",
    desc: "Revisamos tu progreso y ajustamos el plan las veces que haga falta, para que siga funcionando.",
  },
]

export default function ServicesSection() {
  return (
    <section
      className={cn(fraunces.variable, libreFranklin.variable, "relative w-full")}
      style={{
        fontFamily: "var(--font-libre-franklin)",
        background: "linear-gradient(160deg, #b8b8b8 0%, #d6d6d6 45%, #e8e8e8 100%)",
      }}
    >
      <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-4 sm:pt-14">
        <h2
          style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
          className="text-center text-2xl font-medium text-[#1c1f18] sm:text-3xl"
        >
          Mis Servicios
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-lg bg-neutral-900/80 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-neutral-900/90 hover:shadow-2xl hover:shadow-black/40"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#e8b45a] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3
                style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
                className="mt-4 text-base font-medium text-white"
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{desc}</p>
              <a
                href="#"
                className="mt-4 inline-block rounded bg-white px-3 py-2 text-sm font-bold text-black transition-colors hover:bg-[#ffcf4d]"
              >
                Ver Más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
