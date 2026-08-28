import type { Metadata } from "next"
import { SiteHeader } from "@/components/derilaergo/site-header"
import { Hero } from "@/components/derilaergo/hero"
import { CookieConsent } from "@/components/derilaergo/cookie-consent"

export const metadata: Metadata = {
  title: "Derila Ergo | The ergonomic pillow that changes everything",
  description:
    "Derila Ergo is a pillow with a revolutionary ergonomic design that works with your body, unlocking deep sleep and pain-free mornings.",
}

export default function Page() {
  return (
    <main className="derilaergo font-[family-name:var(--font-montserrat)]">
      <SiteHeader />
      <Hero />
      <CookieConsent />
    </main>
  )
}
