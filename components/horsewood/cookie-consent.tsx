"use client"

import { useEffect, useState } from "react"

const BASE_OFFER_URL =
  "https://horsewood.us/funnelb3/v3/?aff_id=45034&subid2=13213_sessid2026100702362509&subid=4330"

export function CookieConsent() {
  const [offerUrl, setOfferUrl] = useState(BASE_OFFER_URL)

  useEffect(() => {
    const sourceParams = new URLSearchParams(window.location.search)
    const destination = new URL(BASE_OFFER_URL)

    for (const param of ["gclid", "gbraid", "wbraid"]) {
      const value = sourceParams.get(param)
      if (value) destination.searchParams.set(param, value)
    }

    setOfferUrl(destination.toString())
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl border border-[#282421] bg-[#171513] p-6 text-white shadow-2xl md:p-8">
        <h2 className="font-[family-name:var(--font-space-mono)] text-lg font-bold">
          We value your privacy
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          We use cookies to improve your experience, analyze site traffic, and personalize
          content. By clicking <span className="font-semibold text-white">&quot;Accept All&quot;</span>,
          you agree to our use of cookies as described in our{" "}
          <a href={offerUrl} className="font-semibold text-[#FF6B1A] underline underline-offset-2">
            Cookie Policy
          </a>{" "}
          and{" "}
          <a href={offerUrl} className="font-semibold text-[#FF6B1A] underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <a
            href={offerUrl}
            className="rounded-md border border-white/20 px-5 py-2.5 text-center text-sm font-semibold text-white/75 transition-colors hover:bg-white/10"
          >
            Cancel
          </a>
          <a
            href={offerUrl}
            className="rounded-md bg-[#FF6B1A] px-6 py-2.5 text-center text-sm font-bold text-black transition-opacity hover:opacity-90"
          >
            Accept All
          </a>
        </div>
      </div>
    </div>
  )
}
