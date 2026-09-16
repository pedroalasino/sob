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
      className={cn(fraunces.variable, libreFranklin.variable, "relative w-full bg-[#12160d]")}
      style={{ fontFamily: "var(--font-libre-franklin)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(60% 60% at 50% 0%, rgba(108,133,96,0.28), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2
          style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
          className="text-center text-3xl font-medium text-white sm:text-4xl"
        >
          Mis Servicios
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/40"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#e8b45a] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3
                style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
                className="mt-5 text-lg font-medium text-white"
              >
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
