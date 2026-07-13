import type { Metadata } from "next"
import Prototipo1 from "@/components/ong/prototipo-1"

export const metadata: Metadata = {
  title: "Fundación Raíces — Prototipo 1 (Clásico)",
  description: "Prototipo de sitio para ONG, inspirado en worldvision.org",
}

export default function Page() {
  return <Prototipo1 />
}
