import React from "react"
import { cn } from "@/lib/utils"
import { fraunces, libreFranklin } from "@/lib/fonts"

const cards = [
  {
    title: "Nutrición Pre y Post Partido",
    desc: "Qué comer antes de entrenar o competir, y cómo recuperar después, para que la comida trabaje a tu favor y no en contra.",
    gradientFrom: "#b6ff5c",
    gradientTo: "#1fab45",
  },
  {
    title: "Suplementación con Criterio",
    desc: "Creatina, proteína y qué realmente vale la pena — sin mitos ni gastos de más, adaptado a tu deporte y tus objetivos.",
    gradientFrom: "#34d399",
    gradientTo: "#047857",
  },
  {
    title: "Planes 100% a tu Medida",
    desc: "Asesoramiento online o presencial en Córdoba, pensado para tu rutina, tus gustos y tu forma de entrenar.",
    gradientFrom: "#4dff03",
    gradientTo: "#00a86b",
  },
]

export default function SkewCards() {
  return (
    <>
      <div
        className={cn(
          fraunces.variable,
          libreFranklin.variable,
          "flex min-h-screen flex-wrap items-center justify-center py-10"
        )}
        style={{
          fontFamily: "var(--font-libre-franklin)",
          background:
            "linear-gradient(135deg, #fdfdfd 0%, #f2f2f2 35%, #f8f8f8 60%, #eeeeee 100%)",
        }}
      >
        {cards.map(({ title, desc, gradientFrom, gradientTo }, idx) => (
          <div
            key={idx}
            className="group relative m-[40px_30px] h-[400px] w-[320px] transition-all duration-500"
          >
            {/* Skewed gradient panels */}
            <span
              className="absolute top-0 left-[50px] h-full w-1/2 skew-x-[15deg] transform rounded-lg transition-all duration-500 group-hover:left-[20px] group-hover:w-[calc(100%-90px)] group-hover:skew-x-0"
              style={{
                background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
              }}
            />
            <span
              className="absolute top-0 left-[50px] h-full w-1/2 skew-x-[15deg] transform rounded-lg blur-[30px] transition-all duration-500 group-hover:left-[20px] group-hover:w-[calc(100%-90px)] group-hover:skew-x-0"
              style={{
                background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
              }}
            />

            {/* Animated blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="animate-blob absolute top-0 left-0 h-0 w-0 rounded-lg bg-[rgba(255,255,255,0.1)] opacity-0 shadow-[0_5px_15px_rgba(0,0,0,0.08)] backdrop-blur-[10px] transition-all duration-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:h-[100px] group-hover:w-[100px] group-hover:opacity-100" />
              <span className="animate-blob animation-delay-1000 absolute right-0 bottom-0 h-0 w-0 rounded-lg bg-[rgba(255,255,255,0.1)] opacity-0 shadow-[0_5px_15px_rgba(0,0,0,0.08)] backdrop-blur-[10px] transition-all duration-500 group-hover:right-[50px] group-hover:bottom-[-50px] group-hover:h-[100px] group-hover:w-[100px] group-hover:opacity-100" />
            </span>

            {/* Content */}
            <div className="relative left-0 z-20 rounded-lg bg-neutral-900/70 p-[20px_40px] text-white shadow-lg backdrop-blur-[10px] transition-all duration-500 group-hover:left-[-25px] group-hover:p-[60px_40px]">
              <h2
                style={{ fontFamily: "var(--font-fraunces)", fontOpticalSizing: "auto" }}
                className="mb-2 text-2xl font-medium"
              >
                {title}
              </h2>
              <p className="mb-2 text-base leading-relaxed">{desc}</p>
              <a
                href="#"
                className="inline-block rounded bg-white px-3 py-2 text-base font-bold text-black hover:border hover:border-[rgba(255,0,88,0.4)] hover:bg-[#ffcf4d] hover:shadow-md"
              >
                Ver Más
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Custom keyframes not covered by Tailwind's generated utilities */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  )
}
