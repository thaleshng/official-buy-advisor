import Image from "next/image"
import { Button } from "@/components/ui/button"

const bullets = [
  "22-in-1 vision-essential formula",
  "Built for lasting eye comfort, clarity, and resilience",
  "Supports the gut-eye link for full-spectrum eye wellness",
]

export function Hero() {
  return (
    <section id="top" className="bg-background" style={{ height: "60vh", position: "relative", bottom: "80px" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 scale-125 rounded-full bg-gradient-to-br from-primary/5 to-primary/10"
            />
            <Image
              src="/images/visiflora-bottle.png"
              alt="VisiFlora supplement bottle surrounded by flowers, leaves, and an orange"
              width={520}
              height={560}
              className="h-auto w-[280px] md:w-[380px]"
              priority
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-primary text-balance md:text-5xl">
            Precision Vision Support That Starts in the Gut
          </h1>

          <ul className="mt-8 space-y-4">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-lg leading-relaxed text-primary/90">
                <Image
                  src="/images/star-marker.svg"
                  alt=""
                  width={17}
                  height={17}
                  aria-hidden="true"
                  className="mt-1.5 shrink-0"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              render={<a href="#buy" />}
              nativeButton={false}
              size="lg"
              className="rounded-full bg-accent px-8 font-heading font-bold text-accent-foreground hover:bg-accent/90"
            >
              Buy Now
            </Button>
            <Button
              render={<a href="#gut-eye-system" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="rounded-full bg-secondary px-8 font-heading font-bold text-secondary-foreground hover:bg-secondary/80"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
