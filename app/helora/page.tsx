import HeloraHero from "@/components/helora-hero"
import { DemoOne as ServiceCards } from "@/components/ui/demo"
import MissionSection from "@/components/mission-section"

export default function HeloraPage() {
  return (
    <>
      <HeloraHero />
      <MissionSection />
      <ServiceCards />
    </>
  )
}
