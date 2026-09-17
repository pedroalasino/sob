import { fraunces, libreFranklin } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function AboutSection() {
  return (
    <section
      className={cn(fraunces.variable, libreFranklin.variable, "relative w-full overflow-hidden")}
      style={{ fontFamily: "var(--font-libre-franklin)" }}
    >
      <div className="relative flex min-h-[85vh] items-end sm:min-h-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mi-mision-poster.jpg"
          alt="Nacho"
          className="absolute inset-0 h-full w-full object-cover object-[55%_20%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl px-6 pb-16 pt-24 md:px-16 lg:pb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e8b45a]">
            Quién Soy
          </span>
          <h2
            style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
            className="mt-4 text-4xl font-medium leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            Detrás del plan, un nutricionista que también entrena
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Soy Nacho. Ayudo a deportistas a rendir mejor con planes reales, sin dietas genéricas.
          </p>
        </div>
      </div>
    </section>
  )
}
