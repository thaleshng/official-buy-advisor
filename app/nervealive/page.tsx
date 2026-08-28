import type { Metadata } from "next"
import { SiteHeader } from "@/components/nervealive/site-header"
import { Hero } from "@/components/nervealive/hero"
import { DiscoverDifference } from "@/components/nervealive/discover-difference"
import { CookieConsent } from "@/components/nervealive/cookie-consent"

export const metadata: Metadata = {
  title: "Nerve Alive | Natural Nerve Health Support",
  description:
    "Nerve Alive is a supplement with ingredients and nutrients that promote nerve health in a natural way.",
}

export default function Page() {
  return (
    <main className="nervealive font-[family-name:var(--font-poppins)]">
      <SiteHeader />
      <Hero />
      <DiscoverDifference />
      <CookieConsent />
    </main>
  )
}
