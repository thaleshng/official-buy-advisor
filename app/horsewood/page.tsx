import type { Metadata } from "next"
import { CookieConsent } from "@/components/horsewood/cookie-consent"
import { Hero } from "@/components/horsewood/hero"
import { SiteHeader } from "@/components/horsewood/site-header"

export const metadata: Metadata = {
  title: "Horsewood™ — Reclaim Your Performance. Naturally.",
  description:
    "Discover Horsewood, a botanical supplement made for daily male vitality and energy.",
  icons: null,
}

export default function Page() {
  return (
    <main className="horsewood min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <SiteHeader />
      <Hero />
      <CookieConsent />
    </main>
  )
}
