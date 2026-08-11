import type { Metadata } from "next"
import { SiteHeader } from "@/components/visiflora/site-header"
import { Hero } from "@/components/visiflora/hero"
import { DiscoverDifference } from "@/components/visiflora/discover-difference"
import { CookieConsent } from "@/components/visiflora/cookie-consent"

export const metadata: Metadata = {
  title: "VisiFlora | Precision Vision Support",
  description:
    "VisiFlora is a 22-in-1 formula that supports eye health through the gut-eye connection, for lasting visual clarity.",
}

export default function Page() {
  return (
    <main className="font-sans">
      <SiteHeader />
      <Hero />
      <DiscoverDifference />
      <CookieConsent />
    </main>
  )
}
