import type { Metadata } from "next"
import Prototipo2 from "@/components/ong/prototipo-2"

export const metadata: Metadata = {
  title: "Fundación Raíces — Prototipo 2 (Comunidad)",
  description: "Prototipo de sitio para ONG, inspirado en worldvision.org",
}

export default function Page() {
  return <Prototipo2 />
}
