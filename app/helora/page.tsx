import HeloraHero from "@/components/helora-hero"
import ServicesSection from "@/components/services-section"
import { DemoOne as ServiceCards } from "@/components/ui/demo"

export default function HeloraPage() {
  return (
    <>
      <HeloraHero />
      <ServicesSection />
      <ServiceCards />
    </>
  )
}
