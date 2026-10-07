"use client"

import { useEffect, useState } from "react"

const BASE_HOP_LINK =
  "https://get-matsato.com/matsato/product?&vndr=evf&evf=1&uid=5796&offid=58&affiliate_id=2051&shaff=0&subid2=11095_sessid20261007021113707&subid=3758"

export function CookieConsent() {
  const [hopLink, setHopLink] = useState(BASE_HOP_LINK)

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search)
    const offerUrl = new URL(BASE_HOP_LINK)

    const trackingParams = ["gclid", "gbraid", "wbraid"]

    trackingParams.forEach((param) => {
      const value = currentParams.get(param)
      if (value) {
        offerUrl.searchParams.set(param, value)
      }
    })

    setHopLink(offerUrl.toString())
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        <h2 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[#111827]">
          We value your privacy
        </h2>

        <p className="mt-3 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed text-black/80">
          We use cookies to enhance your experience, analyze site traffic, and personalize content.
          By clicking <span className="font-semibold text-black">&quot;Accept all&quot;</span>, you agree to the use of cookies as described in our{" "}
          <a href={hopLink} className="font-semibold underline underline-offset-2 text-[#111827]">
            Cookie Policy
          </a>{" "}
          and{" "}
          <a href={hopLink} className="font-semibold underline underline-offset-2 text-[#111827]">
            Privacy Policy
          </a>
          .
        </p>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <a
            href={hopLink}
            className="rounded-md border border-border bg-white px-5 py-2.5 text-center font-[family-name:var(--font-montserrat)] text-sm font-semibold text-black/70 transition-colors hover:bg-muted"
          >
            Decline
          </a>

          <a
            href={hopLink}
            className="rounded-md px-6 py-2.5 text-center font-[family-name:var(--font-montserrat)] text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "#FF9900" }}
          >
            Accept all
          </a>
        </div>
      </div>
    </div>
  )
}
