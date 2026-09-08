import type { Metadata } from "next"
import NachoPage from "@/components/nacho-page"

export const metadata: Metadata = {
  title: "Nacho Olmedo | Nutrición Deportiva en Córdoba",
  description:
    "Nutricionista deportivo en Córdoba. Planes personalizados online y presenciales para rendir mejor dentro y fuera de la cancha. Comé bien sin pasarla mal.",
}

export default function Home() {
  return <NachoPage />
}
