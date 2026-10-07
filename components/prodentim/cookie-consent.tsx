"use client"

import { useEffect, useState } from "react"

const OFFER_URL =
  "https://prodentim101.com/text.php?hopId=a3f1a2cf-809e-4461-a88b-6aec4ffc4785&hop=tilenas"

export function CookieConsent() {
  const [offerUrl, setOfferUrl] = useState(OFFER_URL)

  useEffect(() => {
    const sourceParams = new URLSearchParams(window.location.search)
    const destination = new URL(OFFER_URL)

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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 px-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-[#272727] shadow-2xl md:p-8">
        <h2 className="text-lg font-bold">We value your privacy</h2>
        <p className="mt-3 text-sm leading-relaxed text-black/75">
          We use cookies to improve your experience, analyze site traffic, and personalize
          content. By clicking <strong>&quot;Accept All&quot;</strong>, you agree to our use
          of cookies as described in our{" "}
          <a href={offerUrl} className="font-semibold text-[#007953] underline underline-offset-2">
            Cookie Policy
          </a>{" "}
          and{" "}
          <a href={offerUrl} className="font-semibold text-[#007953] underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <a
            href={offerUrl}
            className="rounded-md border border-black/15 px-5 py-2.5 text-center text-sm font-semibold text-black/70 transition-colors hover:bg-black/5"
          >
            Cancel
          </a>
          <a
            href={offerUrl}
            className="rounded-md bg-[#D54545] px-6 py-2.5 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Accept All
          </a>
        </div>
      </div>
    </div>
  )
}
