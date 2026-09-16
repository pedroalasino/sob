import HeloraHero from "@/components/helora-hero"
import ServicesSection from "@/components/services-section"
import { DemoOne as ServiceCards } from "@/components/ui/demo"

export default function HeloraPage() {
  return (
    <>
      <HeloraHero />

      <div className="relative w-full bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
          src="/videos/mi-mision-nacho.mp4"
          poster="/images/mi-mision-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"
          aria-hidden="true"
        />

        <div className="relative">
          <ServicesSection />
          <ServiceCards />
        </div>
      </div>
    </>
  )
}
