import type { Metadata } from "next"
import { SiteHeader } from "@/components/matsatoknife/site-header"
import { Hero } from "@/components/matsatoknife/hero"
import { CookieConsent } from "@/components/matsatoknife/cookie-consent"

export const metadata: Metadata = {
  title: "Facas de Cozinha Matsato Promoção por Tempo Limitado: 70% de Desconto | Matsato",
  description:
    "Matsato knives bring a precision chef's blade and premium craftsmanship for demanding kitchen prep.",
  icons: {
    icon: "/images/matsatoknife/favicon_.png",
  },
}

export default function Page() {
  return (
    <main className="matsatoknife overflow-hidden bg-[#f4f1eb] font-[family-name:var(--font-montserrat)]">
      <SiteHeader />
      <Hero />
      <CookieConsent />
    </main>
  )
}
