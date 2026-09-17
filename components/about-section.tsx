import { fraunces, libreFranklin } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function AboutSection() {
  return (
    <section
      className={cn(fraunces.variable, libreFranklin.variable, "relative w-full overflow-hidden")}
      style={{ fontFamily: "var(--font-libre-franklin)" }}
    >
      <div className="relative flex min-h-[420px] items-center sm:min-h-[480px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mi-mision-poster.jpg"
          alt="Nacho"
          className="absolute inset-0 h-full w-full object-cover object-[60%_25%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-lg px-6 py-16 md:px-16">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e8b45a]">
            Quién Soy
          </span>
          <h2
            style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
            className="mt-3 text-2xl font-medium leading-snug text-white sm:text-3xl"
          >
            Detrás del plan, un nutricionista que también entrena
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
            Soy Nacho. Ayudo a deportistas a rendir mejor con planes reales, sin dietas genéricas.
          </p>
        </div>
      </div>
    </section>
  )
}
