import { Apple } from "lucide-react"
import { cn } from "@/lib/utils"
import { fraunces, libreFranklin } from "@/lib/fonts"

export default function MissionSection() {
  return (
    <section
      className={cn(fraunces.variable, libreFranklin.variable, "relative w-full bg-black")}
      style={{ fontFamily: "var(--font-libre-franklin)" }}
    >
      <div className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden sm:min-h-[420px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/mi-mision-nacho.mp4"
          poster="/images/mi-mision-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />

        <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-20 text-center">
          <Apple className="h-7 w-7 text-[#e8b45a]" strokeWidth={1.5} />
          <h2
            style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
            className="text-3xl font-medium text-white sm:text-4xl"
          >
            Mi Misión
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Ayudar a deportistas a rendir mejor sin sacrificar lo que les gusta comer — con planes
            reales, simples y sostenibles, dentro y fuera de la cancha.
          </p>
        </div>
      </div>
    </section>
  )
}
