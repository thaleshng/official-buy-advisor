"use client"

import { useEffect, useState } from "react"

const BASE_HOP_LINK =
  "https://maxweboffers.com/11330/10890/6/?subid=google_search"

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
        <h2
          className="font-[family-name:var(--font-poppins)] text-lg font-bold"
          style={{ color: "var(--na-blue)" }}
        >
          We value your privacy
        </h2>

        <p className="mt-3 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-black/80">
          We use cookies to improve your experience, analyze site traffic, and
          personalize content. By clicking{" "}
          <span className="font-semibold text-black">
            &quot;Accept All&quot;
          </span>
          , you agree to our use of cookies as described in our{" "}
          <a
            href={hopLink}
            className="font-semibold underline underline-offset-2"
            style={{ color: "var(--na-blue)" }}
          >
            Cookie Policy
          </a>{" "}
          and{" "}
          <a
            href={hopLink}
            className="font-semibold underline underline-offset-2"
            style={{ color: "var(--na-blue)" }}
          >
            Privacy Policy
          </a>
          .
        </p>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <a
            href={hopLink}
            className="rounded-md border border-border px-5 py-2.5 text-center font-[family-name:var(--font-poppins)] text-sm font-semibold text-black/70 transition-colors hover:bg-muted"
          >
            Cancel
          </a>

          <a
            href={hopLink}
            className="rounded-md px-6 py-2.5 text-center font-[family-name:var(--font-poppins)] text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--na-btn-grad)" }}
          >
            Accept All
          </a>
        </div>
      </div>
    </div>
  )
}
