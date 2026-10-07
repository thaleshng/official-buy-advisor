import type { Metadata } from "next"
import { CookieConsent } from "@/components/prodentim/cookie-consent"
import { Hero } from "@/components/prodentim/hero"
import { SiteHeader } from "@/components/prodentim/site-header"

export const metadata: Metadata = {
  title: "ProDentim - Text Presentation",
  description:
    "Meet ProDentim, an advanced oral probiotic blend designed to support healthy teeth and gums.",
  icons: {
    icon: "/images/prodentim/favicon.png",
  },
}

export default function Page() {
  return (
    <main className="prodentim min-h-screen overflow-hidden bg-white text-[#272727]">
      <SiteHeader />
      <Hero />
      <section id="about" className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-[960px] items-start gap-8 md:grid-cols-[220px_1fr] md:gap-12">
          <img
            src="/images/prodentim/doctor.png"
            alt="Dental professional presenting oral health"
            width={400}
            height={506}
            className="mx-auto h-auto w-full max-w-[220px]"
          />
          <div className="pt-1">
            <p className="text-[16px] font-bold text-[#D54545]">
              May 2022 - New Scientific Discovery
            </p>
            <h2 className="mt-3 text-[22px] font-bold leading-tight text-[#272727] md:text-[24px]">
              A recent study put out in the Springer Nature publication found that
              people who have good teeth have a high population of good bacteria in
              the mouth.
            </h2>
            <p className="mt-3 text-[17px] font-bold text-[#D54545]">
              (Hint - No Toothpaste or Mouthwash Involved)
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#272727]">
              A healthy balance of beneficial bacteria is an important part of
              supporting your teeth and gums. ProDentim is designed to complement
              your daily oral care routine with probiotic strains and nutrients.
            </p>
          </div>
        </div>
      </section>
      <CookieConsent />
    </main>
  )
}
