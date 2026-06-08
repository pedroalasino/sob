import type { Metadata } from "next"
import LMASMPage from "@/components/lmasm-page"

export const metadata: Metadata = {
  title: "LMASM Decoración",
  description: "Especialistas en decoración y cortinas a medida",
}

export default function Home() {
  return <LMASMPage />
}
