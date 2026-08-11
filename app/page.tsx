import { Fraunces, Inter } from "next/font/google"
import { SiteHeader } from "@/components/oba/site-header"
import { Hero } from "@/components/oba/hero"
import { EditorsPick } from "@/components/oba/editors-pick"
import { Methodology } from "@/components/oba/methodology"
import { TrustStrip } from "@/components/oba/trust-strip"
import { FinalCta } from "@/components/oba/final-cta"
import { SiteFooter } from "@/components/oba/site-footer"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-oba-serif",
  weight: ["500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-oba-sans",
  weight: ["400", "500", "600", "700"],
})

export default function RootPage() {
  return (
    <div
      className={`oba ${fraunces.variable} ${inter.variable} bg-[var(--oba-paper)] font-[family-name:var(--font-oba-sans)]`}
    >
      <SiteHeader />
      <main>
        <Hero />
        <EditorsPick />
        <Methodology />
        <TrustStrip />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
